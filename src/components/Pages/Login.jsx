import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import Bg_Login from '../../assets/mcd_spicy.jpg'


export default function Login() {
  return (
    <div className='login-page'>    
        <img src={Bg_Login} alt="" className='bg-login'/>
        <div className="form-login">
            <h2>Đăng nhập</h2>
            <div className="form-input">
                <label htmlFor="phone">Số điện thoại:</label>
                <input type="text" id='phone' placeholder='Nhập số điiện thoại của bạn' className='input-username'/>
            </div>
            <div className="form-input">
                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" id='password' placeholder='Nhập mật khẩu của bạn' className='input-password'/>
            </div>
            <button className='btn-login'>Đăng nhập</button>
            <p className='regis-link'>
                <spanp>Bạn chưa có tài khoản?</spanp>
                <Link to='/register'>Đăng ký</Link>
            </p>
            <h4>Hoặc đăng nhập với</h4>
            <div className="btn-group-login">
                <button className='btn-facebook'><FacebookSharpIcon/> Đăng nhập bằng facebook</button>
                <button className='btn-google'><GoogleIcon/> Đăng nhập bằng google</button>
            </div>
        </div>

    </div>
  )
}
