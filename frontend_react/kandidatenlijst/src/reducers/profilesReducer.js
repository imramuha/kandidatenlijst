import { FETCH_PROFILES, FETCH_PROFILE } from '../actions/types'; // Waarom types? Zo weet de reducer welke state hij moet returnen?

const initialState = {
  items: [], // Profiles from our action
  item: [] // Single Profile, also array because api is structured like that, no object
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILES:
      return { // Give back the state, put it in the items initialstate,
        ...state, // Components choose if they want it or not
        items: action.payload // We called it in our actions payload, can call whatever we want
      };
    case FETCH_PROFILE:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}