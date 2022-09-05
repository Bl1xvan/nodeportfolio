import React from 'react'

const Tag = ({item, handleCheckBox}) => {

  return (
    <label><input type="checkbox" checked={item.checked} onChange={() => handleCheckBox(item.id)} />{item.name}</label>
  )
}

export default Tag
