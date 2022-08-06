import React from 'react'
import AllProjects from '../AllProjects/AllProjects'
import './MainGrid.css'

const MainGrid = () => {
  return (
    <div className="maingrid">
    <div className="pgbtncont"><button className="pgbtn" id="previous">X</button></div>
      <AllProjects />
    <div className="pgbtncont"><button className="pgbtn" id="next">X</button></div>
  </div>
  )
}

export default MainGrid
