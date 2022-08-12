import React from 'react'
import './MobileMenu.css'

const MobileMenu = () => {
  return (
    <div className="navbar">
    <span className="togglediv"><button className="togglebtn">Button</button></span>
    <span className="navbargrid">
        <a href="#welcomediv">
          Welcome
        </a>
        <a href="#aboutdiv">
          Services
        </a>
        <a href="#projectsdiv">
          Projects
        </a>
    </span>
  </div>
  )
}

export default MobileMenu
