import React from 'react'
import "./App.css"
import "./Colors.css"
import About from './Components/About/About'
import Welcome from './Components/Welcome/Welcome' 
import Navigation from './Components/Navigation/Navigation'
import MainGrid from './Components/MainGrid/MainGrid'
import Contact from './Components/Contact/Contact'

const App = () => {

  return (
    <div className="maindiv">
      <Navigation />
      <Welcome />
      <About />
      <MainGrid />
      <Contact />
    </div>
  )
}

export default App
