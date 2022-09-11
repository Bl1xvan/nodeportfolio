import React from 'react'

const Empty = ({message}) => {
  return (
    <>
    <div className="message">{message}</div>
    <div className="main-cont" style={{visibility: "hidden"}}>
    </div>
    </>
  )
}

export default Empty
