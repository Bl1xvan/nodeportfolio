import React, {useEffect, useState} from 'react'
import AllProjects from './AllProjects'
import Pagination from './Pagination'
import PgBtnPair from './PgBtnPair'
import ToggleDiv from './ToggleDiv'
import './MainGrid.css'
import {v4} from 'uuid'

const MainGrid = () => {

  const [backendData, setBackendData] = useState([{}])
  const [page, setPage] = useState(1)
  const [toggle, setToggle] = useState(false);

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

  const toggleDisplay = () =>{
    setToggle(!toggle)
}
  return (
    <div id="projectsdiv">
      <ToggleDiv toggle={toggle} toggleDisplay={toggleDisplay}/>
      <div className="maingrid">
      <div className="middlecont">
      <div className="port-hdr"><h2>Projects</h2></div>
      <Pagination key={v4()} pageJump={pageJump} page={page} toggleDisplay={toggleDisplay}/>
      <AllProjects key={v4()} backendData={backendData}/>
      <PgBtnPair handlePrevious={handlePrevious} handleNext={handleNext} page={page} backendData={backendData} /> 
      </div>
      </div>
    </div>
  )
}

export default MainGrid
