import React from 'react';

const Event = ({event}) => {
  const eventStart = new Date(event.start);
  const shortMonth = eventStart.toLocaleString('default', { month: 'short' });
  const longMonth = eventStart.toLocaleString('default', { month: 'long' });
  const dateNumber = eventStart.getDate()
  const dateString = eventStart.toLocaleString('default', { weekday: 'long' })

  return (
    <div className="event-card">
      <div className="event-big-date">
        <div className="month">
          {shortMonth}
        </div>
        <div className="date">
          {dateNumber}
        </div>
      </div>
      <div className="event-details">
        <div className="event-title">
          {event.title}
        </div>
        <div className="event-full-date">
          {dateString}, {longMonth} {dateNumber}
        </div>
      </div>
    </div>
  )
}

export default Event;