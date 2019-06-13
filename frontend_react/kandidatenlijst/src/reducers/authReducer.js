import { LOGIN_USER, LOGOUT_USER } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('token') ? true : false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log('auth-reducer logout')
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case LOGOUT_USER:
      console.log('logout')
      return {
        ...state,
        isAuthenticated: action.payload
      }

    default:
      return state;
  }
}