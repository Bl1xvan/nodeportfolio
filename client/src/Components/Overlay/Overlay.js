import React from 'react'
import Languages from "../Languages/Languages"
import "./Overlay.css"
import {v4} from 'uuid'

const Overlay = ({img, title, desc, displayNone, langArr, repo, depl, displayChange}) => {
  return (
    <div className="overlay" style={displayChange}>
        <div className="fullinfo">
        <div className="fullproject-name"><h2>{title}</h2></div>
            <div className="half">
                <img src={img} alt={title} />
                <button className="hidedetails" onClick={displayNone}>Hide Details</button>
            </div>
            <div className="half">
              <div className="language"><Languages key={v4()} language={langArr} /></div>
              <div className="description"><p>{desc}</p></div>
              <div className="links">
                <a className="link" href={repo}>Repository</a>
                <a className="link" href={depl}>Deployment</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Overlay

