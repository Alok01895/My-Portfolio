import React from 'react'

export default function Review() {
  return (
    <div>
      <div className="comment" >
        <div className="com">
        <h3>Write a comment...</h3>
        <div className='comment-box'>
          <input type="text" className='com-section' name="comm"  placeholder='Enter....' /> 
          <button id='post'>Post</button>
        </div>
        </div>
      </div>

    </div>
  )
}

