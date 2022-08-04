import React, {useState} from 'react'
import "./OneProject.css"

const OneProject = ({title, repo, desc, depl, img}) => {

  const [displayStatus, setDisplayStatus] = useState("none");

  const displayBlock = () => {
    setDisplayStatus("block")
  }

  const displayNone = () => {
    setDisplayStatus("none")
  }

  const displayChange = {
    display: displayStatus
  }
  return (
    <>
    <div className="thumbnail">
        <div className="project-name"><h4>{title}</h4></div>
        <img src={img} alt={title} />
        <button className="showdetails" onClick={displayBlock}>Show Details</button>
    </div>
    <div className="overlay" style={displayChange}>
        <div className="fullinfo">
        <div className="fullproject-name"><h3>{title}</h3></div>
            <div className="half">
                <img src={img} alt={title} />
                <button className="hidedetails" onClick={displayNone}>Hide Details</button>
            </div>
            <div className="half">
              <div className="description"><p>{desc}</p></div>
              <div className="links">
                <a className="link" href={repo}>Repository</a>
                <a className="link" href={depl}>Deployment</a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OneProject