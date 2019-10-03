import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class eventCalendar extends React.Component {
  state = {
    school_data: {
      name: "",
      events: []
    }
  }

  componentDidMount(){
    const dist_id = this.props.match.params.dist_id
    const school_id = this.props.match.params.school_id
    fetch(`/api/districts/${dist_id}/schools/${school_id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({school_data: data});
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.school_data.name} Calendar</h1>
        <div style={{
            height: '90vh',
            width: '90vw',
            margin: 'auto'}}>
          <Calendar
            events={this.state.school_data.events}
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