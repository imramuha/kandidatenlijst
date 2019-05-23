import React, { Component } from 'react'
import Table from '../../components/table/Table';
import Arrows from '../../components/arrows/Arrows';

import { Link } from 'react-router-dom';

import './ProfileView.css';
import axios from 'axios';

import helpers from '../../helpers'
import { getLocalStorage } from '../../helpers'
import Spinner from '../../components/spinner/Spinner';

import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import { fetchProfile } from '../../actions/profilesActions';
import StickyFooter from '../../components/stickyfooter/StickyFooter';

import BottomArrow from '../../components/arrows/bottomarrow/BottomArrow';
import TopArrow from '../../components/arrows/toparrow/TopArrow';

// For one specific profile

class ProfileView extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     person: [],
  //   }
  // }

  componentDidMount() {
    let id = this.props.match.params.profile_id;
    this.props.fetchProfile(id) // We fetch data from a specific profile
    // this.props.fetchProfiles() // Fetch all the profiles, werkt niet zoals ik wil, TODO remove
    // We also need to fetch data from all profiles, because name is included there
  }

  render() {
    // Error boundry
    const person = this.props.profile ? (
      <React.Fragment>

        {/* {this.props.profile.map(x =>
          // <ul key={x.id}>
          //   <li>{x.period_or_language}</li>
          //   <li>{x.description}</li>
          // </ul>
          <div></div>
        )} */}
        <div>
          {/* {x.description}
            {x.period_or_language} */}
          {/* In aparte component rights side */}

          <div id="cv" className="instaFade">
            <div className="mainDetails">
              <div id="headshot" className="quickFade">
                <img src="https://loremflickr.com/320/240?random=1" alt="headshot" />
              </div>
              {/* {this.props.profiles.map(profile => */}

              <div id="name">
                {/* <h1 className="quickFade delayTwo">{profile.name}</h1> */}
                <h1 className="quickFade delayTwo">Profiel naam</h1>
                <h2 className="quickFade delayThree">Job Title</h2>
              </div>
              {/* )} */}

              <div id="contactDetails" className="quickFade delayFour">
                <ul>
                  <li>email: <a href="mailto:john@smith.com" target="_blank">john@smith.com</a></li>
                  <li>website: <a href="http://www.smith.com">www.smith.com</a></li>
                  <li>phone: 01234567890</li>
                </ul>
              </div>
              <div className="clear"></div>
            </div>

            <div id="mainArea" className="quickFade delayFive">
              {/* <section>
            <article>
              <div className="sectionTitle">
                <h1>Personal Profile</h1>
              </div>

              <div className="sectionContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
              </div>
            </article>
            <div className="clear"></div>
          </section> */}


              <section>
                <div className="sectionTitle">
                  <h1>Work Experience</h1>
                </div>

                <div className="sectionContent">
                  {this.props.profile.map(x =>
                    <article key={x.id}>
                      <li style={{ fontWeight: 'bold' }}>{x.period_or_language}</li>
                      <li style={{ padding: '1rem 0' }}>{x.description}</li>
                    </article>
                  )}

                </div>
                <div className="clear"></div>
              </section>


              <section>
                {this.props.profile.map(x =>
                  <div className="sectionTitle">
                    <h1>Key Skills</h1>
                  </div>
                )}

                <div className="sectionContent">
                  <ul className="keySkills">
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                    <li>A Key Skill</li>
                  </ul>
                </div>
                <div className="clear"></div>
              </section>


              <section>
                <div className="sectionTitle">
                  <h1>Education</h1>
                </div>

                <div className="sectionContent">
                  <article>
                    <h2>College/University</h2>
                    <p className="subDetails">Qualification</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                  </article>

                  <article>
                    <h2>College/University</h2>
                    <p className="subDetails">Qualification</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                  </article>
                </div>
                <div className="clear"></div>
              </section>

            </div>
          </div>
        </div>



      </React.Fragment>

    ) : (
        <Spinner />
      )

    return (
      <div>
        {/* <Arrows />
        <Table /> */}

        {/* TODO: clean up in clean css */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          Specific profile:
          <Link to="/profiles">Back to profiles</Link>
          {person}
          <BottomArrow />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
          <TopArrow />
        </div>


        {/* <AllProfiles /> all of them */}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // let id = ownProps.match.params.profile_id;
  // return {
  //   profile: state.profiles.find(profile => profile.id === id)
  // }

  // profiles: state.profiles.items,
  profile: state.profiles.item
})

// export default withRouter(connect(mapStateToProps, { fetchProfile })(ProfileView));
// export default connect(mapStateToProps, { fetchProfile, fetchProfiles })(ProfileView);
export default connect(mapStateToProps, { fetchProfile })(ProfileView)