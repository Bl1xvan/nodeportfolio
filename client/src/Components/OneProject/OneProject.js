import React, {useState, useEffect} from 'react'
import "./OneProject.css"
import Thumbnail from "../Thumbnail/Thumbnail"
import Overlay from "../Overlay/Overlay"
import {v4} from 'uuid'

const OneProject = ({title, repo, desc, depl, img, lang}) => {

  const [displayStatus, setDisplayStatus] = useState("none");
  const [langArr, setLangArr] = useState([]);

  useEffect(() => {
    setLangArr(lang.map(l => l));
  }, [lang])
  

  const displayBlock = () => {
    setDisplayStatus("block")
  }

  const displayNone = () => {
    setDisplayStatus("none")
  }

  const displayChange = {
    display: displayStatus
  }

  return (
    <>
    <Thumbnail key={v4()} img={img} title={title} displayBlock={displayBlock} depl={depl}/>
    <Overlay 
        key={v4()}
        img={img} 
        title={title} 
        desc={desc} 
        displayNone={displayNone} 
        langArr={langArr} 
        repo={repo} 
        depl={depl} 
        displayChange={displayChange} />
    </>
  )
}

export default OneProject