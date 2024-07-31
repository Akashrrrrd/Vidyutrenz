import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img/>
      </div>
      <div className='navbar-menu'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Sponsors</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar