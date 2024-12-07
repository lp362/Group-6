import React, { useState } from "react";
import "./NavBar.css";
import cart from "../Assets/cart.jpg";
import logo from "../Assets/Tutoring+.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Tutoring+ Logo" />
        <p>Tutoring+</p>
      </div>
      <ul className="nav-menu">
        {["home", "aboutUs", "courses", "contactUs"].map((menuItem) => (
          <li key={menuItem} onClick={() => setMenu(menuItem)}>
            <Link to={`/${menuItem === "home" ? "" : menuItem}`}>
              {menuItem.replace(/([A-Z])/g, " $1")}
            </Link>
            {menu === menuItem && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/register">
          <button className="register">Register</button>
        </Link>
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="Cart Icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
