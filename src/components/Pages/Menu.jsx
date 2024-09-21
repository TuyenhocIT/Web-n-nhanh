import React, { useState } from 'react'
import Item from '../Item/Item'
import './CSS/Menu.css'
import all_foods from '../../assets/menu/all_foods.js'

export default function Menu() {
  return (
    <div className='menu-fastfood'>

      <div className="menu-row">
          <h3>Gà rán <hr className='line-chickenfried'/> </h3>
          <div className='food-list'>
              {
                all_foods.map((item , index) => {
                  if(item.category == 'chicken' && item.id != 0) {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                  }
              })}
          </div>
      </div>
      <div className="menu-row">
          <h3>Hamburger <hr className='line-hamburger'/> </h3>
          <div className='food-list'>
              {
                all_foods.map((item , index) => {
                  if(item.category == 'hamburger') {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                  }
              })}
          </div>
      </div>
      
      <div className="menu-row">
          <h3>Pizza <hr className='line-pizza'/> </h3>
          <div className='food-list'>
              {
                all_foods.map((item , index) => {
                  if(item.category == 'pizza') {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                  }
              })}
          </div>
      </div>

      <div className="menu-row">
          <h3>Món ăn kèm <hr className='line-dishtogether'/> </h3>
          <div className='food-list'>
              {
                all_foods.map((item , index) => {
                  if(item.category == 'dishtogether') {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                  }
              })}
          </div>
      </div>

      <div className="menu-row">
          <h3>Đồ uống & Đồ tráng miệng <hr className='line-drink'/> </h3>
          <div className='food-list'>
              {
                all_foods.map((item , index) => {
                  if(item.category == 'drink') {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
                  }              
              })}
          </div>
      </div>
    </div>
  )
}
