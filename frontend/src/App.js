import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pages from './Pages/Pages';
import Course from './Pages/Course';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import HomePage from "./Pages/HomePage";
import AboutUs from './Pages/AboutUs';
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contactUs" element={<Pages category="contactUs" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/course" element={<Course />}>
          <Route path=":courseID" element={<Course />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
