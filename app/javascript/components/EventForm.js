import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      start: props.eventData.start,
      end: props.eventData.end
    }
  }

  onStartChange = date => this.setState({ start: date })
  onEndChange = date => this.setState({ end: date })
  onClick = e =>{
    e.preventDefault();
    debugger;
  }

  render(){
    return(
      <div id="eventGreyBackground" className="eventGreyBackground" onClick={e => this.props.closeOnClick(e)}>
        <div className={"eventForm"}>
          <h3>New Event</h3>
          <form>
            Event Name: <input type="text" name="name" value={this.state.name} /><br />
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