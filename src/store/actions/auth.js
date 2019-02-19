import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBE0h-j7e6EoKPAS5SuqnbTvJCqJwgNDgE'

    if (!isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBE0h-j7e6EoKPAS5SuqnbTvJCqJwgNDgE'
    }

    axios
      .post(
        url,
        authData
      )
      .then(resp => {
        console.log(resp);
        dispatch(authSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
