import React from 'react'
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";

const PgBtnPair = ({handlePrevious, handleNext, page}) => {
  return (
    <div className="pgbtnpair">
    <button className="pgbtn"
    onClick={handlePrevious}
    disabled={page === 1}><IoMdArrowDropleft />
    </button>

    <button className="pgbtn" 
    onClick={handleNext}
    disabled={page === 2}><IoMdArrowDropright />
</button>
</div>
  )
}

export default PgBtnPair
