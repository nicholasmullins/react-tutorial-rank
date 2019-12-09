import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import video from './video';
import profile from './profile'

export default combineReducers ({
    alert,
    auth,
    profile,
    video
})


// this helps handle our multiple reducers