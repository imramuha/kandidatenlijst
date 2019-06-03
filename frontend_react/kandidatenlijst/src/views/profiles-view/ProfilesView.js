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
      profile: [],
      id: null
    }
    this.onClick = this.handleClick.bind(this);
    this.add = this.handleAdd.bind(this)
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

    this.setState({
      id: id
    });

    setTimeout(() => {
      this.props.fetchProfile(id);
    }, 100)
  }

  handleAdd(event) {
    console.log(this.state.id);
    // hierin doe je iets
    console.log("de add button works");
  }

  render() {

    console.log(this.props.profile);
    console.log(this.state.prof)

    return (
      <React.Fragment>
        <Sidebar profiles={this.props.profiles} onClick={this.onClick} />
        <StickyFooter id={this.state.id} add={this.add} />
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
