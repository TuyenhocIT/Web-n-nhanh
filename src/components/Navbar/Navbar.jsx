import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo_fastfood from '../../assets/logo_fastfood.jpg'
import icon_search from '../../assets/search-w.png'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartIcon from '@mui/icons-material/LocalMall';
import { FoodContext } from '../Context/FoodContext'

export default function Navbar() {
  const [select , setSelect] = useState('home')
  const {getCountCart} = useContext(FoodContext)


  return (
    <div className='navbar'>
        <div className="logo" onClick={()=>{setSelect('home')}}>
            <Link to='/' style={{ textDecoration: "none" , color: "black"}}>
                <img src={logo_fastfood} alt="" className='logo-fastfood'/> 
            </Link> 
            <p>Fast Food</p>
        </div>
        <ul>
            <li onClick={()=>{setSelect('home')}}><Link to='/' style={{ textDecoration: "none" , color: "black"}}>Trang chủ</Link> {select === 'home' ? <hr/> : <></>}</li>
            <li onClick={()=>{setSelect('food')}}><Link to='/menu' style={{ textDecoration: "none" , color: "black"}}>Thực đơn</Link> {select === 'food' ? <hr/> : <></>}</li>
            <li onClick={()=>{setSelect('about')}}><Link to='/about' style={{ textDecoration: "none" , color: "black"}}>Về chúng tôi</Link> {select === 'about' ? <hr/> : <></>}</li>
            <li onClick={()=>{setSelect('contact')}}><Link to='/contact' style={{ textDecoration: "none" , color: "black"}}>Liên hệ</Link> {select === 'contact' ? <hr/> : <></>}</li>
        </ul>
        <div className="search-box">
            <input type="text" placeholder='Tìm kiếm'/>
            <img src={icon_search} alt=""/>
        </div>
        <div className='login-register'>
            <Link to='/login'>
                <AccountCircleIcon style={{fontSize: "40px",color: "black"}} onClick={()=>{setSelect('login')}}/>
            </Link>
            <Link to='/cart'>
                <CartIcon style={{fontSize: "40px",color: "black"}} onClick={()=>{setSelect('cart')}}/>
            </Link>
            <div className='cart-count'>{getCountCart()}</div>
        </div>
    </div>
  )
}
