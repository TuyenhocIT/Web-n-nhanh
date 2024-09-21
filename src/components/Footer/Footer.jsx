import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
export default function Footer() {
  return (
    <footer class="footer">
        <ul className='footer-list'>
          <li className='main-menu'>Về thực đơn</li>
          <li className='menu'>Gà rán</li>
          <li className='menu'>Hamburger</li>
          <li className='menu'>Đồ uống & Tráng miệng</li>
          <li className='menu'>Pizza</li>
          <li className='menu'>Món ăn kèm</li>
        </ul>

        <ul className='footer-list'>
          <li className='main-menu'>Về phục vụ</li>
          <li className='menu'>Ưu đãi</li>
          <li className='menu'>Combo</li>
          <li className='menu'>Đãi tiệc sinh nhật</li>
        </ul>

        <ul className='footer-list'>
          <li className='main-menu'>Liên hệ</li>
          <li className='menu'><LocalPhoneIcon/> Số điện thoại: +84 0945685477</li>
          <li className='menu'><EmailIcon/> Gmail: ffoodstore2024@gmail.com</li>
          <li className='menu'><HomeIcon/> Địa chỉ: 120 Hoàng Minh Thảo, P. Hòa Khánh Nam, <br /> Q. Liên Chiểu, Tp. Đà Nẵng</li>
        </ul>

        <ul className='footer-list'>
          <li className='main-menu'>Theo dõi</li>
          <li className='icons'>
            <div className='icon-facebook'>
              <FacebookIcon/>
            </div>
            <div className='icon-instagram'>
              <InstagramIcon/>
            </div>
            <div className='icon-youtube'>
              <YouTubeIcon/>
            </div>
          </li>
          <li>Copyright © 2024 Vietnam</li>
        </ul>
    </footer>
  )
}
