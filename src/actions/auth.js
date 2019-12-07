import axios from 'axios';
import { setAlert } from './alert'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

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