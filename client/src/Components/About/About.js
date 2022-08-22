import React from 'react'
import './About.css'
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";

const About = () => {
  return (
    <div className="about" id="aboutdiv">
      <div className='info' id="services">
        <h3>Services</h3>
        <div className="info-grid">
          <div>Portfolios</div>
          <div>Phone Apps</div>
        </div>
      </div>
      <div className='info' id="languages">
        <h3>Languages</h3>
        <div className="info-grid">
          <div className="badge"><SiHtml5 />HTML</div>
          <div className="badge"><SiCss3 />CSS</div>
          <div className="badge"><SiJavascript />JS</div>
          <div className="badge"><SiReact />React</div>
          <div className="badge"><SiNodedotjs />Node</div>
        </div>
      </div>
    </div>
  )
}

export default About
