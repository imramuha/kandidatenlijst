import React, { Component } from 'react'
import Table from '../../components/table/Table';
import Arrows from '../../components/arrows/Arrows';

import { Link } from 'react-router-dom';

import './ProfileView.css';
import axios from 'axios';

import helpers from '../../helpers'
import { getLocalStorage } from '../../helpers'
import Spinner from '../../components/spinner/Spinner';

// For one specific profile

class ProfileView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      person: [],
    }
  }

  componentDidMount() {
    const token = getLocalStorage();
    let config = {
      headers: { 'Authorization': token }
    };
    let id = this.props.match.params.profile_id;
    console.log(id);
    // http://vdab.i4m.be/profiles/profiles/${id}
    // http://vdab.i4m.be/details/details/${id}
    // http://127.0.0.1:8000/api/profiles/${id}
    axios.get(`http://vdab.i4m.be/details/details/${id}`, config)
      .then(res => {
        console.log(res);
        const person = res.data;
        console.log(person);
        this.setState({ person: person });
      })
  }

  render() {
    // Error boundry
    const person = this.state.person ? (
      <ul>
        {this.state.person.map(x =>
          <ul key={x.id}>
            <li>{x.adres}</li>
            <li>{x.email}</li>
          </ul>)}
      </ul>
    ) : (
        <Spinner />
      )

    return (
      <div>
        <Arrows />
        <Table />
        Specific profile:
        <Link to="/profiles">Back to profiles</Link>
        {person}

        {/* <AllProfiles /> all of them */}
      </div>
    )
  }
}

export default ProfileView;
