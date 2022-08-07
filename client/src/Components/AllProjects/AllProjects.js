import React from 'react'
import OneProject from '../OneProject/OneProject'
import "./AllProjects.css"

const AllProjects = ({backendData}) => {

  return (
    <div className="allprojects">
      {(typeof backendData.projects === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.projects.map((project) => {
          const {title, repository, description, _id, deployment, image, languages} = project;
          return (
                  <OneProject 
                      key={_id} 
                      title={title} 
                      repo={repository} 
                      desc={description} 
                      depl={deployment}
                      img={image}
                      lang={languages}
                      />
                      
                  )
      })
      )}
    </div>
  )
}

export default AllProjects