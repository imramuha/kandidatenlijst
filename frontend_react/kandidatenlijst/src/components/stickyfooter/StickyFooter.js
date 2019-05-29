import React, { Component } from 'react'
import InfoButton from './../buttons/infobutton/InfoButton';
import LogoutButton from './../buttons/logoutbutton/LogoutButton';

import './StickyFooter.css';

const StickyFooter = ({ id, add, update, info, refresh, logout }) => {
  return (
    <div className="sticky">

      <a className="action-button animate green" onClick={add}>add</a>
      <a className="action-button animate pink">do nothing</a>
      <a className="action-button animate yellow">update</a>

    </div>
  )
}

export default StickyFooter
