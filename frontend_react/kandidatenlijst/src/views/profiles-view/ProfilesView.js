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
import UpdateForm from '../../components/updateform/UpdateForm';

import { addToCrm, doNothing } from '../../actions/profilesActions';

/* Pop ups */
import SkyLight from 'react-skylight';

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
    // console.log('update werkt!')

    /* Profiel dat momenteel in zoho zit -> zal gebruiken voor testing
    0: {val: "CANDIDATEID", content: "303681000001177824"}
    1: {val: "Candidate ID", content: "ZR_31687_CAND"}
    2: {val: "First Name", content: "Maya"}
    3: {val: "Last Name", content: "Stoyanova Gadzheva"}
    4: {val: "Email", content: "maya.gadzheva@gmail.com"}
    5: {val: "Created Time", content: "2015-03-20 09:09:08"}
    6: {val: "Updated On", content: "2018-05-31 14:58:36"}
    7: {val: "Currency", content: "EUR"}
    8: {val: "Exchange Rate", content: "1.000000000"}
    9: {val: "Last Activity Time", content: "2018-05-31 14:58:36"}
    10: {val: "SMOWNERID", content: "303681000000080003"}
    11: {val: "Candidate Owner", content: "Rudy Campe"}
    12: {val: "Email Opt Out", content: "false"}
    13: {val: "Is Locked", content: "false"}
    14: {val: "Is Unqualified", content: "false"}
    15: {val: "Is Attachment Present", content: "true"}
    16: {val: "Career Page Invite Status", content: "0"}
    17: {val: "Payroll", content: "false"}
    18: {val: "I4M beschikbaar", content: "false"}
    19: {val: "Onmiddellijk Beschikbaar", content: "false"}
    20: {val: "Opt-In Status", content: "Opt-In Requested"}
    */
    if (this.state.profile.profiles) {
      if (this.state.profile.profiles.candidate_id) {

        const { candidate_id } = this.state.profile.profiles;
        console.log(candidate_id);
        // Optionally the request above could also be done as
        axios.get('https://recruit.zoho.com/recruit/private/json/Candidates/getRecordById?', {
          params: {
            "authtoken": "6b9f2097aa50b55830b3f2d717e8a7df",
            "scope": "recruitapi",
            "id": candidate_id
          }
        })
          .then((response) => {
            console.log("hierin doen wij de popups")

            return (
              <React.Fragment>
                {() => this.simpleDialog.show()}
                < SkyLight
                  hideOnOverlayClicked
                  ref={ref => this.simpleDialog = ref}
                  transitionDuration={500} > {response}</SkyLight >
              </React.Fragment>
            )
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        let errorMsg = "Profiel doesn't exist in zoho, please add before you try to update it."
        console.log(errorMsg)
        return (
          <React.Fragment>
            {() => this.simpleDialog.show()}
            < SkyLight
              hideOnOverlayClicked
              ref={ref => this.simpleDialog = ref}
              transitionDuration={500} > {errorMsg}</SkyLight >
          </React.Fragment>
        )
      }
    }
  }

  showUpdatePopUps() {

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
    console.log(this.state.prof);

    return (
      <React.Fragment>
        {this.state.profile && <UpdateForm differences={this.state.profile}></UpdateForm>}
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
