import React from 'react'
import './CSS/AboutUs.css'
import img_aboutUs from '../../assets/aboutUs.jpg'
export default function AboutUs() {
  return (
    <div className='about'>
        <div className="about__content">
            <h1 className="title">Về chúng tôi</h1>
            <p className="description">
              FastFood là một trang web chuyên cung cấp dịch vụ đặt và giao đồ ăn nhanh trực tuyến, 
              giúp khách hàng dễ dàng chọn món từ nhiều nhà hàng và quán ăn khác nhau. 
              Với giao diện thân thiện và dễ sử dụng, khách hàng có thể nhanh chóng đặt món ăn yêu thích và nhận hàng trong thời gian ngắn nhất. 
              FastFood cam kết mang lại sự tiện lợi, nhanh chóng và đảm bảo chất lượng món ăn. 
              Nền tảng này kết nối khách hàng với một mạng lưới đối tác giao hàng chuyên nghiệp, 
              mang đến trải nghiệm tốt nhất cho người dùng.
            </p>
            <button className="btn-about">Xem thêm</button>
        </div>
        <div className="about__image">
            <img src={img_aboutUs} alt="about-us-image" />
        </div>
    </div>
  )
}
