import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className="welcome" id="welcomediv">
    <div className="header">
      <h1>
          <span className="ltr">W</span>
          <span className="ltr">E</span>
          <span className="ltr">L</span>
          <span className="ltr">C</span>
          <span className="ltr">O</span>
          <span className="ltr">M</span>
          <span className="ltr">E</span>
      </h1>
      <div className="subheader">
        <h4>Front-End Developer</h4>
        <a href="#projectsdiv">Go to projects</a>
      </div>
    </div>
  </div>
  )
}

export default Welcome
