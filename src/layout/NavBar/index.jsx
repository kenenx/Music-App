import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  const activeStyle = {
    textDecortation: "underline",
    color: "darkgrey"
  }

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
        <ul className='nav-links'>
          <li><NavLink style={navA} to="/">Home</NavLink></li>
          <li><NavLink style={navA} to="/songs">Songs</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default NavBar