import React, {useEffect, useState} from 'react'
import AllProjects from './AllProjects'
import Pagination from './Pagination'
import ToggleDiv from './ToggleDiv'
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import './MainGrid.css'
import {v4} from 'uuid'

const MainGrid = () => {

  const [backendData, setBackendData] = useState([{}])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`/api/v1/projects?p=${page}`).then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [page])



  const handlePrevious = () => {
    
    setPage((p) => {
      if(p === 1) return p;
      return p - 1
    })
  }

  const handleNext = () => {
    setPage((p) => {
       return p + 1;
    })
    console.log(page)
  }

  const pageJump = (num) => {
    setPage(num)
  }
  return (
    <div id="projectsdiv">
      <div className="maingrid">
      <ToggleDiv />
      
      <div className="middlecont">
      <div className="port-hdr"><h2>Projects</h2></div>
      <Pagination key={v4()} pageJump={pageJump} page={page} />
        <AllProjects key={v4()} backendData={backendData}/>
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
        
      </div>
      </div>
    </div>
  )
}

export default MainGrid
