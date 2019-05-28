import React, { Component } from 'react'
import AddButton from './../buttons/addbutton/AddButton';
import UpdateButton from './../buttons/updatebutton/UpdateButton';
import HideButton from './../buttons/hidebutton/HideButton';
import InfoButton from './../buttons/infobutton/InfoButton';
import LogoutButton from './../buttons/logoutbutton/LogoutButton';

import './StickyFooter.css';

class StickyFooter extends Component {
  render() {
    return (
      <div className="sticky">
        <HideButton />
        <UpdateButton />
        <AddButton />
        <InfoButton />
        <LogoutButton />
      </div>
    )
  }
}

export default StickyFooter
