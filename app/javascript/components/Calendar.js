import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class eventCalendar extends React.Component {
  render() {
    return (
      <div style={{ height: '90vh', width: '90vw'}}>
        <Calendar
          events={[]}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
        />
      </div>
    );
  }
}

export default eventCalendar;