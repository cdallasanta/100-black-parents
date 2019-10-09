import React from 'react';
import EventCard from '../components/EventCard';
import '../stylesheets/events.scss'

const EventsList = ({events}) => {
  function renderEvents() {
    return events.map((e, i) => {
      return <EventCard event={e} key={i} />
    })
  }

  return (
    <div id="events-section">
      <h3>Events</h3>
      <div id="events-div">
        {renderEvents()}
      </div>
    </div>
  )
}

export default EventsList;