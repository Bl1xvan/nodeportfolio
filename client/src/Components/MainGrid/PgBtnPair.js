import React from 'react'
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";

const PgBtnPair = ({handlePrevious, handleNext, page, backendData}) => {
  return (
    <div className="pgbtnpair">
    <button 
      type="button"
      className="pgbtn"
      onClick={handlePrevious}
      disabled={page===1}><IoMdArrowDropleft />
    </button>

    <button 
      type="button"
      className="pgbtn" 
      onClick={handleNext}
      disabled={backendData.next  === "null" || backendData.total === 0}><IoMdArrowDropright />
</button>
</div>
  )
}

export default PgBtnPair
