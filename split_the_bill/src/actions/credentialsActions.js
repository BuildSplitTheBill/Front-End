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

export const userLogin = data => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log("Login start");
  axios
    .post("https://split-the-bill-backend.herokuapp.com/login", data)
    .then(res => {
      console.log("then", res);
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
  axios
    .post("https://split-the-bill-backend.herokuapp.com/logout")
    .then(res => dispatch({ type: LOGOUT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGOUT_FAIL, payload: err }));
};
