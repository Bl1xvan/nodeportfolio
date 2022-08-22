import React from 'react'
import "./MainGrid.css"
import "./Thumbnail.css"

const Thumbnail = ({title, displayBlock, depl}) => {
  return (
    
    <div className="main-cont">
    
    <div className="thumbnail-cont">
      <a href={depl} className="thumbnail-link">
        <span className="smloverlay"><h4>Go To Deployment</h4></span>
        <h2 className="thumbnail-name">{title}</h2>
       </a>
    </div>
      <div className="button-cont">
        <button className="showdetails" onClick={displayBlock}>Details</button>
      </div>
    </div>
    
  )
}

export default Thumbnail
