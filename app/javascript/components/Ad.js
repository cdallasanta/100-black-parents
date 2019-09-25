import React from 'react';

const Ad = ({size}) => {
  return(
    <div className={`ad ${size}`}>
      {size} Ad
    </div>
  )
}

export default Ad;