import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Tags from './Tags'
import { useSpring, animated } from 'react-spring'

const ToggleDiv = () => {
const [toggle, setToggle] = useState(false);
    const styles = useSpring({ position: "absolute", zIndex: 3, left: toggle ? 0 : -300 })
  
const toggleDisplay = () =>{
      setToggle(!toggle)
}
  return (
    <animated.div style={styles} className="togglediv">
    <div className="filter-controls">
      <SearchBar />
      <Tags />
    </div>
  <div className="toggle-controls" onClick={toggleDisplay}>
    <h3>{toggle? "Hide Filters" : "Show Filters"}</h3>
  </div>
</animated.div>
  )
}

export default ToggleDiv
