import React from 'react'
import "./App.css"
import About from './Components/About/About'
import Welcome from './Components/Welcome/Welcome' 
import Navigation from './Components/Navigation/Navigation'
import MainGrid from './Components/MainGrid/MainGrid'

const App = () => {

  return (
    <div className="maindiv">
      <Navigation />
      <Welcome />
      <About />
      <MainGrid />
    </div>
  )
}

export default App
