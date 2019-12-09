import {
    GET_VIDEOS,
    VIDEO_ERROR
} from '../actions/types';

const initialState = {
    videos: [],
    video: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case GET_VIDEOS:
        return {
            ...state,
            videos: payload,
            loading: false
        }
        case VIDEO_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        }
        default:
            return state


    }
}