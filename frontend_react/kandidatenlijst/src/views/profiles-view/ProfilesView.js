import React, { Component } from 'react';
import axios from 'axios'

/* Redux */
import { connect } from 'react-redux';
import {
  fetchProfiles,
  fetchProfile,
  getSpecificProfileFromZoho,
  addToCrm,
  doNothing,
  updateSpecificProfileZoho
} from '../../actions/profilesActions';

/* Components */
import SkyLight from 'react-skylight';
import Spinner from '../../components/spinner/Spinner'
import Sidebar from '../../components/sidebar/Sidebar'
import StickyFooter from '../../components/stickyfooter/StickyFooter'
import Cv from '../../components/cv/Cv'
import UpdateForm from '../../components/updateform/UpdateForm';

import Alert from 'react-bootstrap/Alert';

/* Helpers */
import { getLocalStorage } from '../../helpers';

class ProfilesView extends Component {

  constructor() {
    super();
    this.state = {
      profile: [],
      profileZoho: 0,
      selectedProfile: null,
    }

    // Different names
    this.onClick = this.handleClick.bind(this);
    this.add = this.handleAdd.bind(this);
    this.update = this.handleUpdate.bind(this);
    this.hide = this.handleHide.bind(this);
    this.refresh = this.handleRefresh.bind(this);

    // Form
    this.OnChange = this.OnChange.bind(this);
    // this.OnSubmit = this.OnSubmit.bind(this);

    this.closeUpdateForm = this.closeUpdateForm.bind(this);
    this.sendUpdateForm = this.sendUpdateForm.bind(this);

  }

  componentDidMount() {
    this.props.fetchProfiles()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
      this.setState({
        profile: this.props.profile,
      });
    }

    if (prevProps.profiles[0] !== this.props.profiles[0]) {
      this.setState({
        selectedProfile: this.props.profiles[0].id,
      });

      // to fetch profile onload
      this.props.fetchProfile(this.props.profiles[0].id);
    }

  }

  /* Show a profile accordingly 
     to the item in the sidebar selected 
  */
  handleClick(event) {
    const { id } = event.target;

    // change selected profiles style/colors
    if (id) {
      this.setState({
        selectedProfile: id,
      });
    }
    else {
      this.setState({
        selectedProfile: 0,
      });
    }

    setTimeout(() => {
      this.props.fetchProfile(id);
    }, 100)
  }

  handleAdd(event) {

    if (this.state.profile.length === 0) {
      this.props.addToCrm(this.state.selectedProfile, this.props.profiles[0]);
    } else {
      this.props.addToCrm(this.state.selectedProfile, this.state.profile.profiles);
    }

    // 7ALERT 

    setTimeout(() => {
      this.props.fetchProfiles()
    }, 400)
  }


  /* Open the pop-up windows and see the difference 
    between the data in the database and 
    the data that is in zoho CRM 
  */
  handleUpdate() {
    // if profiles and candidate dd exist show the popups/apicall res
    if (this.state.profile.profiles) {
      if (this.state.profile.profiles.candidate_id) {

        const { candidate_id } = this.state.profile.profiles;
        //console.log(candidate_id);

        const token = getLocalStorage();
        let config = {
          headers: { 'Authorization': token }
        };
        axios.get(`http://vdab.i4m.be/profiles/profileZoho/${candidate_id}`, config)
          .then((response) => {
            this.customDialog.show()

            this.setState({
              profileZoho: response
            });

          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        let errorMsg = "De volgende profiel bestaat niet in Zoho, gelieve die eerst toe te voegen."
        alert(errorMsg)
      }
    } else {
      let errorMsg = "Please select a profiel before trying to update its content."
    }
  }

  handleHide() {

    if (this.state.profile.length === 0) {
      this.props.doNothing(this.state.selectedProfile, this.props.profiles[0]);
    } else {
      this.props.doNothing(this.state.selectedProfile, this.state.profile.profiles);
    }

    // 7ALERT 
    //alert("De profiel staat nu op hidden.")

    setTimeout(() => {
      this.props.fetchProfiles()
    }, 400)
  }

  handleRefresh(event) {
    this.props.fetchProfiles()
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  closeUpdateForm() {
    this.customDialog.hide()
  }

  sendUpdateForm(e) {
    e.preventDefault();
    //console.log('update data and send to crm')
    const { candidate_id } = this.state.profile.profiles;
    const data = { // Name and email
      name: this.state.profile.profiles.name,
      email: this.state.profile.profiles.email,
      adres: this.state.profile.profiles.adres
    }
    this.props.updateSpecificProfileZoho(candidate_id, data)
  }

  render() {

    let leftBoxStyle = {
      backgroundColor: '#1C1C1C',
      color: '#F7F7F7',
      width: '85%',
      minHeight: 0,
      height: '80vh',
      marginTop: '-300px',
      marginLeft: '-45%',
    };

    return (
      <React.Fragment>

        {this.state.profile.profiles &&

          <SkyLight hideOnOverlayClicked dialogStyles={leftBoxStyle} transitionDuration={500} ref={ref => this.customDialog = ref}>
            <div className="updateForm">
              {this.state.profileZoho &&
                <div className="ZohoForm form "><h1>Profiel uit Zoho</h1> <br />
                  {/* First name and last name */}
                  {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[2].content} &nbsp;
                    {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[3].content} <br />

                  {/* Email */}
                  {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[4].content} <br />

                  {/* Adres */}
                  {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[6].content} &nbsp;
                    {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[7].content} &nbsp;
                    {this.state.profileZoho.data.profile.response.result.Candidates.row.FL[8].content} &nbsp;
                    <div className="Educaional">
                      {this.state.profileZoho &&
                        this.state.profileZoho.data.detail.response.result.Candidates.FL.map((TL) =>
                          TL.TR && TL.TR.map((tr) =>
                            <ul>
                              {tr.TL && tr.TL.map((data) =>
                                data.content && data.val !== "TABULARROWID" && <li>{data.content}</li>
                              )}
                            </ul>
                          )
                        )
                      } &nbsp;
                      </div>
                </div>
              }

              <div className="newForm form"><h1>Aanpassen van profiel gegevens</h1> <br />
                <form onSubmit={this.sendUpdateForm}>
                  <input type="text" name="name" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.name}></input> <br />
                  <input type="text" name="email" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.email}></input> <br />
                  <input type="text" name="adres" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.adres}></input> <br />
                  <input type="submit" value="Send" />
                </form>
              </div>

            </div>
            <div className="form-buttons">
              {/* <button onClick={this.closeUpdateForm}>Cancel</button> */}
              {/* <button onClick={this.sendUpdateForm}>Send</button> */}
              {/* <button onClick={}>Save to CRM</button> */}
            </div>
          </SkyLight>

        }
        <Sidebar profiles={this.props.profiles} onClick={this.onClick} selectedProfile={this.state.selectedProfile} />
        <StickyFooter add={this.add} update={this.update} hide={this.hide} refresh={this.refresh} />
        <Cv profile={this.state.profile} profiles={this.props.profiles} />
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
  profile: state.profiles.item,
  dataZoho: state.profiles.dataZoho
})

export default connect(mapStateToProps, {
  fetchProfiles,
  fetchProfile,
  addToCrm,
  doNothing,
  getSpecificProfileFromZoho,
  updateSpecificProfileZoho
})(ProfilesView); 
