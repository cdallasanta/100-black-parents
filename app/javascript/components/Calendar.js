import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import EventForm from './EventForm';
import '../stylesheets/calendar.scss';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class eventCalendar extends React.Component {
  state = {
    school_data: {
      name: "",
      events: []
    },
    showEventForm: false,
    eventFormData: {}
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
    const startString = moment(startDate, 'HH:mm').format('h:mm A');

    const endDate = new Date(eventData.end)
    const endString = moment(endDate, 'HH:mm').format('h:mm A');

    return (
`Location: ${eventData.location}
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

  createEvent = eventData => {
    const dist_id = this.props.match.params.dist_id
    const school_id = this.props.match.params.school_id
    $.ajax({
      type: 'POST',
      url: `/api/districts/${dist_id}/schools/${school_id}/events`,
      data: {
        event: eventData
      },
      context: this,
      success: resp => {
        if (resp.approved) {
          this.setState({
            school_data: {
              ...this.state.school_data,
              events: [...this.state.school_data.events, resp]
            }
          });
        }
        this.setState({showEventForm: false});
      }
    })
  }

  closeOnClick = e => {
    if (e.target.id === "eventGreyBackground") {
      this.setState({showEventForm: false})
    }
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
              eventData={this.state.eventFormData}
              closeOnClick={this.closeOnClick}
              createEvent={this.createEvent.bind(this)}
            /> : null}
        </div>
      </div>
    );
  }
}

export default eventCalendar;