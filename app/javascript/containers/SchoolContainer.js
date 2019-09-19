import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import ContactInfo from '../components/ContactInfo';
import Ad from '../components/Ad';
import BlogList from '../containers/BlogList';
import EventsList from '../containers/EventsList';
import SchoolSelector from '../components/SchoolSelector';

class SchoolContainer extends React.Component {
  state = {
    school_data: {
      name: "",
      blogs: [],
      events: [],
      site_rep: "",
      district: {id:""}
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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.school_id !== prevProps.match.params.school_id) {
      const dist_id = this.props.match.params.dist_id
      const school_id = this.props.match.params.school_id
      fetch(`/api/districts/${dist_id}/schools/${school_id}`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({school_data: data});
        })
    }
  }

  render(){
    return (
      <div id="school-page">
        <div id="top-banner">
          <h1>{this.state.school_data.name}</h1>
          <ContactInfo contact={this.state.school_data.site_rep} />
          <Ad size="banner" />
        </div>
        <div id="sidebar">
          <NavigationMenu
            school={this.state.school_data}
            district_id={this.state.school_data.district.id} />
          <SchoolSelector schools={this.state.school_data.district.schools} dist_id={this.state.school_data.district.id} history={this.props.history}/>
          <Ad size="panel" />
          <Ad size="panel" />
        </div>
        <BlogList blogs={this.state.school_data.blogs} />
        <EventsList events={this.state.school_data.events} />
      </div>
    )
  }
}

export default SchoolContainer;