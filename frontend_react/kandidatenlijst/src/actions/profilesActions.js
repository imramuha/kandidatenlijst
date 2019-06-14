/* We only use redux for: post request and authentication, not get request. 
For that we use the internal state of a component.
*/

import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  SEND_TO_CRM,
  HIDE_ITEM,
  GET_DATA_FROM_CRM,
  UPDATE_DATA_FROM_CRM
} from './types';
import axios from 'axios';
import { getLocalStorage } from '../helpers'

// All profiles, with titels, telephone, email
export const fetchProfiles = () => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.get(`http://vdab.i4m.be/profiles/newandexistingprofiles`, config)
    .then(res => {
      const persons = res.data;
      dispatch({ // The this.setState equivalent of redux, dispatch to the reducer
        type: FETCH_PROFILES,
        payload: persons
      })
    }).catch(err => console.log(err))
}

// Fetch a specific profile, with data more specific for a person
export const fetchProfile = (id) => dispatch => {

  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };

  axios.get(`http://vdab.i4m.be/profiles/profile/${id}`, config)
    .then(res => {
      const person = res.data;
      dispatch({
        type: FETCH_PROFILE,
        payload: person
      })
    }).catch(err => console.log(err))
}

export const addToCrm = (id, userData) => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.post(`http://vdab.i4m.be/profiles/addorignoreinzoho/${id}/Right`, userData, config)
    .then(res => {
      dispatch({
        type: SEND_TO_CRM,
        payload: res.data
      })
    }).catch(err => console.log(err))
}

export const doNothing = (id, userData) => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.post(`http://vdab.i4m.be/profiles/addorignoreinzoho/${id}/Left`, userData, config)
    .then(res => {
      // console.log(res);
      dispatch({
        type: HIDE_ITEM,
        payload: res.data
      })
    }).catch(err => console.log(err))
}

// id is the candidateId
export const getSpecificProfileFromZoho = (id) => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.get(`http://vdab.i4m.be/profiles/profileZoho/${id}`, config)
    .then(res => {
      // console.log(res);
      dispatch({
        type: GET_DATA_FROM_CRM,
        payload: res.data
      })
    }).catch(err => console.log(err))
}

// id is the candidateId
export const updateSpecificProfileZoho = (id, userData) => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.post(`http://vdab.i4m.be/profiles/profileZoho/${id}`, userData, "Content-Type: application/x-www-form-urlencoded")
    .then(res => {
      //console.log(res);
      dispatch({
        type: UPDATE_DATA_FROM_CRM,
        payload: res.data
      })
    }).catch(err => console.log(err))
}
