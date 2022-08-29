import React from 'react'
import "./MainGrid.css"
import "./Thumbnail.css"

const Thumbnail = ({title, displayBlock, depl}) => {
  return (
    
    <div className="main-cont">
    
    
      <a href={depl} className="thumbnail-link">
        <h2 className="thumbnail-name">{title}</h2>
        <span className="smloverlay"><h4>Go To Site</h4></span>
       </a>
    
      <div className="button-cont">
        <button className="showdetails" onClick={displayBlock}>Details</button>
      </div>
    </div>
    
  )
}

export default Thumbnail
