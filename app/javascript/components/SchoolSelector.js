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
      <form id="school-selector">
        <div>
          <label htmlFor="grade_level">Select grade level: </label>
          <select value={this.state.grade_level} onChange={this.handleChange} name="grade_level">
            <option value=""></option>
            <option value="elementary">Elementary</option>
            <option value="k-8">K-8</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
          </select>
        </div>

        {this.state.grade_level !== "" ?
          <div>
            <label htmlFor="school_id">Select your school: </label>
            <select value={this.state.school_id} onChange={this.handleChange} name="school_id">
              <option value=""></option>
              {this.schoolsForSelect()}
            </select>
          </div>
          :
          null
        }

        <input type="submit" value="Select School" onClick={e=>this.handleSubmit(e)} />
      </form>
    )
  }

  render(){    
    return (
      this.dropdownForm()
    )
  }
}

export default SchoolSelector;