import React, {useReducer} from 'react'
import Tag from './Tag'
import {v4} from 'uuid'

const Tags = () => {

  const initialTags = [
    {id: v4(), checked: false, name: "React.js"}, 
    {id: v4(), checked: false, name: "JS"}, 
    {id: v4(), checked: false, name: "CSS"}, 
    {id: v4(), checked: false, name: "HTML"}]

    const reducer = (state, action) => {
      switch (action.type) {
        case "COMPLETE":
          return state.map((item) => {
            if (item.id === action.id) {
              return { ...item, checked: !item.checked };
            } else {
              return item;
            }
          });
        default:
          return state;
      }
    };
    
  
    const [items, dispatch] = useReducer(reducer, initialTags);
    
    const handleChecked = (item) => {
    dispatch({ type: "COMPLETE", id: item.id });

  return (
    <div className="tagdiv">
        <h3 className="tagheader">Tags</h3>
        <div className="tag-list">
            {items.map((item) => {
              return(
                <Tag item={item} handleChecked={handleChecked}/>
              )
            })}
        </div>
        <span className="note">Just this website for node..currently</span>
    </div>
  )
}}

export default Tags
