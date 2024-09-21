import React from 'react'
import './CSS/Register.css'
import { Link } from 'react-router-dom'
import Bg_Login from '../../assets/mcd_spicy2.jpg'


export default function Register() {
  return (
    <div className='register-page'>
      <img src={Bg_Login} alt="" className='bg-login'/>
      <div className="form-register">
            <h2>Tạo tài khoản</h2>
            <div className="form-input">
                <label htmlFor="phone">Họ và tên:</label>
                <input type="text" id='phone' placeholder='Điền họ tên của bạn' className='input-username'/>
            </div>
            <div className="form-input">
                <label htmlFor="phone">Số điện thoại:</label>
                <input type="text" id='phone' placeholder='Điền số điện thoại' className='input-username'/>
            </div>
            <div className="form-input">
                <label htmlFor="phone">Email:</label>
                <input type="text" id='phone' placeholder='Điền email của bạn' className='input-username'/>
            </div>
            <div className="form-input">
                <label htmlFor="password">Địa chỉ:</label>
                <input type="password" id='password' placeholder='Điền địa chỉ của bạn' className='input-password'/>
            </div>
            <p className='chbox-group'>
              <input type="checkbox" />
              <span> Tôi đồng ý điều khoản chính sách hoạt động và chính sách bảo mật thông tin</span>
            </p>
            <button className='btn-register'>Đăng kí</button>
            <p className='login-link'>
                <spanp>Bạn đã có tài khoản?</spanp>
                <Link to='/login'>Đăng nhập</Link>
            </p>
      </div>
    </div>
  )
}
