import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_VIDEOS,
  VIDEO_ERROR,
  UPDATE_LIKES,
  DELETE_VIDEO,
  ADD_VIDEO,
  GET_VIDEO,
  ADD_REVIEW,
  REMOVE_REVIEW
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

    dispatch(setAlert('Post Removed', 'success'));
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

    dispatch(setAlert('Video Posted', 'success'));
  } catch (err) {

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get One Video

export const getVideo = id => async dispatch => {
  try {
    const res = await axios.get(`/api/videos/${id}`);
    dispatch({
      type: GET_VIDEO,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Review

export const addReview = (videoId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`/api/videos/review/${videoId}`, formData, config);

    console.log(res)
    dispatch({
      type: ADD_REVIEW,
      payload: res.data
    });

    dispatch(setAlert('Review Added', 'success'));
  } catch (err) {
    

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Review

export const deleteReview = (videoId, reviewId) => async dispatch => {
  try {
    await axios.delete(`/api/videos/review/${videoId}/${reviewId}`);
    dispatch({
      type: REMOVE_REVIEW,
      payload: reviewId
    });

    dispatch(setAlert('Review Removed', 'success'));
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};