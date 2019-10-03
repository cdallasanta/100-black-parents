import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import EventForm from './EventForm';
import '../stylesheets/calendar.scss'

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class eventCalendar extends React.Component {
  state = {
    school_data: {
      name: "",
      events: [],
      showEventForm: false,
      eventFormData: {}
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

  eventTooltip = eventData => {
    const startDate = new Date(eventData.start)
    const startHours = startDate.getHours() > 12 ? startDate.getHours() - 12 : startDate.getHours();
    const startString = `${startHours}:${startDate.getMinutes()}${startDate.getHours() > 12 ? "pm": "am"}`

    const endDate = new Date(eventData.end)
    const endHours = endDate.getHours() > 12 ? endDate.getHours() - 12 : endDate.getHours();
    const endString = `${endHours}:${endDate.getMinutes()}${endDate.getHours() > 12 ? "pm": "am"}`


    return (
`${eventData.location}
Start: ${startString}
End: ${endString}`
    )
  }

  showEventForm = slotInfo => {
    this.setState({
      eventFormData:{
        start: slotInfo.start,
        end: slotInfo.end
      },
      showEventForm: true
    })
  }

  closeOnClick = () => {
    this.setState({showEventForm: false})
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
            tooltipAccessor={this.eventTooltip}
            selectable={true}
            onSelectSlot={this.showEventForm}
          />

          {this.state.showEventForm ?
            <EventForm
              eventData={this.state.eventData}
              closeOnClick={this.closeOnClick}
            /> : null}
        </div>
      </div>
    );
  }
}

export default eventCalendar;