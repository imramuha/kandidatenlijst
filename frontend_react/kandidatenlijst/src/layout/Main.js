import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import LoginView from '../views/login-view/LoginView';

import PrivateRoute from '../components/private/PrivateRoute';
import ProfilesView from '../views/profiles-view/ProfilesView';

import TrackingView from '../views/tracking-view/TrackingView';


import { connect } from 'react-redux';

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => (
            isAuthenticated ? (
              <Redirect to="/profiles" />
            ) : (
                <Redirect to="/login" />
              )
          )} />

          <Route exact path="/login" component={LoginView} />
          <PrivateRoute exact path="/profiles" component={ProfilesView} /> {/*  Alle profiles */}

          <PrivateRoute exact path="/emails-tracking" component={TrackingView} />

        </Switch>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Main)