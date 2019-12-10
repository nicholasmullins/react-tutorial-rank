import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_VIDEOS,
  VIDEO_ERROR,
  UPDATE_LIKES,
  DELETE_VIDEO,
  ADD_VIDEO
} from './types';

// Get Videos

export const getVideos = () => async dispatch => {
  try {
    const res = await axios.get('/api/videos');
    dispatch({
      type: GET_VIDEOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Like

export const addLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/videos/like/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Remove Like

export const removeLike = id => async dispatch => {
  try {
    const res = await axios.put(`/api/videos/unlike/${id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Video

export const deleteVideo = id => async dispatch => {
  try {
    await axios.delete(`/api/videos/${id}`);
    dispatch({
      type: DELETE_VIDEO,
      payload: id
    });

    dispatch(setAlert('Post removed', 'success'));
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Video

export const addVideo = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/videos/', formData, config);

    dispatch({
      type: ADD_VIDEO,
      payload: res.data
    });

    dispatch(setAlert('Video posted', 'success'));
  } catch (err) {
    // const errors = err.response.data.errors;

    // if(errors) {
    //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) // this takes our errors array in our backend and calls setAlert to display an alert
    // }

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
