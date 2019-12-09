import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES
} from './types';

// Get current user's profile

export const getCurrentProfile = () => async dispatch => {
    
    try {
        const res = await axios.get('/api/profile/me');

        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
    
}

// Get ALL profiles

export const getProfiles = () => async dispatch => {
    dispatch ({type: CLEAR_PROFILE})

    try {
        const res = await axios.get('/api/profile');

        dispatch ({
            type: GET_PROFILES,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
    
}

// Get Profile by ID

export const getProfileById = userId => async dispatch => {

    try {
        const res = await axios.get(`/api/profile/${userId}`);

        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
    
}


// Create or update profile 
// passing in history object which has a method that will redirect us to a client side route.
export const createProfile = (formData, history, edit = false) => async dispatch => {
    
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('/api/profile', formData, config);

        dispatch ({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')); // will bring use setAlert function that if edit is true/false...then display one or the other

        if(!edit) {
            history.push('/dashboard'); // can't use ReDirect method in a route so you have to use the history object with push method.
        }

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) // this takes our errors array in our backend and calls setAlert to display an alert
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Delete account & profile

export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure? Deleting your account is a final move')) {

        try {
            await axios.delete('/api/profile');
    
            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETED});
    
            dispatch(setAlert('Your account has been permanently deleted'));

        } catch(err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }

};
