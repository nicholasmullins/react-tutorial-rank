import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {

    const { type, payload } = action; // destructuring so we don't have to type action.paylood, action.type etc. 

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
