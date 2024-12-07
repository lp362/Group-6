import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Course from "./Pages/Course";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import ContactUs from "./Pages/ContactUs";
import Apply from "./Pages/Apply";
import { CartProvider } from "./Components/Context/CartContext";
import NotFound from "./Pages/NotFound"; // Add a NotFound page for unmatched routes

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/apply/:id" element={<Apply />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} /> {/* Handle unmatched routes */}
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
