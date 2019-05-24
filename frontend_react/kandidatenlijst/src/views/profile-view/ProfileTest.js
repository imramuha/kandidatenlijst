import React, { Component } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../../helpers'
import Spinner from '../../components/spinner/Spinner';
import BottomArrow from '../../components/arrows/bottomarrow/BottomArrow';
import TopArrow from '../../components/arrows/toparrow/TopArrow';

class ProfileTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profileDetails: [], // response is an array of with objects, we need to loop
      profileProfileData: null, // response is an object, null
    }
  }

  componentDidMount() {
    const token = getLocalStorage();
    let config = {
      headers: { 'Authorization': token }
    };
    const id = this.props.match.params.profile_id;
    axios.get(`http://vdab.i4m.be/profiles/profile/${id}`, config)
      .then(res => {
        console.log(res);
        const profileDetails = res.data.details; // Loopen
        const profileProfileData = res.data.profiles; // niet loopen?
        console.log(profileProfileData);
        //const person = res.data.profiles;
        // console.log(person)

        // TODO: remove them
        // let json = JSON.stringify(profileDetails);
        // console.log(json)
        // let escape = json.replace(new RegExp('\r?\n', 'g'), '<br />')
        // console.log(escape);
        // https://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript
        this.setState({ profileDetails })
        this.setState({ profileProfileData })
      })
  }

  render() {

    // TODO: structure this or make cleaner because omg... so dirty
    /*** PROFILES ***/
    const profileProfilePersonal = this.state.profileProfileData ? (
      <div>
        <div id="name">
          <h1 className="quickFade delayTwo">{this.state.profileProfileData.name}</h1>
        </div>
        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li>email: <a href={`mailto:${this.state.profileProfileData.email}`} >{this.state.profileProfileData.email}</a></li>
            <li>gsm: <a href={`tel:${this.state.profileProfileData.gsm}`}> {this.state.profileProfileData.gsm}</a></li>
            <li>address: <a>{this.state.profileProfileData.adres}</a></li>
          </ul>
        </div>
      </div>
    ) : <Spinner /> // Show a global spinner when the whole component loads

    const profileProfileCompetences = this.state.profileProfileData ? (
      <div>
        <ul className="keySkills">
          <li>{this.state.profileProfileData.persoonsgebonden_competenties}</li>
        </ul>
      </div>
    ) : <div>
        <ul className="keySkills">
          <li>Geen gegevens voor deze persoon!</li>
        </ul>

      </div>

    const profileProfileDesiredJob = this.state.profileProfileData ? (
      <div>
        <ul className="keySkills">
          <li>{this.state.profileProfileData.gewenste_job}</li>
        </ul>
      </div>
    ) : <div>Geen gegevens voor deze persoon!</div>

    const profileProfileTransport = this.state.profileProfileData ? (
      <div>
        <ul className="keySkills">
          <li>{this.state.profileProfileData.vervoer}</li>
        </ul>
      </div>
    ) : (
        <div>Geen gegevens voor deze persoon!</div>
      )

    /*** DETAILS ***/
    // Details: only two items that can be shown
    const profileDetails = this.state.profileDetails.map(x => {
      return (
        <article key={x.id}>
          <ul>
            <li style={{ fontWeight: 'bold' }}>{x.period_or_language}</li>
            <li style={{ padding: '1rem 0' }}>{x.description}</li>
          </ul>
        </article>
      )
    })

    const random = Math.floor(Math.random() * 90) + 1;

    // const profileProfileData = { this.state.profileProfileData }
    return (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Specific profile:
          <Link to="/profiles">Back to profiles</Link>
          <BottomArrow />
        </div>

        <div id="cv" className="instaFade">
          <div className="mainDetails">
            <div id="headshot" className="quickFade">
              <img src={`https://randomuser.me/api/portraits/men/${random}.jpg`} alt="headshot" />
            </div>
            {profileProfilePersonal}
            <div className="clear"></div>
            <div id="mainArea" className="quickFade delayFive">
              <section>
                <article>
                  <div className="sectionTitle">
                    <h1>Persoonlijk Profiel</h1>
                  </div>
                </article>
                <div className="clear"></div>
              </section>
              <section>
                <div className="sectionTitle">
                  <h1>Werk <br /> Ervaring</h1>
                </div>

                <div className="sectionContent">
                  {profileDetails}

                </div>
                <div className="clear"></div>
              </section>
              <section>

                <div className="sectionTitle">
                  <h1>Vaardigheden</h1>
                </div>
                <div className="sectionContent">
                  {profileProfileCompetences}
                </div>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Gewenste job</h1>
                </div>
                <div className="sectionContent">
                  {profileProfileDesiredJob}
                </div>
                <div className="clear"></div>
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Vervoer</h1>
                </div>
                <div className="sectionContent">
                  {profileProfileTransport}
                </div>
                <div className="clear"></div>
              </section>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
          <TopArrow />
        </div>
      </React.Fragment>

      // Error boundry
      // const person = this.props.profile ? (
      //   <React.Fragment>

      //     {/* {this.props.profile.map(x =>
      //       // <ul key={x.id}>
      //       //   <li>{x.period_or_language}</li>
      //       //   <li>{x.description}</li>
      //       // </ul>
      //       <div></div>
      //     )} */}
      //     <div>
      //       {/* {x.description}
      //         {x.period_or_language} */}
      //       {/* In aparte component rights side */}

      //       <div id="cv" className="instaFade">
      //         <div className="mainDetails">
      //           <div id="headshot" className="quickFade">
      //             <img src="https://loremflickr.com/320/240?random=1" alt="headshot" />
      //           </div>
      //           {/* {this.props.profiles.map(profile => */}

      //           <div id="name">
      //             {/* <h1 className="quickFade delayTwo">{profile.name}</h1> */}
      //             <h1 className="quickFade delayTwo">Profiel naam</h1>
      //             <h2 className="quickFade delayThree">Job Title</h2>
      //           </div>
      //           {/* )} */}

      //           <div id="contactDetails" className="quickFade delayFour">
      //             <ul>
      //               <li>email: <a href="mailto:john@smith.com" target="_blank">john@smith.com</a></li>
      //               <li>website: <a href="http://www.smith.com">www.smith.com</a></li>
      //               <li>phone: 01234567890</li>
      //             </ul>
      //           </div>
      //           <div className="clear"></div>
      //         </div>

      //         <div id="mainArea" className="quickFade delayFive">
      //           {/* <section>
      //         <article>
      //           <div className="sectionTitle">
      //             <h1>Personal Profile</h1>
      //           </div>

      //           <div className="sectionContent">
      //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
      //           </div>
      //         </article>
      //         <div className="clear"></div>
      //       </section> */}


      //           <section>
      //             <div className="sectionTitle">
      //               <h1>Work Experience</h1>
      //             </div>

      //             <div className="sectionContent">
      //               {this.props.profile.map(x =>
      //                 <article key={x.id}>
      //                   <li style={{ fontWeight: 'bold' }}>{x.period_or_language}</li>
      //                   <li style={{ padding: '1rem 0' }}>{x.description}</li>
      //                 </article>
      //               )}

      //             </div>
      //             <div className="clear"></div>
      //           </section>


      //           <section>
      //             {this.props.profile.map(x =>
      //               <div className="sectionTitle">
      //                 <h1>Key Skills</h1>
      //               </div>
      //             )}

      //             <div className="sectionContent">
      //               <ul className="keySkills">
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //                 <li>A Key Skill</li>
      //               </ul>
      //             </div>
      //             <div className="clear"></div>
      //           </section>


      //           <section>
      //             <div className="sectionTitle">
      //               <h1>Education</h1>
      //             </div>

      //             <div className="sectionContent">
      //               <article>
      //                 <h2>College/University</h2>
      //                 <p className="subDetails">Qualification</p>
      //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
      //               </article>

      //               <article>
      //                 <h2>College/University</h2>
      //                 <p className="subDetails">Qualification</p>
      //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
      //               </article>
      //             </div>
      //             <div className="clear"></div>
      //           </section>

      //         </div>
      //       </div>
      //     </div>



      //   </React.Fragment>
    )
  }
}

export default ProfileTest;
