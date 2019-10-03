import React from 'react';

const EventForm = ({eventData, closeOnClick}) => {
  return(
    <div className={"eventGreyBackground"} onClick={closeOnClick}>
      <div className={"eventForm"}>
        Test
      </div>
    </div>
  )
}

export default EventForm;