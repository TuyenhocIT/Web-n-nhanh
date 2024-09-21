import React, { useContext } from 'react'
import './Item.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import { FoodContext } from '../Context/FoodContext';

export default function Item(props) {
  const {addCart} = useContext(FoodContext)
  return (
    <div className='item'>
          <Link to={`/menu/${props.id}`}>
            <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
          </Link>
          <p>{props.name}</p>
          <div className="item-price">{props.price}</div>
          <button className='btn-add' onClick={()=>{addCart(props.id)}}>
            <AddCircleIcon/> <span>Thêm vào giỏ hàng</span>
          </button>
    </div>
  )
}
