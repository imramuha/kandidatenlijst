import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import LoginView from '../views/login-view/LoginView';
import ProfileView from '../views/profile-view/ProfileView';
import HomeView from '../views/home-view/HomeView';

import Login from '../components/login/Login';

import PrivateRoute from '../components/private/PrivateRoute';
import ProfilesView from '../views/profiles-view/ProfilesView';
import ProfileTest from '../views/profile-view/ProfileTest';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>

          {/* <Route exact path="/auth" component={AuthComponent} /> */}

          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={LoginView} />
          {/* <AuthComponent> */}
          {/* <Switch> */}
          {/* <PrivateRoute exact path="/profiles" component={Profile} />
          <PrivateRoute exact path="/profiles:id" component={ProfileView} /> */}
          <Route exact path="/profiles" component={ProfilesView} /> {/*  Alle profiles */}
          <Route exact path="/profiles/:profile_id" component={ProfileTest} /> {/* Specifieke profiel */}
          {/* </Switch> */}

          {/* </AuthComponent> */}
        </Switch>
      </React.Fragment>
    )
  }
}

export default Main;