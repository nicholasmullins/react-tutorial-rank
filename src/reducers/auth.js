import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,

} from '../actions/types';

const iniitalState = {
    token: localStorage.getItem('token'), // this is javascript to grab from local storage
    isAuthenticated: null, // we are setting it to null at first, but then it will be set to true when we have success
    loading: true, // set to true by default, once we get the data response, we will set it to false so we know it's been loaded
    user: null // user data will get put here when it is returned from the server
}

export default function(state = iniitalState, action) {
  const { type, payload } = action; // destructuring so we don't have to put action.payload etc.
  
    switch(type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default: 
            return state;
    }
}