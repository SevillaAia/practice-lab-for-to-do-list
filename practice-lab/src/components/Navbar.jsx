import React from 'react';
import logo from "../assets/doItSvg.png";

function Navbar() {
  return (
        <nav className='nav'>
            <img src={logo} alt="app-logo" className='logo'/>
        </nav> 
  )
}

export default Navbar
