import React, { Component } from 'react'
import Table from '../../components/table/Table';
import Profile from '../../components/profile/Profile';
import Arrows from '../../components/arrows/Arrows';

import './ProfileView.css';

class ProfileView extends Component {
  render() {
    return (
      <div>
        <Arrows />
        <Table />
        <Profile />
      </div>
    )
  }
}

export default ProfileView;
