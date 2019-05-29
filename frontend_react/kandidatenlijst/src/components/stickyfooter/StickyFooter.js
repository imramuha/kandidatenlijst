import React, { Component } from 'react'
import AddButton from './../buttons/addbutton/AddButton';
import UpdateButton from './../buttons/updatebutton/UpdateButton';
import HideButton from './../buttons/hidebutton/HideButton';
import InfoButton from './../buttons/infobutton/InfoButton';
import LogoutButton from './../buttons/logoutbutton/LogoutButton';

import './StickyFooter.css';
import RefreshButton from '../buttons/refreshbutton/RefreshButton';

class StickyFooter extends Component {
  render() {
    return (
      <div className="sticky">
        <HideButton />
        <UpdateButton />
        <AddButton />
        {/* <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> */}
        <InfoButton />
        <LogoutButton />
        <RefreshButton />
        {/* </div> */}
      </div>
    )
  }
}

export default StickyFooter
