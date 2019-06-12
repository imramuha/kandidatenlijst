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
    const { id } = this.state.profile.profiles;
    console.log(id);
    // How to find the id from the profile we selected?
    this.props.addToCrm(id, this.state.profile)
    console.log("de add button works");
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
        console.log(candidate_id);

        // Optionally the request above could also be done as
        // TODO nog 2de api call voor andere data
        const token = getLocalStorage();
        let config = {
          headers: { 'Authorization': token }
        };
        axios.get(`http://vdab.i4m.be/profiles/profileZoho/${candidate_id}`, config)
          .then((response) => {
            console.log(response)
            this.customDialog.show()

            this.setState({
              profileZoho: response
            });

          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        let errorMsg = "Profiel doesn't exist in zoho, please add before you try to update it."
        console.log(errorMsg)

      }
    } else {
      let errorMsg = "Please select a profiel before trying to update its content."
      alert(errorMsg)
    }
  }

  handleHide() {
    console.log('do nothing, set is_new to 0')
    const { id } = this.state.profile.profiles;
    const { is_new } = this.state.profile.profiles;

    this.props.doNothing(id, this.state.profile);
    console.log(is_new)
  }

  OnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // OnSubmit(e) {
  //   e.preventDefault();
  //   console.log('send the form')

  //   this.props.updateSpecificProfileZoho()
  // }

  closeUpdateForm() {
    this.customDialog.hide()
  }

  sendUpdateForm(e) {
    e.preventDefault();
    console.log('update data and send to crm')
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

    if (this.state.profileZoho) {
      const data = this.state.profileZoho.data.detail.response.result.Candidates.FL[1].TR;
      data.map((tr) => {
        console.log("Study:");

        tr.TL.map((tl) => {
          console.log(tl.content)
        })

      });
    }

    return (
      <React.Fragment>

        {this.state.profile.profiles &&
          <div>
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

                    {this.state.profileZoho.data.detail.response.result.Candidates.FL[1]} &nbsp;

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
          </div>
        }

        {this.state.profileZoho && <UpdateForm profileChanges={this.state.profileZoho} />}
        <Sidebar profiles={this.props.profiles} onClick={this.onClick} selectedProfile={this.state.selectedProfile} />
        <StickyFooter add={this.add} update={this.update} hide={this.hide} />
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
