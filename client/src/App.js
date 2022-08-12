import React from 'react'
import "./App.css"
import Container2 from './Components/Container2/Container2'
import Welcome from './Components/Welcome/Welcome' 
import Navigation from './Components/Navigation/Navigation'

const App = () => {

  return (
    <div className="maindiv">
      <Navigation />
      <Welcome />
      <Container2 />
    </div>
  )
}

export default App
