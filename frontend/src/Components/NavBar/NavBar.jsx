import React from 'react'
import './NavBar.css'
import cart from '../Assets/cart.jpg'
import logo from '../Assets/LOGO.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {


    const [menu,setMenu] = useState("home");

    return(

        <div className='navbar'>
            <div className= 'nav-logo'>
                <img src={logo} alt="" />
                <p>Tutoring</p>

            </div>
            <ul className='nav-menu'>

                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home </Link>{menu=="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("aboutUs")}}><Link style={{textDecoration: 'none'}} to='/aboutUs'>About us</Link>  {menu=="aboutUs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("courses")}}><Link style={{textDecoration: 'none'}} to='/courses'>Courses</Link> {menu=="courses"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contactUs")}}><Link style={{textDecoration: 'none'}} to='/contactUs'>Contact Us </Link>{menu=="contactUs"?<hr/>:<></>}</li>

            </ul>

            <div className='nav-login-cart'>
                <button className='register'>Register</button>
                <Link to='/login'><button className='login'>Login</button></Link>
                <Link to ='/cart'><img src={cart} alt=""/></Link>

                <div className="nav-cart-count">0</div>


            </div>



        </div>







    )
    

}

export default NavBar