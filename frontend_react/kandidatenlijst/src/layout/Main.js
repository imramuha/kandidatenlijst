import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import LoginView from '../views/login-view/LoginView';
import ProfileView from '../views/profile-view/ProfileView';
import HomeView from '../views/home-view/HomeView';

import Login from '../components/login/Login';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>

          {/* <Route exact path="/auth" component={AuthComponent} /> */}

          <Route exact path="/" component={HomeView} />
          {/* <AuthComponent> */}
          { /*<Route exact path="/profiles:id" component={ProfileView} /> */}
          <Route exact path="/profiles" component={ProfileView} />
          <Route exact path="/login" component={LoginView} />
          {/* </AuthComponent> */}
        </Switch>
      </React.Fragment>
    )
  }
}

export default Main;