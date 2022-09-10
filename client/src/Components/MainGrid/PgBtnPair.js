import React from 'react'
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";

const PgBtnPair = ({handlePrevious, handleNext, page, backendData}) => {
  return (
    <div className="pgbtnpair">
    <button className="pgbtn"
    onClick={handlePrevious}
    disabled={page === 1}><IoMdArrowDropleft />
    </button>

    <button className="pgbtn" 
    onClick={handleNext}
    disabled={backendData.next === "null"}><IoMdArrowDropright />
</button>
</div>
  )
}

export default PgBtnPair
