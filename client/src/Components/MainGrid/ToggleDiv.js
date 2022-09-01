import React from 'react'
import SearchBar from './SearchBar'
import Tags from './Tags'
import { useSpring, animated } from 'react-spring'

const ToggleDiv = ({toggle, toggleDisplay}) => {
    const styles = useSpring({position: "absolute", zIndex: 3, left: toggle ? 0 : -400 })
  

  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags />
    </div>
    <div className="toggle-controls" onClick={toggleDisplay}>
    <h3>Hide Filters</h3>
    </div>
    </animated.div>
  )
}

export default ToggleDiv
