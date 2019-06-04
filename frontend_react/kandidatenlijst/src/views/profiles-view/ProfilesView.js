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

import { addToCrm, doNothing } from '../../actions/profilesActions';

class ProfilesView extends Component {

  constructor() {
    super();
    this.state = {
      profile: []
    }
    this.onClick = this.handleClick.bind(this);
    this.add = this.handleAdd.bind(this);
    this.update = this.handleUpdate.bind(this);
    this.hide = this.handleHide.bind(this);
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

    setTimeout(() => {
      this.props.fetchProfile(id);
    }, 100)
  }

  handleAdd(event) {
    const { id } = this.state.profile.profiles;
    console.log(id);
    // How to find the id from the profile we selected?
    this.props.addToCrm(id, this.state.profile)
    console.log("de add button works");
  }

  handleUpdate() {
    console.log('update werkt!')
    const { id } = this.state.profile.profiles.name;

    // Optionally the request above could also be done as
    axios.get('https://recruit.zoho.com/recruit/private/json/Candidates/getSearchRecords?', {
      params: {
        "authtoken": "6b9f2097aa50b55830b3f2d717e8a7df",
        "scope": "recruitapi",
        "selectColumn": "Candidates(Last Name)",
        "searchCondition": "(Last Name|contains|*" + this.state.profile.profiles.name + "*)",
      }
    })
      .then(function (response) {
        console.log(response)
        const zoho_name = response.data.response.result.Candidates.row[0].FL[2].content + " " + response.data.response.result.Candidates.row[0].FL[3].content;
        console.log(response.data.response.result.Candidates.row[0].FL[2].content + " " + response.data.response.result.Candidates.row[0].FL[3].content);
        console.log(zoho_name)
        if (id == zoho_name) {
          console.log("Names match");
        } else {
          console.log("Name doesnt match")
        }
      })

  }

  handleHide() {
    console.log('do nothing, set is_new to 0')
    const { id } = this.state.profile.profiles;
    const { is_new } = this.state.profile.profiles;

    this.props.doNothing(id, this.state.profile);
    console.log(is_new)
  }

  render() {

    console.log(this.props.profile);
    console.log(this.state.prof)

    return (
      <React.Fragment>
        <Sidebar profiles={this.props.profiles} onClick={this.onClick} />
        <StickyFooter add={this.add} update={this.update} hide={this.hide} />
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

export default connect(mapStateToProps, { fetchProfiles, fetchProfile, addToCrm, doNothing })(ProfilesView); 
