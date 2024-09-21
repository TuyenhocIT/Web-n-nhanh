import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../Context/FoodContext'
import './CSS/Cart.css'
import CloseIcon from '@mui/icons-material/Close';

export default function Cart() {
  const {handlePlus , handleMinus , all_foods , cartItems , deleteCart} = useContext(FoodContext)
  const [price , setPrice] = useState(0)

  const handlePrice = (item) => {
    let totalPrice = 0
    all_foods.map((item, i) => {
      totalPrice += item.price * cartItems[i];
    })
    setPrice(totalPrice)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <div className='cart-page'>
      <div className="cart-format-main">
        <p className='cart-column-name'>Món ăn</p>
        <p>Tên món</p>
        <p>Giá tiền</p>
        <p>Số lượng</p>
        <p>Xoá</p>
      </div>
      <hr />
      {all_foods.map((item,index)=>{
        if(cartItems[item.id] > 0){
          return <div>
            <div className="cart-format cart-format-main2">
              <img src={item.image} alt="" className='cart-image'/>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <div className='group-quantity'>
                <button className='btn-quantity' onClick={()=>handlePlus(item.id)}>+</button>
                <p className='cart-quantity'>{cartItems[item.id]}</p>
                <button className='btn-quantity' onClick={()=>handleMinus(item.id)}>-</button>
              </div>
              <p>
                <span onClick={()=>{deleteCart(item.id)}} className='icon-delete'><CloseIcon/></span>
              </p>
            </div>
            <hr />
          </div>
        }
      })}
      <div className='cart-format-down'>
          <h2>Tổng tiền thanh toán</h2>
            <div>
            <div className="cart-total">
              <p>Số tiền: </p>
              <p className='total'>{price} đ</p>
            </div>
          </div>
          <button className='btn-pay'>THANH TOÁN</button>
      </div>
    </div>
  )
}
