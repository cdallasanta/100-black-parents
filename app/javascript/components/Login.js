import React from 'react';
import $ from 'jquery';
import '../stylesheets/login.scss';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    $("login-errors").empty();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: (response, status, jqXHR) => {
        // put uid, access token, and client into cookies. It is sent as a string since
        // it won't store an object, but we will call it with JSON.parse(sessionStorage.user)
        // when we make the call to the api
        sessionStorage.setItem('user',
          JSON.stringify({
            'access-token': jqXHR.getResponseHeader('access-token'),
            client: jqXHR.getResponseHeader('client'),
            uid: response.data.uid
          })
        );

        this.props.history.push('/');
      },
      error: resp => {
        this.setState({errors: resp.responseJSON.errors})
      }
    })
  }

  renderErrors = () => {
    return (
      <div id="login-errors" className="errors">
        {
          this.state.errors.map((error, i) => {
            return <li key={i}>{error}</li>
          })
        }
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Sign in</h2>
        {this.state.errors.length > 0 ? this.renderErrors() : null}
        <form onSubmit={this.handleLogin} >
          <input name="email" value={this.state.email} onChange={this.handleChange} />
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
        Or <Link to="/signup">sign up.</Link>
      </div>
    )
  }
}