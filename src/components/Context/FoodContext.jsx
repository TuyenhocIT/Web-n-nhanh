import React, { createContext, useState } from 'react'
import all_foods from '../../assets/menu/all_foods.js'

export const FoodContext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {}
    for (let index = 0; index < all_foods.length ; index++) {
        cart[index] = 0;
    }
    return cart
}

export default function FoodContextProvider(props) {
    const [cartItems , setCartItems] = useState(getDefaultCart())
    
    const addCart = (itemId) => {
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId] + 1}))
    }
    
    const deleteCart = (itemId) => {
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId] - 1}))
    }
    
    const getTotalCart = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_foods.find((productFood) => { productFood.id === Number(item)})
                totalAmount += itemInfo.price * cartItems[item] 
            }
            return totalAmount
        }
    }

    const getCountCart = () => {
        let countItem = 0
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                countItem += cartItems[item]
            }
        }
        return countItem
    }

    const handlePlus = (itemId) => { 
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId] + 1}))
    }
    const handleMinus = (itemId) => { 
        setCartItems((prev)=>({...prev , [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {handlePlus , handleMinus , getCountCart , getTotalCart , all_foods , cartItems , addCart , deleteCart}

   return (
     <FoodContext.Provider value={contextValue}>
         {props.children}
     </FoodContext.Provider>
   )
}
