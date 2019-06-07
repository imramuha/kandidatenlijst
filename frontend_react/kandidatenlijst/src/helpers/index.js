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

// Short form but not using it so far maybe later
export const createConfig = () => {
  const token = getLocalStorage();
  let config;
  return config = {
    headers: { 'Authorization': token }
  };
}