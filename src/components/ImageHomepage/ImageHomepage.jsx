import React from 'react'
import './ImageHomepage.css'
import ffood1 from '../../assets/ffood1.jpg'
import ffood2 from '../../assets/ffood2.jpg'
import ffood3 from '../../assets/ffood3.jpg'
import ffood4 from '../../assets/ffood4.jpg'
import ffood5 from '../../assets/ffood5.jpg'

export default function ImageSlider() {
  return (
    <div className='image-slider'>
      <img src={ffood2} alt="" />
      <div className='slogan'>
        <p>WELCOME TO FAST FOOD STORE</p>
        <img src={ffood5} alt="" />
        <p>GOOD FOOD - GOOD LIFE</p>
      </div>
      <img src={ffood4} alt="" />
    </div>
  )
}
