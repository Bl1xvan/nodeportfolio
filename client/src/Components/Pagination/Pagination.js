import React from 'react'
import "./Pagination.css"

const Pagination = ({pageJump}) => {
  return (
    <div className="pagecont">
      <button onClick={() => {pageJump(1)}}>1</button>
      <button onClick={() => {pageJump(2)}}>2</button>
    </div>
  )
}

export default Pagination
