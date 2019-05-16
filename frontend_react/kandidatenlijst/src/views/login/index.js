import React, { Component } from 'react'
import './login.css'
import axios from 'axios';

// yes123
// yesterday

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {

  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit(e) {
    e.preventDefault();
    // Make post request to auth
    axios.post('http://127.0.0.1:8000/api/login', {
      username: this.state.username,
      password: this.state.password
      // retrieve the bearer token
      // Store it into localstorage
    }, { "Content-Type": "application/x-www-form-urlencoded", })
      .then(res =>
        localStorage.setItem('token', res.data.token))
      // this.props.history.push('/profiles') doesnt work here yet
      // Go into new route
      //.then()


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
            <form onSubmit={e => this.submit(e)}>
              <div className="login_title"></div>
              <div className="login_body">
                <div className="form_field">
                  <input name="username" type="text" placeholder="Gebruikersnaam" required onChange={e => this.change(e)} value={this.state.username} />
                </div>
                <div className="form_field">
                  <input name="password" type="password" placeholder="Paswoord" required onChange={e => this.change(e)} value={this.state.password} />
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

export default Login
