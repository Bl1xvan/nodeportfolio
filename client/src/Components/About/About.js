import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about" id="aboutdiv">
      <div className="header-test">
        <h2>Services</h2>
        <hr />
      </div>
      <ul className="service-list1">
        <li>Portfolios</li>
        <li>Phone Apps</li>
      </ul>
      <div className="service-list2">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span>React</span>
        <span>Node</span>
      </div>
    </div>
  )
}

export default About
