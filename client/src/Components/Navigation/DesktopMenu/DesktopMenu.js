import React from 'react'
import './DesktopMenu.css'

const DesktopMenu = () => {
  return (
    <div className="D-navbar">
    <span className="D-navbargrid">
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

export default DesktopMenu
