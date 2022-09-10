import React from 'react'
import "./MainGrid.css"

const Pagination = ({pageJump, page, toggleDisplay, backendData}) => {

  let pages = []

  for(let i = 1; i <= Math.ceil(backendData.pageCount); i++){
     pages.push(i)
  }
  return (
    <div className="pgcont">
    <button className="showside" onClick={toggleDisplay}>Show Filters</button>
    <div className="pglabel">
    <h3>Page Number</h3>
    <select className="pgnum" value={page} onChange={(event) => {pageJump(event.target.value)}}>
    {pages.map((pg, index) => {
        return <option key={index}>{pg}</option>
      })}
    </select>
    </div>

    </div>
  )
}

export default Pagination
