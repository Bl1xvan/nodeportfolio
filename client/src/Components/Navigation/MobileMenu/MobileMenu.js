import React, {useState} from 'react'
import './MobileMenu.css'
import { useSpring, animated } from 'react-spring'

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const styles = useSpring({ position: "relative", top: toggle ? 0 : -500 })

  const toggleDisplay = () =>{
    setToggle(!toggle)
  }
  return (
    <div className="M-navbar">
    <span className="togglediv"><button className="togglebtn" onClick={toggleDisplay}>{toggle? "Hide Menu" : "Show Menu"}</button></span>
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
    </animated.span>
  </div>
  )
}

export default MobileMenu
