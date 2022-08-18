import React from 'react'
import "./App.css"
import About from './Components/About/About'
import Welcome from './Components/Welcome/Welcome' 
import Navigation from './Components/Navigation/Navigation'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import MainGrid from './Components/MainGrid/MainGrid'

const App = () => {

  return (
    <div className="maindiv">
      <Navigation />
      <SocialMedia />
      <Welcome />
      <About />
      <MainGrid />
    </div>
  )
}

export default App
