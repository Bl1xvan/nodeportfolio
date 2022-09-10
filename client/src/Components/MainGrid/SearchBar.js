import React from 'react'

const SearchBar = ({handleSearchBar}) => {
  return (
      <div className="searchdiv">
        <h2 className="searchlabel">Search</h2>
        <input type="text" name="searchbar" className="searchbar" onChange={handleSearchBar} />
      </div>
  )
}

export default SearchBar
