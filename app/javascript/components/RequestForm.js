import React from 'react';
import $ from 'jquery';

class RequestForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:"",
      start: props.eventData.start,
      end: props.eventData.end,
      location: ""
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onClick = e =>{
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render(){
    return(
      <div id="requestGreyBackground" className="requestGreyBackground" onClick={e => this.props.closeOnClick(e)}>
        <div className={"requestForm"}>
          <h3>New Event</h3>
          <form>
            Event Title: <input
              type="text" name="title"
              value={this.state.title}
              onChange={this.onChange} /><br />
            Location: <input
              type="text" name="location"
              value={this.state.location}
              onChange={this.onChange} /><br />

            <input type="submit" value="Submit Request" onClick={e => this.onClick(e)} />
          </form>
        </div>
      </div>
    )
  }
}

export default RequestForm;