import React from 'react';
import DateTimePicker from 'react-datetime-picker';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start: props.eventData.start,
      end: props.eventData.end
    }
  }

  onChange = date => this.setState({ start: date })

  render(){
    return(
      <div id="eventGreyBackground" className="eventGreyBackground" onClick={e => this.props.closeOnClick(e)}>
        <div className={"eventForm"}>
          <h3>New Event</h3>
          <form>
            Event Name: <input type="text" name="name" /><br />
            Event Start: <DateTimePicker
              calendarIcon={null}
              required={true}
              value={this.state.start}
            onChange={this.onChange}
            /><br />
            Event End: <DateTimePicker
              calendarIcon={null}
              required={true}
              value={this.state.end}
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default EventForm;