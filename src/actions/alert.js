import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout=5000) => dispatch => { // this setAlert function can be put anywhere and can be dispatched. Calling it initiates an alert
    const id = uuid.v4(); // this is a package we installed called UUID which gives us a random ID.
    dispatch({            // when called this function will take a message and give it an id and then dispatch it.
        type: SET_ALERT,
        payload: { msg, alertType, id } // this is our message of Passwords Do Not Match, alertType of Danger and the id we generated using UUID
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id}), timeout) // timeout removes our alert after 5 secs (5000) we are switching dispatch in setAlert()
                                                                         
}

// Currently, this is being called from Register and we are using this to dispatch an alert to our Reducer (reducers/alert).

// the timeout switches the dispatch to just send the id we created as a payload. 

