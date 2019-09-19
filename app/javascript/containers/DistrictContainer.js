import React from 'react';
import Ad from '../components/Ad';
import BlogList from '../containers/BlogList';
import EventsList from '../containers/EventsList';
import SchoolSelector from '../components/SchoolSelector';

class DistrictContainer extends React.Component {
  state = {
    district_data: null
  }

  componentDidMount(){
    let district_id;
    if (this.props.match.params.dist_id){
      district_id = this.props.match.params.dist_id
    } else {
      district_id = 1
    }

    fetch(`/api/districts/${district_id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({district_data: data});
      })
  }

  loadedResponse = () => {
    if (!this.state.district_data){
      return (
        <div id="district-page">
          <header id="header">
            <h1>Loading district data</h1>
          </header>
          <div id="sidebar">
          </div>
        </div>
      )
    } else {
      return (
        <div id="district-page">
          <div id="top-banner">
            <h1>{this.state.district_data.name}</h1>
            <Ad size="banner" />
          </div>
          <div id="sidebar">
            <SchoolSelector schools={this.state.district_data.schools} dist_id={this.state.district_data.id} history={this.props.history}/>
            <Ad size="panel" />
            <Ad size="panel" />
          </div>
          <BlogList blogs={this.state.district_data.blogs} />
          <EventsList events={this.state.district_data.events} />
        </div>
      )
    }
  }

  render(){
    return (
      this.loadedResponse()
    )
  }
}

export default DistrictContainer;