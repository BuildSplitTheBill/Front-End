import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchHomePageData = () => (dispatch, getState) => {
  const state = getState();
  const options = state.credentialsReducer.options;

  dispatch({ type: FETCH_DATA_START });
  axios
    .get("https://split-the-bill-backend.herokuapp.com/", options)
    .then(res => dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
};
