import React, { Component } from 'react'
import InfoButton from './../buttons/infobutton/InfoButton';
import LogoutButton from './../buttons/logoutbutton/LogoutButton';

import './StickyFooter.css';
import RefreshButton from '../buttons/refreshbutton/RefreshButton';

const StickyFooter = ({ id, add, update, hide, info, refresh, logout }) => {
  return (
    <div className="sticky">

      <a className="action-button animate green" onClick={add}>add</a>
      <a className="action-button animate pink" onClick={hide}>do nothing</a>
      <a className="action-button animate yellow" onClick={update}>update</a>
      <LogoutButton />
      <RefreshButton />
      <InfoButton />

    </div>
  )
}


export default StickyFooter
