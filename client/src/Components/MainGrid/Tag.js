import React from 'react'

const Tag = ({item, handleChecked}) => {

  return (
    <label><input type="checkbox" checked={item.checked} key={item.id} onClick={() => handleChecked(item)} />{item.name}</label>
  )
}

export default Tag
