import React from 'react'
import "./Thumbnail.css"

const Thumbnail = ({img, title, displayBlock, depl}) => {
  return (
    
    <div className="main-cont">
    <div className="thumbnail-cont">
      <a href={depl} className="thumbnail-link">
        <img src={img} alt={title} className="thumbnail-img" />
        <span className="thumbnail-name"><h2>{title}</h2></span>
        <span className="smloverlay"><h3>Go To Deployment</h3></span>
       </a>
    </div>
      <div className="button-cont"><button className="showdetails" onClick={displayBlock}>Show Details</button></div>
    </div>
    
  )
}

export default Thumbnail
