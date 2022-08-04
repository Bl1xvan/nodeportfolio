import React, {useEffect, useState} from 'react'
import OneProject from '../OneProject/OneProject'
import "./AllProjects.css"

const AllProjects = () => {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api/v1/projects").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [])
  return (
    <div className="allprojects">
      {(typeof backendData.projects === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.projects.map((project) => {
          const {title, repository, description, _id, deployment, image} = project;
          return (
                  <OneProject 
                      key={_id} 
                      title={title} 
                      repo={repository} 
                      desc={description} 
                      depl={deployment}
                      img={image}
                      />
                      
                  )
      })
      )}
    </div>
  )
}

export default AllProjects