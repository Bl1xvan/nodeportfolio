import React from 'react'
import "./Pagination.css"

const Pagination = ({pageJump, page}) => {
  return (
    <div className="pgcont">
    <div className="pglabel"><h3>Page Number</h3></div>
    <select className="pgnum" value={page} onChange={(event) => {pageJump(event.target.value)}}>
      <option>1</option>
      <option>2</option>
    </select>
    </div>
  )
}

export default Pagination
