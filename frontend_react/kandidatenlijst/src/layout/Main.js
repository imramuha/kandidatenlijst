import React, { Component } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";

import Login from '../views/login';
import ProfileDetail from '../views/profile/ProfileDetail';
import Profiles from '../views/profile/Profiles';
import Home from '../views/home';

import AuthComponent from '../components/AuthComponent';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>

          {/* <Route exact path="/auth" component={AuthComponent} /> */}

          <Route exact path="/" component={Home} />
          {/* <AuthComponent> */}
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profiles:id" component={ProfileDetail} />
          <Route exact path="/login" component={Login} />
          {/* </AuthComponent> */}
        </Switch>
      </React.Fragment>
    )
  }
}

export default Main;