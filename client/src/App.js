import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api/v1/projects").then(
      response => response.json()
    ).then(
      data => setBackendData(data)
    )
  }, [])
  return (
    <div>
      {(typeof backendData.projects === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.projects.map((project) => (
          <div>
            <p key={project._id}>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default App
