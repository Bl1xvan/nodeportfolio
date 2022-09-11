import React from 'react'
import OneProject from './OneProject'
import "./MainGrid.css"
import Empty from "./Empty"

const AllProjects = ({backendData}) => {

  return (
    <div className="allprojects">
      {(typeof backendData.projects === 'undefined') ? (
        <Empty message={"loading"}/>
      ) : (backendData.total === 0) ? ( <Empty message={"No Results"} /> ) : (
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