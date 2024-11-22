import React from 'react'
import './navbar.css'

import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

const navbar = () => {

  const [menu,setMenu]= useState("course");
  const{gettotalcartitems}=useContext(coursecontext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Courses</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("course")}}><Link style={{ textDecoration: none }} to ='/'>Course</Link>{menu==="course"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Python")}}><Link style={{ textDecoration: none }} to='/python'>Python</Link>{menu==="python"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Java")}}><Link style={{ textDecoration: none }} to ="java">Java</Link>{menu==="java"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Unity")}}><Link style={{ textDecoration: none }} to='/unity'>Unity</Link>{menu==="unity"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart.png} alt=""/></Link>
        <div className="nav-cart-count">{gettotalcartitems()}</div>
      </div>
    </div>
  )
}

export default navbar
