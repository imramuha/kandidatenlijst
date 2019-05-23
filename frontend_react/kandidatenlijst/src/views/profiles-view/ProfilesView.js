import React, { Component } from 'react';
import Spinner from '../../components/spinner/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../../helpers'

import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions/profilesActions';

class ProfilesView extends Component {

  componentDidMount() {
    this.props.fetchProfiles() // Nu wordt deze functie gecalled
  }

  // state = {
  //   persons: [],
  // }
  // We hebben geen locale state meer, zit nu in de application level state (store)

  // componentDidMount() {


  // }

  render() {
    if (this.props.profiles.length > 0) {
      return (
        <div className="profiles-grid">
          {this.props.profiles.map((person, index) =>
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

// We kunnen de data dan werkelijk gebruiken 
const mapStateToProps = state => ({
  // we hebben in de rootreducer profiles deze naam gegeven daarom key, wat willen we? De items want we hebben het zo genoemd in profileReducer
  profiles: state.profiles.items // Noemen we items anders onduidelijk, dan is het state.profiles.profiles
  // We kunnen nu aan this.props.profiles
})

export default connect(mapStateToProps, { fetchProfiles })(ProfilesView); // We connecteren aan onze redux store en halen de fetchProfiles action er uit
