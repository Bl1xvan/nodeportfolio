import React, {useEffect, useState} from 'react'
import AllProjects from '../AllProjects/AllProjects'
import Pagination from '../Pagination/Pagination'
import './MainGrid.css'

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
    <div className="pgbtncont">
      <button className="pgbtn"
              id="previous" 
              onClick={handlePrevious}
              disabled={page === 1}><i class="material-icons">chevron_left</i>
              </button>
    </div>
    <div className="middlecont">
      <AllProjects backendData={backendData}/>
      <Pagination pageJump={pageJump} />
    </div>
    <div className="pgbtncont">
      <button className="pgbtn" 
              id="next" 
              onClick={handleNext}
              disabled={backendData.next === "null"}><i class="material-icons">chevron_right</i>
              </button>
    </div>
  </div>
  )
}

export default MainGrid
