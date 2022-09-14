import React, {useState} from 'react'
import './MobileMenu.css'
import SocialMedia from '../SocialMedia'
import { useSpring, animated } from 'react-spring'
import { FiMenu } from "react-icons/fi";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({ position: "relative", top: toggle ? 0 : -500 })

  const toggleDisplay = () =>{
    setToggle(!toggle)
  }
  return (
    <div className="M-navbar">
    <div className="menu">
      <span className="mobile-icons"><SocialMedia /></span>
      <button type="button" className="togglebtn" onClick={toggleDisplay}>
        <FiMenu />
      </button>
    </div>
    <animated.span className="M-navbargrid" style={styles}>
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
    </animated.span>
  </div>
  )
}

export default MobileMenu
