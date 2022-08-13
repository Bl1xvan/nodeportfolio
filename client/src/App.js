import React from 'react'
import "./App.css"
import Container2 from './Components/Container2/Container2'
import Welcome from './Components/Welcome/Welcome' 
import Navigation from './Components/Navigation/Navigation'
import SocialMedia from './Components/SocialMedia/SocialMedia'

const App = () => {

  return (
    <div className="maindiv">
      <Navigation />
      <SocialMedia />
      <Welcome />
      <Container2 />
    </div>
  )
}

export default App
