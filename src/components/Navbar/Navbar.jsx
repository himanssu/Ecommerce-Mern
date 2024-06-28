import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import { Link } from 'react-router-dom'

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
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop </Link>{menu==="Shop"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to = 'Men'>Men</Link>{menu==="Men"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Women")}}><Link  style={{textDecoration:'none'}}to = 'Women'>Women</Link>{menu==="Women"?<hr/>:null}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to = 'Kids'>Kids</Link>{menu==="Kids"?<hr/>:null}</li>
            </ul>
        </div>
        <div className="Nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className="cart-count">0</div>
        </div>
        </div>
  )
}
