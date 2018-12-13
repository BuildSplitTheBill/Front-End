import axios from "axios";

export const FETCHING_USERS = "FETCHING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const fetchUsers = () => (dispatch, getState) => {
  const state = getState();
  const options = state.credentialsReducer.options;

  dispatch({ type: FETCHING_USERS });

  axios
    .get("https://split-the-bill-backend.herokuapp.com/users", options)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err });
    });
};
