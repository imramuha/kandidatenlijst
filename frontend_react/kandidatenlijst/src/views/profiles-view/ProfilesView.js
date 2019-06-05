import React, { Component } from 'react';
import axios from 'axios'
import SkyLight from 'react-skylight';
import { Link } from 'react-router-dom'
import { getLocalStorage } from '../../helpers'
import { connect } from 'react-redux';


import { fetchProfiles } from '../../actions/profilesActions';
import { fetchProfile } from '../../actions/profilesActions';
import { addToCrm, doNothing } from '../../actions/profilesActions';


import Spinner from '../../components/spinner/Spinner'
import Sidebar from '../../components/sidebar/Sidebar'
import StickyFooter from '../../components/stickyfooter/StickyFooter'
import Cv from '../../components/cv/Cv'
import UpdateForm from '../../components/updateform/UpdateForm';

class ProfilesView extends Component {

  constructor() {
    super();
    this.state = {
      profile: [],
      profileZoho: 0
    }
    this.onClick = this.handleClick.bind(this);
    this.add = this.handleAdd.bind(this);
    this.update = this.handleUpdate.bind(this);
    this.hide = this.handleHide.bind(this);

    // Form
    this.OnChange = this.OnChange.bind(this);
    this.OnSubmit = this.OnSubmit.bind(this);

    this.close = this.cancelPopup.bind(this);
    this.send = this.UpdateCrm.bind(this);

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

    /* 
    {id: "67", name: "JIMMY HEYNS", city: "", email: "jimheyns@gmail.com", last_mailed_time: "", …}
     adres: "De Heide 3
     ↵BE-2288 BOUWEL
     ↵BELGIE"
     beschikbaarheid: ""
     candidate_id: "303681000006551005"
     city: ""
     date_inserted: "201905221356"
     email: "jimheyns@gmail.com"
     extra_info: ""
     geboortedatum: "26-08-1974"
     geslacht: "Mannelijk"
     gewenste_job: "VDAB referentie: 10519022
     ↵Laatst gewijzigd: 22 mei 2019
     ↵Gegenereerd door MLB: 22-05-2019 10:13
     ↵Gewenste job(s): Analist - informatica (Meer dan 5 jaar ) , Directeur van een kleine of middelgrote organisatie (m/v) (Meer dan 5 jaar ) , Financieel en/of administratief verantwoordelijke (Tussen 2 en 5 jaar ) , PROJECT MANAGER (Meer dan 5 jaar ) , SPECIALIST RISICO MANAGEMENT (Meer dan 5 jaar )
     ↵Gewenste regio: Provincie Antwerpen , Regio Herentals - Westerlo , Regio Kontich - Mortsel - Ranst , Regio Lier - Heist o/d Berg
     ↵Gewenst arbeidsregime: deeltijds: Zelfstandige activiteit , Dagwerk , Volcontinu systeem , Nachtwerk , 3 ploegenstelsel , 2 ploegenstelsel , Weekend
     ↵voltijds: Dagwerk , 2 ploegenstelsel , Weekend , Zelfstandige activiteit , 3 ploegenstelsel , Nachtwerk , Volcontinu systeem"
     gsm: ""
     hobby: "Vliegvissen, Houder van al de vier categories Sportschutterlicentie, Guitaar"
     id: "67"
     img_url: ""
     is_new: "1"
     last_mailed_time: ""
     name: "JIMMY HEYNS"
     nationaliteit: "Belg"
     persoonsgebonden_competenties: "Regels en afspraken nakomen
     ↵Creatief denken (Inventiviteit)
     ↵Commercieel zijn
     ↵Contactvaardig zijn
     ↵Klantgerichtheid"
     samenvatting: ""
     vdab_id: "10519022"
     vervoer: "B - Auto's <. 3,5t en max. 8 plaatsen"
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

  OnSubmit(e) {
    e.preventDefault();
    console.log('send the form')
  }

  cancelPopup() {
    console.log('close the pop up')
  }

  UpdateCrm() {
    console.log('update data and send to crm')
  }

  render() {

    console.log(this.state.profileZoho)

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
                  <form onSubmit={e => this.OnSubmit(e)}>
                    <input type="text" name="name" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.name}></input> <br />
                    <input type="text" name="email" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.email}></input> <br />
                    <input type="text" name="adres" onChange={e => this.OnChange(e)} value={this.state.profile.profiles.adres}></input> <br />
                  </form>
                </div>

              </div>
              <div className="form-buttons">
                <button onClick={this.close}>Cancel</button>
                <button onClick={this.send}>Send</button>
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
  profile: state.profiles.item
})

export default connect(mapStateToProps, { fetchProfiles, fetchProfile, addToCrm, doNothing })(ProfilesView); 
