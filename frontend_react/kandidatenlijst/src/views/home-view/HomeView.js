import React, { Component } from 'react'
import StickyFooter from '../../components/stickyfooter/StickyFooter';
import { Link } from 'react-router-dom';

class HomeView extends Component {
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

export default HomeView
