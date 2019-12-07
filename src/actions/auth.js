import axios from 'axios';
import { setAlert } from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

import setAuthToken from '../utils/setAuthToken' // this leads to setAuthToken function which will attach a header with the current token to every request

// Load User

export const loadUser = () => async dispatch => { // this calls our setAuthToken() with the current token passed into it
    if(localStorage.token) {
        setAuthToken(localStorage.token)  
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register User

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'

        }
    }

    const body = JSON.stringify( {name, email, password} );

    try {
    
        const res = await axios.post('api/users', body, config);

        dispatch({   // DISPATCH sends it to the REDUCER! so it goes from actions to reducers to the components/layout
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) // this takes our errors array in our backend and calls setAlert to display an alert
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// Login User

export const login = (email, password ) => async dispatch => { // we are no longer taking an object, we are going to create an object with email and password
    const config = {
        headers: {
            'Content-Type': 'application/json'

        }
    }

    const body = JSON.stringify( {email, password} );

    try {
    
        const res = await axios.post('api/auth', body, config);

        dispatch({   // DISPATCH sends it to the REDUCER! so it goes from actions to reducers to the components/layout
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))) // this takes our errors array in our backend and calls setAlert to display an alert
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// Logout / Clear profile

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}