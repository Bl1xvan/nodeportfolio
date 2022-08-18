import React from 'react'
import "./Languages.css"

const Languages = ({language}) => {
  return (language.map(l => (<div className="lang">{l}</div>)))
}

export default Languages
