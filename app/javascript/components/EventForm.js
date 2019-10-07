import React from 'react';
import DateTimePicker from 'react-datetime-picker';

const EventForm = ({eventData, closeOnClick}) => {
  debugger;
  return(
    <div className={"eventGreyBackground"} onClick={closeOnClick}>
      <div className={"eventForm"}>
        <h3>New Event</h3>
        <form>
          Event Name: <input type="text" name="name" />
          Event Date: <DateTimePicker />
        </form>
      </div>
    </div>
  )
}

export default EventForm;