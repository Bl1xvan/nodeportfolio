import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav id="navbar">
    <ul id="navbarlist">
      <li class="navlistitem item-border">
        <a href="#welcome">
          Welcome
        </a>
      </li>
      <li class="navlistitem item-border">
        <a href="#portfolio">
          Services
        </a>
      </li>
      <li class="navlistitem">
        <a href="#profile">
          Projects
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation
