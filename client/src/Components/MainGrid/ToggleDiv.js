import React from 'react'
import SearchBar from './SearchBar'
import Tags from './Tags'
import { useSpring, animated } from 'react-spring'

const ToggleDiv = ({toggle, toggleDisplay, checkBox, handleCheckBox, handleSearchBar, handleReset}) => {
    const styles = useSpring({position: "absolute", zIndex: 3, left: toggle ? 0 : -1000 })
  

  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar handleSearchBar={handleSearchBar}/>
      <Tags checkBox={checkBox} handleCheckBox={handleCheckBox} />
      <button type="button" onClick={handleReset}>Clear Search</button>
    </div>
    <div className="toggle-controls" onClick={toggleDisplay}>
    <h3>Hide Filters</h3>
    </div>
    </animated.div>
  )
}

export default ToggleDiv
