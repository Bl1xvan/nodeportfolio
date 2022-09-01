import React from 'react'
import "./MainGrid.css"

const Pagination = ({pageJump, page, toggleDisplay}) => {
  return (
    <div className="pgcont">
    <button className="showside" onClick={toggleDisplay}>Show Filters</button>
    <div className="pglabel">
    <h3>Page Number</h3>
    <select className="pgnum" value={page} onChange={(event) => {pageJump(event.target.value)}}>
      <option>1</option>
      <option>2</option>
    </select>
    </div>

    </div>
  )
}

export default Pagination
