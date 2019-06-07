import {
  FETCH_PROFILES,
  FETCH_PROFILE,
  SEND_TO_CRM, HIDE_ITEM,
  GET_DATA_FROM_CRM
} from '../actions/types'; // Waarom types? Zo weet de reducer welke state hij moet returnen?

const initialState = {
  items: [], // Profiles from our action
  item: [], // Single Profile, also array because api is structured like that, no object,

  dataZoho: [],
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
    case SEND_TO_CRM:
      return {
        ...state,
        newlyAddedProfile: action.payload
      }
    case HIDE_ITEM:
      return {
        ...state,
        hiddenProfile: action.payload
      }
    case GET_DATA_FROM_CRM:
      return {
        ...state,
        dataZoho: action.payload
      }
    default:
      return state;
  }
}