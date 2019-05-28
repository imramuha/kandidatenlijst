import React from 'react'

import './cv.css'

const Cv = ({ profile }) => {
    console.log(profile.profiles)
    return (

        <div className="cv">

            <div>
                {/* if profiles.profiles exists... do the following */}
                {profile.profiles &&
                    <div>
                        <div className="name">
                            <p>{profile.profiles.name}</p>
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
                <div id="mainArea" className="quickFade delayFive">
                    {profile.details &&
                        <section>
                            <div className="sectionTitle">
                                <h1>werkervaring</h1>
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
                            <section>
                                <div className="sectionTitle">
                                    <h1>vaardigheden</h1>
                                </div>
                                <div className="sectionContent">
                                    {profile.profiles.persoonsgebonden_competenties}
                                </div>
                                <div className="clear"></div>
                            </section>

                            <section>
                                <div className="sectionTitle">
                                    <h1>gewenste job</h1>
                                </div>
                                <div className="sectionContent">
                                    {profile.profiles.gewenste_job}
                                </div>
                                <div className="clear"></div>
                            </section>

                            <section>
                                <div className="sectionTitle">
                                    <h1>vervoer</h1>
                                </div>
                                <div className="sectionContent">
                                    <p>{profile.profiles.vervoer}</p>

                                </div>
                                <div className="clear"></div>
                            </section>

                            <section>
                                <div className="sectionTitle">
                                    <h1>extra</h1>
                                </div>
                                <div className="sectionContent">
                                    <p>{profile.profiles.extra_info}</p>
                                    <p>{profile.profiles.hobby}</p>
                                    <p>{profile.profiles.samenvatting}</p>
                                </div>
                                <div className="clear"></div>
                            </section>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


export default Cv;