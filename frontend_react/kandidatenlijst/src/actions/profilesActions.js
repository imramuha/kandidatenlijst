import { FETCH_PROFILES, FETCH_PROFILE } from './types';
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
      console.log(res)
      dispatch({ // The this.setState equivalent of redux, dispatch to the reducer
        type: FETCH_PROFILES,
        payload: persons
      })
    })
}

// export function fetchProfiles() { Is hetzelfde maar geen es6 -> es5
//   return function (dispatch) {

//   }
// }

// Fetch a specific profile, with data more specific for a person
export const fetchProfile = (id) => dispatch => {

  // TODO: put these two together, cleaner code
  const token = getLocalStorage();
  let config = {
    headers: { 'Authorization': token }
  };
  //let id = this.props.match.params.profile_id; // Way to use this, is undefined
  //console.log(id);
  // http://vdab.i4m.be/profiles/profiles/${id}
  // http://vdab.i4m.be/details/details/${id}
  // http://127.0.0.1:8000/api/profiles/${id}

  //http://vdab.i4m.be/profiles/profile/47
  axios.get(`http://vdab.i4m.be/profiles/profile/${id}`, config)
    .then(res => {
      //console.log(res);
      const person = res.data;
      console.log(res)
      //console.log(person);
      //this.setState({ person: person });
      dispatch({
        type: FETCH_PROFILE,
        payload: person
      })
    })
}
