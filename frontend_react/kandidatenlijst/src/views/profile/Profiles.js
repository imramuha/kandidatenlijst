import React, { Component } from 'react'
import Table from '../../components/table';
import './profile.css'
import PersonList from '../../components/PersonList';
import Arrows from '../../components/arrows';

class Profiles extends Component {
  render() {
    return (
      <div>
        <Arrows />
        <Table />
        <PersonList />
      </div>
    )
  }
}

export default Profiles;
