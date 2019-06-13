import React from 'react';

import { Link } from 'react-router-dom'

const MailTrackingButton = () => {
  return (
    <React.Fragment>
      <Link to="/emails-tracking" className="mail-button animate blue"><i className="fa fa-envelope"></i></Link>
    </React.Fragment>
  )
}


export default MailTrackingButton