import React from 'react';
import moment from 'moment';

import './Cv.css'

const Cv = ({ profile }) => {
    console.log(profile.profiles)
    return (

        <div className="cv">

            <div>
                {/* if profiles.profiles exists... do the following */}
                {profile.profiles &&
                    <div>
                        <div className="name">
                            {/* <p>{profile.profiles.id}</p> */}
                            <p>{profile.profiles.name}</p>
                            {/* Leeftijd */}
                            {/* Format date to YYYY-MM-DD, nu is het DD-MM-YYYY */}
                            <p>{moment().diff(`"${profile.profiles.geboortedatum.split("-").reverse().join("-")}"`, 'years')} jaar</p>

                        </div>
                        <div className="contactDetails">
                            <ul>
                                <li><a href={`mailto:${profile.profiles.email}`} >{profile.profiles.email}</a> - <a href={`tel:${profile.profiles.gsm}`}> {profile.profiles.gsm}</a></li>
                                <li></li>
                                <li>{profile.profiles.adres}</li>
                            </ul>
                        </div>
                    </div>
                }
                <div>
                    {profile.details &&
                        <section>
                            <div className="sectionTitle">
                                <h1>werk ervaring</h1>
                            </div>

                            <div className="sectionContent werkErvaring">
                                <div>
                                    <ul>
                                        {profile.details.map((detail) =>
                                            <div>
                                                {detail.period_or_language === "" ?
                                                    null :
                                                    <li>{detail.period_or_language}</li>
                                                }
                                                <li>{detail.description}</li>
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
                                        <h1>gewenste job</h1>
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
                                        <h1>extra <br /> info</h1>
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