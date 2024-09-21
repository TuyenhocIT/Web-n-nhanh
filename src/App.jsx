import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Pages/HomePage.jsx';
import Menu from './components/Pages/Menu.jsx';
import AboutUs from './components/Pages/AboutUs.jsx';
import Contact from './components/Pages/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import Cart from './components/Pages/Cart.jsx';

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<Menu/>}>
          <Route path=':foodId' element={<Menu/>}/>
        </Route>
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}
