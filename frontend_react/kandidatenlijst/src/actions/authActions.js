/* We only use redux for: post request and authentication, not get request. 
For that we use the internal state of a component.
*/

import { LOGIN_USER, LOGOUT_USER } from "./types";
import axios from 'axios';
import { sendTokenWithHeader } from "../helpers";

export const loginUser = (userData, history) => dispatch => {
  console.log('auth action run')
  axios.post('http://vdab.i4m.be/api/login', userData,
    { "Content-Type": "application/x-www-form-urlencoded" })
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('token', token);
      sendTokenWithHeader(token)
      let isAuthenticated = true;
      dispatch({
        type: LOGIN_USER,
        payload: isAuthenticated
      })
    })

    .catch(err =>
      console.log(err)
    );
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token');
  sendTokenWithHeader(false);
  let isAuthenticated = false;
  dispatch({
    type: LOGOUT_USER,
    payload: isAuthenticated
  })
}