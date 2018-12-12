import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchHomePageData = data => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(data)
    .then(res => dispatch({ type: FETCH_DATA_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: FETCH_DATA_FAIL, payload: err }));
};
