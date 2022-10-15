import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from '../pages/Home'
import Register from '../pages/Register'

const Navigation = () => {

  return (
    <>
      <BrowserRouter>
        <nav>
          <img src='../images/logo.png' />
          <div className='app-link'>
            <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#000' : '#777' })}>
              Home
            </NavLink>
            <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? '#000' : '#777' })}>
              Register
            </NavLink>
            {/* <NavLink to="#about" style={({ isActive }) => ({ color: isActive ? '#000' : '#777' })}>
              About
            </NavLink> */}
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navigation
