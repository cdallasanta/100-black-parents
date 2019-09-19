import React from 'react';

const Ad = ({size}) => {
  return(
    <div className={`chunk ${size}-chunk`}>
      {size} Ad
    </div>
  )
}

export default Ad;