import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'

const Navigation = () => {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <BrowserRouter>
      <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className='app-logo' >
          <img src='../images/logo.png' />
          <p>Dress Twin</p>
        </div>

        <div className='app-link'>
          <NavLink to="/login">
            Home
          </NavLink>
          <NavLink to="/register">
            Register
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;
