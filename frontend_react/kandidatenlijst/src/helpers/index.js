
import axios from 'axios';

export const getLocalStorage = () => {
  return localStorage.getItem('token');
}

// Bij hide request
export const getIdFromProfile = (id) => {
  return id;
}

export const sendTokenWithHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
}

// module.exports = {
//   getLocalStorage,
//   getIdFromProfile,
//   sendTokenWithHeader,
// }