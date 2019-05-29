import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import helpers from '../../helpers';

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    }



    axios.get('/auth/getUser', { headers: { Authorization: token } }).then(res => {
      this.setState({
        user: res.data
      })
    }).catch(err => {
      localStorage.removeItem('token');
      // this.props.history.push('/login')
    });
  }
  render() {
    const { user } = this.state;
    if (user === undefined) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (user === null) {
      this.props.history.push('/login');
    }

    return this.props.children; // We are going to render children of the component
  }
}

export default withRouter(AuthComponent);
