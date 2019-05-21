import React, { Component } from 'react';
import Spinner from '../../components/spinner/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../../helpers'

class ProfilesView extends Component {

  state = {
    persons: [],
  }

  componentDidMount() {
    const token = getLocalStorage();
    let config = {
      headers: { 'Authorization': token }
    };
    // http://vdab.i4m.be/profiles/profiles
    // https://jsonplaceholder.typicode.com/posts
    // http://127.0.0.1:8000/api/profiles

    // In new api we will have to use ParseInt because id is a string not integer: TODO
    axios.get(`http://vdab.i4m.be/profiles/profiles`, config)
      .then(res => {
        const persons = res.data;
        this.setState({ persons: persons });
        console.log(res);
      })

  }

  render() {
    if (this.state.persons.length > 0) {
      return (
        <div className="profiles-grid">
          {this.state.persons.map((person, index) =>
            <div className="profiles-card" key={person.id}>
              <p className="profile-name">{person.name}</p>
              <p className="profile-email">{person.email}</p>
              <Link to={`/profiles/${person.id}`}>Full profile</Link>
            </div>)}
        </div>
      )
    }
    return (
      <Spinner />
      // <div>No Profiles!</div>
    )
  }
}

export default ProfilesView;
