import { FETCH_PROFILES, FETCH_PROFILE, SEND_TO_CRM } from './types';
import axios from 'axios';
import { getLocalStorage } from '../helpers'

// All profiles, with titels, telephone, email
export const fetchProfiles = () => dispatch => {

  // TODO: put these two together, cleaner code
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  // http://vdab.i4m.be/profiles/profiles
  // https://jsonplaceholder.typicode.com/posts
  // http://127.0.0.1:8000/api/profiles

  axios.get(`http://vdab.i4m.be/profiles/profiles`, config)
    .then(res => {
      const persons = res.data;
      dispatch({ // The this.setState equivalent of redux, dispatch to the reducer
        type: FETCH_PROFILES,
        payload: persons
      })
    })
}

// Fetch a specific profile, with data more specific for a person
export const fetchProfile = (id) => dispatch => {

  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };

  axios.get(`http://vdab.i4m.be/profiles/profile/${id}`, config)
    .then(res => {
      //console.log(res);
      const person = res.data;
      console.log("profile fetched:", person)
      dispatch({
        type: FETCH_PROFILE,
        payload: person
      })
    })
}

export const addToCrm = (id, userData) => dispatch => {
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  axios.post(`http://vdab.i4m.be/profiles/addorignoreinzoho/${id}/Right`, userData, config)
    .then(res => {
      console.log(res);
      dispatch({
        type: SEND_TO_CRM,
        payload: res.data
      })
    })
}
