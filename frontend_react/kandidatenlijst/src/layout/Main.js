import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import LoginView from '../views/login-view/LoginView';
import ProfileView from '../views/profile-view/ProfileView';

import PrivateRoute from '../components/private/PrivateRoute';
import ProfilesView from '../views/profiles-view/ProfilesView';
import ProfileTest from '../views/profile-view/ProfileTest';

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
          <PrivateRoute exact path="/profiles/:profile_id" component={ProfileTest} /> {/* Specifieke profiel */}
        </Switch>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Main)