import React from 'react';
import $ from 'jquery';
import DateTimePicker from 'react-datetime-picker';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      start: props.eventData.start,
      end: props.eventData.end
    }
  }

  onStartChange = date => this.setState({ start: date })
  onTitleChange = e => this.setState({ title: e.target.value })
  onEndChange = date => this.setState({ end: date })
  onClick = e =>{
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render(){
    return(
      <div id="eventGreyBackground" className="eventGreyBackground" onClick={e => this.props.closeOnClick(e)}>
        <div className={"eventForm"}>
          <h3>New Event</h3>
          <form>
            Event Title: <input
              type="text" name="title"
              value={this.state.name}
              onChange={this.onTitleChange} /><br />
            Event Start: <DateTimePicker
              calendarIcon={null}
              required={true}
              value={this.state.start}
              onChange={this.onStartChange}
              disableClock={true}
              calendarType={"US"}
            /><br />
            Event End: <DateTimePicker
              calendarIcon={null}
              required={true}
              value={this.state.end}
              onChange={this.onEndChange}
              disableClock={true}
              calendarType={"US"}
            /><br />


            <input type="submit" value="Create Event" onClick={e => this.onClick(e)} />
          </form>
        </div>
      </div>
    )
  }
}

export default EventForm;