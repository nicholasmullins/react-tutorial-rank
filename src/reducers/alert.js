import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {

    const { type, payload } = action; // destructuring so we don't have to type action.paylood, action.type etc. 

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // since state is immutable, we must include the original state (...state) and then what you want to change state to (payload)
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload); // this payload is the payload: id dispatched from our timeout in actions/alert
                                                          // as long as the current alert ID doesn't match the payload then return it. 
    default:
      return state;
  }
}

// This function routes all of our alerts and changes state. 
