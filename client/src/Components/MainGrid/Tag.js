import React from 'react'

const Tag = ({item, handleCheckBox}) => {

  return (
    <label className="tag"><input type="checkbox" checked={item.checked} onChange={() => handleCheckBox(item.id)} />{item.name}</label>
  )
}

export default Tag
