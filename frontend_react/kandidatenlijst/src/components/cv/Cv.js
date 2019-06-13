import React from 'react';
import moment from 'moment';

import './Cv.css'

const Cv = ({ profile, profiles }) => {
    console.log(profiles)
    console.log(profile)

    return (

        <div className="cv">

            <div>
                {/* if profiles.profiles exists... do the following */}
                {profile.profiles ?
                    <div className="profileHeader">
                        <div className="profileImage">
                            {profile.profiles.img_url && <img src={`${profile.profiles.img_url}`} />}
                        </div>
                        <div className="profileData">
                            <div className="name">
                                <p>{profile.profiles.name}</p>
                                {profile.profiles.geboortedatum &&
                                    <p>{moment().diff(`"${profile.profiles.geboortedatum.split("-").reverse().join("-")}"`, 'years')} jaar</p>
                                }

                            </div>
                            <div className="contactDetails">
                                <ul>
                                    <li><a href={`mailto:${profile.profiles.email}`} >{profile.profiles.email}</a> - <a href={`tel:${profile.profiles.gsm}`}> {profile.profiles.gsm}</a></li>
                                    <li>{profile.profiles.adres}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    : <div className="name">
                        <p>ALLE PROFIELEN ZIJN BEHANDELD</p>
                    </div>}

                <div>
                    {profile.details &&
                        <section>
                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "1") {
                                    result = <div className="sectionTitle"><h1>werk<br />ervaring</h1></div>
                                }
                                return result;
                            }, [])}

                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "1" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>

                            </div>
                            <div className="clear"></div>

                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "2") {
                                    result = <div className="sectionTitle"><h1>studies</h1></div>
                                }
                                return result;
                            }, [])}

                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "2" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>

                            </div>

                            <div className="clear"></div>


                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "3") {
                                    result = <div className="sectionTitle"><h1>cursussen</h1></div>
                                }
                                return result;
                            }, [])}


                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "3" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="clear"></div>


                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "4") {
                                    result = <div className="sectionTitle"><h1>talen</h1></div>
                                }
                                return result;
                            }, [])}


                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "4" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="clear"></div>

                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "5") {
                                    result = <div className="sectionTitle"><h1>bijkomende<br />competenties</h1></div>
                                }
                                return result;
                            }, [])}

                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "5" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="clear"></div>

                            {profile.details.reduce((result, current, i) => {
                                if (current.detailtype_id === "6") {
                                    result = <div className="sectionTitle"><h1>attesten</h1></div>
                                }
                                return result;
                            }, [])}

                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.detailtype_id === "6" &&
                                                    <React.Fragment>
                                                        <li>{detail.period_or_language}</li>
                                                        <li>{detail.description}</li>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </section>
                    }

                    {profile.profiles &&
                        <div>
                            {profile.profiles.persoonsgebonden_competenties === "" ? null :
                                <section>
                                    <div className="sectionTitle">
                                        <h1>vaardigheden</h1>
                                    </div>
                                    <div className="sectionContent">
                                        {profile.profiles.persoonsgebonden_competenties}
                                    </div>
                                    <div className="clear"></div>
                                </section>
                            }

                            {profile.profiles.gewenste_job === "" ? null :
                                <section>
                                    <div className="sectionTitle">
                                        <h1>gewenste<br />job</h1>
                                    </div>
                                    <div className="sectionContent">
                                        {profile.profiles.gewenste_job}
                                    </div>
                                    <div className="clear"></div>
                                </section>
                            }

                            {profile.profiles.vervoer === "" ? null :
                                <section>
                                    <div className="sectionTitle">
                                        <h1>vervoer</h1>
                                    </div>
                                    <div className="sectionContent">
                                        <p>{profile.profiles.vervoer}</p>

                                    </div>
                                    <div className="clear"></div>
                                </section>
                            }

                            {profile.profiles.extra_info === "" && profile.profiles.hobby === "" && profile.profiles.samenvatting === "" ? null :
                                <section>
                                    <div className="sectionTitle">
                                        <h1>extra<br />info</h1>
                                    </div>
                                    <div className="sectionContent">
                                        <p>{profile.profiles.extra_info}</p>
                                        <p>{profile.profiles.hobby}</p>
                                        <p>{profile.profiles.samenvatting}</p>
                                    </div>
                                    <div className="clear"></div>
                                </section>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


export default Cv;