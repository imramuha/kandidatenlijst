import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../../services/auth.service'

/* Helper component to create private routes */
// https://www.youtube.com/watch?v=oRL-pttfNSc&t=321s
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticationService.checkAuth.isAuthenticated === true ? ( // Logged in go, you can use the component?
        <Component {...props} />
      ) : (
          <Redirect to="/login" /> // Not logged in? Go back to login
        )
    }
  />
);

export default PrivateRoute;