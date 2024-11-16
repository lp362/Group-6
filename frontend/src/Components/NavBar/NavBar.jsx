import React from 'react'
import './NavBar.css'
import cart from '../Assets/cart.jpg'
import logo from '../Assets/LOGO.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return(

        <div className='navbar'>
            <div className= 'nav-logo'>
                <img src={logo} alt="" />
                <p>Tutoring</p>

            </div>
            <ul className='nav-menu'>

                <li>Home</li>
                <li>About us</li>
                <li>Courses</li>
                <li>Contact Us</li>

            </ul>

            <div className='nav-register'>
                <button>Register</button>

            </div>

            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart} alt=""/>

                <div className="nav-cart-count">0</div>


            </div>



        </div>







    )
    

}

export default NavBar