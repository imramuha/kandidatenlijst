/* We only use redux for: post request and authentication, not get request. 
For that we use the internal state of a component.
*/

import { LOGIN_USER, LOGOUT_USER, GET_ERRORS } from "./types";
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
      // console.log(err.response.data)
      dispatch({
        type: GET_ERRORS, // Aparte reducer voor errors, doesn't fully work yet TODO
        payload: err.response.data
      })
    );

  // this.setState({
  //   error: true
  // })
  // return {
  //   type: LOGIN_USER,
  //   payload: userData
  // }
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