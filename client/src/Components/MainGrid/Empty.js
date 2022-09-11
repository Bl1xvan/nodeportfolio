import React from 'react'

const Empty = ({emptyClass, message}) => {
  return (
    <>
    <div className={emptyClass}>{message}</div>
    <div className="main-cont" style={{visibility: "hidden"}}>
    </div>
    </>
  )
}

export default Empty
