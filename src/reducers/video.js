import {
    GET_VIDEOS,
    VIDEO_ERROR,
    UPDATE_LIKES,
    DELETE_VIDEO,
    ADD_VIDEO
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
        };
        case ADD_VIDEO:
        return {
            ...state,
            video: payload, // videos: [state.videos, payload] we are making a copy of our current videos array and then bringing in our new post (which is in the payload)
            loading: false
        }
        case DELETE_VIDEO:
        return{
            ...state,
            videos: state.videos.filter(video => video._id !== payload),
            loading: false
        }
        case VIDEO_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        };
        case UPDATE_LIKES:
        return {
            ...state,
            videos: state.videos.map(video => video._id === payload.id ? {...video, likes: payload.likes } : video),
            // we are mapping through the videos to make sure that the video id matches our payload idea. If it does
            // then we are returning the whole video object and then updating the likes to our payload of likes, if not then we are just returning the video.
            loading: false
        }
        default:
            return state


    }
}