import React, { Component } from 'react';

/* Redux */
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions'

import './LoginView.css';
class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  OnSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(data);
  }

  render() {
    return (
      <React.Fragment>
        <div className="grid">
          <div className="card">
            <form onSubmit={e => this.OnSubmit(e)}>
              <div className="login_title">LOGIN</div>
              <div className="login_body">
                <div className="form_field">
                  <label for="username">USERNAME</label>
                  <input name="username" type="text" placeholder="Gebruikersnaam" required onChange={e => this.OnChange(e)} value={this.state.username} />
                </div>
                <div className="form_field">
                  <label for="password">PASSWORD</label>
                  <input name="password" type="password" placeholder="Password" required onChange={e => this.OnChange(e)} value={this.state.password} />
                </div>
                <div className="button_container">
                  <input type="submit" value="LOGIN" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { loginUser })(LoginView)