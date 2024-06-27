import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'

export const Navbar = () => {
    const[menu,setMenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className='Navbar_logo'>
            <img src={logo} alt=''/>
            <p>ApkiDukan</p>
        </div>
        <div>
            <ul className='Navbar_menu'>
                <li onClick={()=>{setMenu("Shop")}}>Shop {menu==="Shop"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:null}</li>
            </ul>
        </div>
        <div className="Nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
            <div className="cart-count">0</div>
        </div>
        </div>
  )
}
export default Navbar