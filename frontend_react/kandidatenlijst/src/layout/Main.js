import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import LoginView from '../views/login-view/LoginView';
import ProfileView from '../views/profile-view/ProfileView';
import HomeView from '../views/home-view/HomeView';

import Login from '../components/login/Login';

import PrivateRoute from '../components/private/PrivateRoute';
import ProfilesView from '../views/profiles-view/ProfilesView';
import ProfileTest from '../views/profile-view/ProfileTest';

import { connect } from 'react-redux';

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    //   const checkAuth = { if(isAuthenticated === true) { <Redirect to="/login" />
    // } else { <Redirect to="/login" /> }}

    return (
      <React.Fragment>
        <Switch>

          {/* <Route exact path="/auth" component={AuthComponent} /> */}

          {/* <Redirect exact from="/" to="/login" component={HomeView} /> */}
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          {/* {!isAuthenticated ? <Route exact to="/login" component={LoginView} /> : <Redirect to="/profiles" exact to={ProfilesView} />} */}
          {/* <AuthComponent> */}
          {/* <Switch> */}
          {/* <PrivateRoute exact path="/profiles" component={Profile} />
          <PrivateRoute exact path="/profiles:id" component={ProfileView} /> */}
          <PrivateRoute exact path="/profiles" component={ProfilesView} /> {/*  Alle profiles */}
          <PrivateRoute exact path="/profiles/:profile_id" component={ProfileTest} /> {/* Specifieke profiel */}
          {/* </Switch> */}

          {/* </AuthComponent> */}
        </Switch>
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Main)