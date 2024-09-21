import React from 'react'
import './CSS/Contact.css'
import image_map from '../../assets/map.png'


export default function Contact() {
  return (
    <>
      <section className="contact">
          <div className="contact-left">
            <img src={image_map} alt="" className='img-map'/>
          </div>
          <div className='contact-right'>
            <form action="" id='form-contact'>
              <h3>Liên hệ với chúng tôi</h3>
              <input type="text" id="fname" name="fname" placeholder="Họ tên"/>
              <input type="email" id="femail" name="femail" placeholder="Địa chỉ Email"/>
              <input type="text" id="femail" name="femail" placeholder="Số điện thoại"/>
              <textarea id="fcontent" name="fcontent" placeholder="Nội dung yêu cầu"></textarea>
              <input type="submit" value="Gửi yêu cầu"/>
            </form>
          </div>
      </section> 
    </>
  )
}
