import axios from 'axios';
import setAlert from './alert';

import {
    GET_VIDEOS,
    VIDEO_ERROR
} from './types'


// Get Videos

export const getVideos = () => async dispatch => {
    try {
        const res = await axios.get('/api/videos');
        dispatch({
            type: GET_VIDEOS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: VIDEO_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}