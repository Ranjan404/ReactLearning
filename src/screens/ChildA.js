import React, { memo } from 'react'

const ChildA = (Learning, count) => {
    console.log('I am a child component !!!');
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildA)
