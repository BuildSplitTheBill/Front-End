import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const SET_TOKEN_OPTIONS = "SET_TOKEN_OPTIONS";
export const INITIAL_STATE_FETCHED = "INITIAL_STATE_FETCHED";

export const userLogin = data => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://split-the-bill-backend.herokuapp.com/login", data)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("error", err);
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const userRegistration = data => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post("https://split-the-bill-backend.herokuapp.com/register", data)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }));
};

export const userLogout = () => dispatch => {
  dispatch({ type: LOGOUT_START });

  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_SUCCESS });
  // set logged in to false
  // push logged out page to history

  // axios
  //   .post("https://split-the-bill-backend.herokuapp.com/logout")
  //   .then(res => dispatch({ type: LOGOUT_SUCCESS, payload: res.data }))
  //   .catch(err => dispatch({ type: LOGOUT_FAIL, payload: err }));
};

export const getToken = () => dispatch => {
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      Authorization: token
    }
  };

  dispatch({ type: SET_TOKEN_OPTIONS, payload: options });
};

export const setInitialStateFetched = () => ({
  type: INITIAL_STATE_FETCHED
});

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const options = state.credentialsActions.options;
};

export const setLoggedInToTrue = () => ({
  type: LOGIN_SUCCESS,
  payload: undefined
});
