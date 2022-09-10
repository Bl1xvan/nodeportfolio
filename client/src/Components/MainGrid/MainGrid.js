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
  const [toggle, setToggle] = useState(false)
  const [langValue, setLangValue] = useState("All")
  const [title, setTitle] = useState("")
  const [checkBox, setCheckBox] = useState([
    {id: v4(), checked: false, name: "React.js"}, 
    {id: v4(), checked: false, name: "JS"}, 
    {id: v4(), checked: false, name: "CSS"}, 
    {id: v4(), checked: false, name: "HTML"}])
  
  
  useEffect(() => {
    fetch(`/api/v1/projects?p=${page}&languages=${langValue}&title=${title}`).then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [page, langValue, title])

  useEffect(()=>{
    setLangValue(() => {
    const filterCheckBox = checkBox.filter(item => item.checked === true)
    const filterMap = filterCheckBox.map(item => item.name);
    return filterMap.join('&') })
  }, [setLangValue, checkBox]) 

  const handleSearchBar = (e) => {
    setTitle(e.target.value)
  }
  
  const handleCheckBox = (id) => {
    setCheckBox((prev) => {
      return prev.map((item) => {
        if(item.id === id){
          return {...item, checked: !item.checked}
        }else{
          return {...item}
        }
      })
    })
    console.log(backendData)
  }


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
  }

  const pageJump = (num) => {
    setPage(num)
  }

  const toggleDisplay = () =>{
    setToggle(!toggle)
}




  return (
    <div id="projectsdiv">
      <ToggleDiv toggle={toggle} toggleDisplay={toggleDisplay} checkBox={checkBox} handleCheckBox={handleCheckBox} handleSearchBar={handleSearchBar} />
      <div className="maingrid">
      <div className="middlecont">
      <div className="port-hdr"><h2>Projects</h2>
      </div>
      <Pagination key={v4()} pageJump={pageJump} page={page} toggleDisplay={toggleDisplay} backendData={backendData}/>
      <AllProjects key={v4()} backendData={backendData}/>
      <PgBtnPair handlePrevious={handlePrevious} handleNext={handleNext} page={page} backendData={backendData} /> 
      </div>
      </div>
    </div>
  )
}

export default MainGrid
