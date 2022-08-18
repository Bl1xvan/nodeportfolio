import React from 'react'
import './SocialMedia.css'
import { IconContext } from 'react-icons/lib'
import { FaGithub, FaEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <IconContext.Provider value={{color: "white", size: "1em" }}>
    <span className="fa-icons">
      <a href="tvtropes.org"><FaGithub /></a>
      <a href="tvtropes.org"><FaEnvelope /></a>
      <a href="tvtropes.org"><FaLinkedinIn /></a>
      <a href="tvtropes.org"><FaTwitter /></a>
    </span>
   </IconContext.Provider>
  )
}

export default SocialMedia
