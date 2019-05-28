import { combineReducers } from 'redux';
import profilesReducer from './profilesReducer';
import authReducer from './authReducer';

export default combineReducers({
  profiles: profilesReducer,
  auth: authReducer
});