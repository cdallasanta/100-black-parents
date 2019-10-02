import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class eventCalendar extends React.Component {
  state = {
    schoolName: "",
    events: []
  }

  componentDidMount(){
    let school_id = this.props.match.params.school_id;

    fetch(`/api/districts/1/schools/${school_id}/events`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({events: data});
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.SchoolName} Calendar</h1>
        <div style={{
            height: '90vh',
            width: '90vw',
            margin: 'auto'}}>
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

export default eventCalendar;