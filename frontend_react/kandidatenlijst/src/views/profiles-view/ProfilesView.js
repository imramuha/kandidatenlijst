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
      profileZoho: 0
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
    // console.log('update werkt!')

    /* 
    adres: "Apostoliekenstraat 2 bus: B004
    ↵BE-2300 TURNHOUT
    ↵BELGIE"
    beschikbaarheid: "ja"
    candidate_id: "303681000001397690"
    city: "TURNHOUT"
    date_inserted: "201905221356"
    email: "franksmet@hotmail.com"
    extra_info: ""
    geboortedatum: "18-01-1968"
    geslacht: "Mannelijk"
    gewenste_job: "VDAB referentie: 757555
    ↵Laatst gewijzigd: 06 juni 2019
    ↵Gegenereerd door MLB: 06-06-2019 10:06
    ↵Gewenste job(s): Computeroperator (m/v) (Tussen 2 en 5 jaar ) , Installateur van datacommunicatienetwerken (m/v) (Minder dan 2 jaar) , Integratie en implementatie expert ICT (m/v) (Minder dan 2 jaar) , Koerier besteller (Minder dan 2 jaar) , Netwerkbeheerder (m/v) (Geen) , PC -technicus (Geen) , Programmeur (Tussen 2 en 5 jaar ) , Technicus automatisatie (Geen) , technicus communicatienetwerken (Geen)
    ↵Gewenste regio: Regio Geel - Mol , Regio Herentals - Westerlo , Regio Kalmthout - Schoten - Zoersel , Regio Turnhout
    ↵Gewenst arbeidsregime: deeltijds: 2 ploegenstelsel , Weekend , Dagwerk
    ↵voltijds: 2 ploegenstelsel , Dagwerk , Weekend"
    gsm: "32494451552"
    hobby: ""
    id: "63"
    img_url: ""
    is_new: "1"
    last_mailed_time: ""
    name: "FRANK SMET"
    nationaliteit: "Belg"
    persoonsgebonden_competenties: ""
    samenvatting: ""
    vdab_id: "757555"
    vervoer: "B - Auto's <. 3,5t en max. 8 plaatsen
    ↵
    ↵Beschikking over een eigen wagen"
     */
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

  showUpdatePopUps() {

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
    const data = {
      userData: this.state.profileZoho
    }
    this.props.updateSpecificProfileZoho(candidate_id, data)
    /*
    axios.post('http://vdab.i4m.be/api/login', userData,
    { "Content-Type": "application/x-www-form-urlencoded" })
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('token', token);

    })
*/
  }

  render() {
    // console.log(this.state.profileZoho)

    let leftBoxStyle = {
      // backgroundColor: 'rgb(41, 41, 41)',
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
          <div>
            <SkyLight hideOnOverlayClicked dialogStyles={leftBoxStyle} transitionDuration={500} ref={ref => this.customDialog = ref}>
              <div className="updateForm">
                {this.state.profileZoho &&
                  <div className="ZohoForm form "><h1>Profiel uit Zoho</h1> <br />
                    {/* First name and last name */}
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[2].content} &nbsp;
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[3].content} <br />

                    {/* Email */}
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[4].content} <br />

                    {/* Adres */}
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[6].content} &nbsp;
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[7].content} &nbsp;
                    {this.state.profileZoho.data.response.result.Candidates.row.FL[8].content} &nbsp;

                  </div>
                }

                {/* in een form cause we might send it to zoho, */}

                <div className="newForm form"><h1>Aanpassen van profiel gegevens</h1> <br />
                  <form>
                    <input type="text" name="name" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.name}></input> <br />
                    <input type="text" name="email" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.email}></input> <br />
                    <input type="text" name="adres" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.adres}></input> <br />
                  </form>
                </div>

              </div>
              <div className="form-buttons">
                <button onClick={this.closeUpdateForm}>Cancel</button>
                <button onClick={this.sendUpdateForm}>Send</button>
                {/* <button onClick={}>Save to CRM</button> */}
              </div>
            </SkyLight>
          </div>
        }

        {this.state.profileZoho && <UpdateForm profileChanges={this.state.profileZoho} />}
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
