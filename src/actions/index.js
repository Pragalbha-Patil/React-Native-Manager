import Firebase from '../firebase';
import {
    EMAIL_CHANGED,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    SHOW_SPINNER
} from './types';

export const emailChanged = text => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
           type: SHOW_SPINNER
        }); // going to be dispatched as soon as it hits loginUser for showing Spinner
        // will try to login first
        Firebase.auth().signInWithEmailAndPassword(email, password)
            // if credentials exist, login
            .then(user => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                })
            })
            // if new user, sign up
            .catch(() => {
                // sign up method is called
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                    // if user created, success
                    .then(user =>
                        dispatch({
                            type: LOGIN_USER_SUCCESS,
                            payload: user
                        })
                    )
                    // if user already exist and tried to create again, error.
                    .catch(() =>
                        dispatch({
                            type: LOGIN_USER_FAIL
                        })
                    );
            });
    };
};

//TODO - if you get lost in this limbo of Redux ***
// open `/src/WHATTHEHELLISGOINGON.png` ***
