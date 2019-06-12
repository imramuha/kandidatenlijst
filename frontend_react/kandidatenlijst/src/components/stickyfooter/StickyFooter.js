import React, { Component } from 'react'
import MailTrackingButton from '../buttons/mailtrackingbutton/MailTrackingButton'
import LogoutButton from './../buttons/logoutbutton/LogoutButton';

import './StickyFooter.css';

const StickyFooter = ({ id, add, update, hide, info, refresh, logout }) => {
  return (
    <div className="sticky">

      <a className="action-button animate green" onClick={add}>add</a>
      <a className="action-button animate pink" onClick={hide}>do nothing</a>
      <a className="action-button animate yellow" onClick={update}>update</a>
      

      <LogoutButton />
      <a className="refresh-button animate purple" onClick={refresh}><i class="fa fa-sync" aria-hidden="true"></i></a>
      <MailTrackingButton />

    </div>
  )
}


export default StickyFooter
