import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img/>
      </div>
      <div className='navbar-menu'>
        <ul>
          <Link to='/' className='link'><li>Home</li></Link>
          <Link to='/about' className='link' ><li>About</li></Link>
          <Link to='/events' className='link'><li>Events</li></Link>
          <Link to='/sponsors' className='link'><li>Sponsors</li></Link>
          <Link to='/contact' className='link'><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
