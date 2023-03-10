import app from "../../firbase/firebase";
import {
  ADD_CONTENT,
  ADD_TAG_FILTER,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT_SUCCESS,
  GET_UPDATE_CONTENT,
  LAST_UPLOAD,
  LOGIN_USER,
  REMOVE_FROM_HISTORY,
  REMOVE_TAG_FILTER,
  SEARCH_CONTENT,
  SET_LOADING,
  SIGNOUT_USER,
  SIGNUP_USER,
  UPDATE_CONTENT,
} from "./actionTypes";

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

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

export const signInUser =
  (email, password, setSuccess, setError) => (dispatch) => {
    dispatch(setLoading(true));
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("login user", user);
        setSuccess(true);
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    // console.log(email, password);
  };

export const signUpUser =
  (name, email, password, setSuccess, setError) => (dispatch) => {
    dispatch(setLoading(true));
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        app
          .auth()
          .currentUser.updateProfile({
            displayName: name,
          })
          .then(() => {
            const currentUser = app.auth().currentUser;
            // console.log('current user', currentUser);
            dispatch(
              loginuser({
                uid: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
                photo: currentUser.photoURL,
              })
            );
            setSuccess(true);
            dispatch(setLoading(false));
          });
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
    // console.log("sign up uder", name, email, password);
  };

export const logOutUser = () => (dispatch) => {
  dispatch(signOutUser());
};

//content action

export const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

export const removeContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updateData = (id, newData) => ({
  type: UPDATE_CONTENT,
  payload: {
     id,
      newData },
});

export const lasUploadContent = (item) => {
   console.log(item);
  return {
    type: LAST_UPLOAD,
    payload: item,
  };
};

export const addToHistory = (url) => {
  return {
    type: ADD_TO_HISTORY,
    payload: url,
  };
};

export const removeFromHistory = (url) => {
  return {
     type: REMOVE_FROM_HISTORY, 
     payload: url 
    };
};


export const getUpdatedata =(data)=>{
         return {
          type: GET_UPDATE_CONTENT,
          payload: data
         }
}


export const searchContent = (querydata) =>{

  return {
      type: SEARCH_CONTENT,
      payload: querydata
  }
}