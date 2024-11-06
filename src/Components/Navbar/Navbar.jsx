import React from 'react'
import './Navbar.css'
import cart from '../Assets/cart.jpg'
import logo from '../Assets/LOGO.png';



const NavBar = () => {



    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/> {/* Add Logo*/}
                <p>Tutoring</p>
            </div>
            <ul className='nav-menu'>
                <li >Home  </li>
                <li> About us</li>
                <li >Courses </li>
                <li >More</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart} alt=""/>

                <div className="nav-cart-count">0</div>

            </div>

        </div>

    )


}

export default NavBar