import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../../helpers'

import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions/profilesActions';
import { fetchProfile } from '../../actions/profilesActions';
import Spinner from '../../components/spinner/Spinner'
import Sidebar from '../../components/sidebar/Sidebar'
import Cv from '../../components/cv/Cv'

class ProfilesView extends Component {

  constructor() {
    super();
    this.state = {
      id: null,
    }
    this.onClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfiles()
  }


  handleClick(event) {
    console.log(this.state.id)
    const { id } = event.target;
    //console.log(id);

    setTimeout(() => {
      this.props.fetchProfile(id);
    }, 100)
  }

  render() {

    return (
      <React.Fragment>
        <Sidebar profiles={this.props.profiles} onClick={this.onClick} />
        <Cv profile={this.props.profile} />

      </React.Fragment>

    )
    /*
    return (
      <Spinner />
      // <div>No Profiles!</div>
    )*/
  }
}

// We kunnen de data dan werkelijk gebruiken 
const mapStateToProps = state => ({
  // we hebben in de rootreducer profiles deze naam gegeven daarom key, wat willen we? De items want we hebben het zo genoemd in profileReducer
  profiles: state.profiles.items, // Noemen we items anders onduidelijk, dan is het state.profiles.profiles
  // We kunnen nu aan this.props.profiles
  profile: state.profiles.item
})

export default connect(mapStateToProps, { fetchProfiles, fetchProfile })(ProfilesView); // We connecteren aan onze redux store en halen de fetchProfiles action er uit
