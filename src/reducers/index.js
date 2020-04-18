import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    // will return `state.auth` and our children reside in `AuthReducer.js`
    auth: AuthReducer
});
