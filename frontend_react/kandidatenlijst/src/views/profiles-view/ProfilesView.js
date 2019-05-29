import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../../helpers'

import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions/profilesActions';
import { fetchProfile } from '../../actions/profilesActions';
import Spinner from '../../components/spinner/Spinner'
import Sidebar from '../../components/sidebar/Sidebar'
import StickyFooter from '../../components/stickyfooter/StickyFooter'
import Cv from '../../components/cv/Cv'

import { addToCrm } from '../../actions/profilesActions';

class ProfilesView extends Component {

  constructor() {
    super();
    this.state = {
      profile: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfiles()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({
        profile: this.props.profile
      });
    }
  }

  handleClick(event) {
    const { id } = event.target;
    console.log(id);

    setTimeout(() => {
      this.props.fetchProfile(id);
    }, 100)
  }

  AddToCrm(event) {
    const { id } = event.target;
    this.props.addToCrm(id, this.state.profile)
  }

  render() {

    console.log(this.props.profile);
    console.log(this.state.prof)

    return (
      <React.Fragment>
        <Sidebar profiles={this.props.profiles} onClick={this.handleClick} />
        <StickyFooter />
        <Cv profile={this.state.profile} />

      </React.Fragment>
    )
    /*
    return (
      <Spinner />
      // <div>No Profiles!</div>
    )*/
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.items,
  profile: state.profiles.item
})

export default connect(mapStateToProps, { fetchProfiles, fetchProfile, addToCrm })(ProfilesView); // We connecteren aan onze redux store en halen de fetchProfiles action er uit
