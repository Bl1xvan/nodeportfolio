import React, {useEffect, useState} from 'react'
import AllProjects from '../AllProjects/AllProjects'
import Pagination from '../Pagination/Pagination'
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
      if(backendData.next === "not null") return p + 1;
    })
    console.log(page)
  }

  const pageJump = (num) => {
    setPage(num)
  }
  return (
    <div className="maingrid">
    <div className="pgbtncont" id="previous" >
      <button className="pgbtn"
              onClick={handlePrevious}
              disabled={page === 1}><i className="material-icons">chevron_left</i>
              </button>
    </div>
    <div className="middlecont">
      <AllProjects key={v4()} backendData={backendData}/>
      <Pagination key={v4()} pageJump={pageJump} page={page} />
    </div>
    <div className="pgbtncont" id="next">
      <button className="pgbtn" 
              onClick={handleNext}
              disabled={backendData.next === "null"}><i className="material-icons">chevron_right</i>
              </button>
    </div>
  </div>
  )
}

export default MainGrid
