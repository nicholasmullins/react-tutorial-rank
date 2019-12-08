import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null, // profile is gonna make a request and get all of our profile data and put it in there
    profiles: [],  // this is for the profile listing page.
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default: 
            return state;
    }

}