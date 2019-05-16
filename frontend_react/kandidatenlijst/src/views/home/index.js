import React, { Component } from 'react'
import Sidebar from '../../components/Sidebar';
import StickyFooter from '../../components/StickyFooter';
import PersonList from '../../components/PersonList';
import Table from '../../components/table';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        Home page
        {/* <Sidebar /> */}
        {/* <PersonList /> */}
        {/* <Table /> */}
        {/* <Spinner />  */}
        <Link to="/login">login</Link>
        <StickyFooter />

      </React.Fragment>
    )
  }
}

export default Home
