import React from 'react';
import '../stylesheets/selector.scss'

class SchoolSelector extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      schools: props.schools,
      grade_level: "",
      school_id: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.dist_id !== prevProps.dist_id){
      const dist_id = this.props.dist_id
      fetch(`/api/districts/${dist_id}/schools`)
        .then(resp => resp.json())
        .then(data => {
          this.setState({schools: data});
        })
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  schoolsForSelect = () => {
    const schools = this.state.schools.filter(s => s.grade_level === this.state.grade_level)

    return schools.map((school, i) => {
      return <option value={school.id} key={i}>{school.name}</option>
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.school_id){
      this.props.history.push(`/districts/${this.props.dist_id}/schools/${this.state.school_id}`)
    }
  }

  dropdownForm = () => {
    return (
      
    )
  }

  render(){    
    return (
      this.dropdownForm()
    )
  }
}

export default SchoolSelector;