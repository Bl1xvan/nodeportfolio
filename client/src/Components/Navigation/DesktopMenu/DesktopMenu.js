import React from 'react'
import './DesktopMenu.css'
import SocialMedia from '../SocialMedia'

const DesktopMenu = () => {
  return (
    <div className="D-navbar">
    <span className="desktop-icons"><SocialMedia /></span>
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
        <a href="#contactdiv">
          Contact
        </a>
    </span>
  </div>
  )
}

export default DesktopMenu
