import { LOGIN_USER, SIGNOUT_USER, SIGNUP_USER } from "./actionTypes";

export const loginuser = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const signOutUser = () => {
  return {
    type: SIGNOUT_USER,
  };
};

export const signInUser = (email, password) => (dispatch) => {
  console.log(email, password);
};

export const signUpUser = (name, email, password) => (dispatch) => {};

export const logOutUser = () => (dispatch) => {
  dispatch(signOutUser());
};
