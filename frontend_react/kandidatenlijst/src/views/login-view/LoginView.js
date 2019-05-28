import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions'

import { withRouter } from 'react-router-dom';

import './LoginView.css';

// Oude api:
// yes123
// yesterday

// Nieuwe api:
// yesterday
// yes123

class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      // error: '',
      // errors: []
      errors: {}
    }

    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  componentDidMount() {
    console.log('loginpage')
    console.log(this.props.auth.isAuthenticated);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/profiles');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  OnSubmit(e) { // Put this to LoginUser in redux
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(data);
  }

  render() {
    // const { isAuthenticated } = this.props.auth; voor in header dynamish logout knop te tonen
    const { errors } = this.props;
    return (
      <React.Fragment>
        <div className="grid">
          <div className="card">
            <form onSubmit={e => this.OnSubmit(e)}>
              <div className="login_title"></div>
              <div className="login_body">
                <div className="form_field">
                  <input name="username" type="text" placeholder="Gebruikersnaam" required onChange={e => this.OnChange(e)} value={this.state.username} />
                </div>
                <div className="form_field">
                  <input name="password" type="password" placeholder="Paswoord" required onChange={e => this.OnChange(e)} value={this.state.password} />
                </div>
                <div className="button_container">
                  <input type="submit" value="Login" />
                </div>
              </div>
            </form>
            {/* <div className="error-msg">{errors && <p>Verkeerde gegevens!</p>}</div> */}
            {/* {errors.map(err => (<div>{err}</div>))} */}
            {/* <div className="error-msg">{errors.error}</div> */}
            {/* doesn't work yet */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(LoginView)