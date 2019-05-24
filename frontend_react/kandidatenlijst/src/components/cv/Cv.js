import React from 'react'

import './Cv.css'

const Cv = ({ profile }) => {
    return (
        <div className="main">
            <p>{profile.name}</p>
        </div>
    );
};


export default Cv;