import React from 'react'
import Tag from './Tag'
import {v4} from 'uuid'

const Tags = ({checkBox, handleCheckBox}) => {

  return (
    <div className="tagdiv">
        <h3 className="tagheader">Tags</h3>
        <div className="tag-list">
            {checkBox.map((item) => {
              return(
                <Tag item={item} key={v4()} handleCheckBox={handleCheckBox} />
              )
            })}
        </div>
        <span className="note">Just this website for node..currently</span>
    </div>
  )
}

export default Tags
