import React, { Component } from 'react'

import './LoginView.css'

import axios from 'axios';

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
      error: ''
    }

    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);
  }

  componentDidMount() {

  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  OnSubmit(e) {
    e.preventDefault();

    axios.post('http://vdab.i4m.be/api/login', {
      username: this.state.username,
      password: this.state.password

    }, { "Content-Type": "application/x-www-form-urlencoded" })
      .then(res =>
        localStorage.setItem('token', res.data.token))
      //this.props.history.push('/profiles') // doesnt work here yet
      //this.props.history.push('/profiles');
      .catch(() => this.setState({

        error: true
      }));



  }

  render() {
    const { error } = this.state;
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
            {error && <p>Invalid credentials</p>}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginView
