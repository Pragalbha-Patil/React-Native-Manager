import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SHOW_SPINNER
} from '../actions/types';

const INITIAL_STATE = {email: '', password: '', user: null, error: '', loading: false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            // returns `auth.email` in state
            // auth came from `reducers/index.js`
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            // returns `auth.password` in state
            // auth came from `reducers/index.js`
            return {...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            // returns `auth.password` in state
            // auth came from `reducers/index.js`
            return {...state, ...INITIAL_STATE, user: action.payload, } // OR error: '', loading: false, email: '', password: ''}
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false}
        case SHOW_SPINNER:
            return {...state,  error: '', loading: true}
        default:
            return state;
    }
};
