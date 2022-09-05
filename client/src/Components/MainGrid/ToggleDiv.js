import React from 'react'
import SearchBar from './SearchBar'
import Tags from './Tags'
import { useSpring, animated } from 'react-spring'

const ToggleDiv = ({toggle, toggleDisplay, checkBox, handleCheckBox}) => {
    const styles = useSpring({position: "absolute", zIndex: 3, left: toggle ? 0 : -1000 })
  

  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags checkBox={checkBox} handleCheckBox={handleCheckBox} />
    </div>
    <div className="toggle-controls" onClick={toggleDisplay}>
    <h3>Hide Filters</h3>
    </div>
    </animated.div>
  )
}

export default ToggleDiv
