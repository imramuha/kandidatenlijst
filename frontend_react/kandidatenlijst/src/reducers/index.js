import { combineReducers } from 'redux';
import profilesReducer from './profilesReducer'

export default combineReducers({
  profiles: profilesReducer
});