import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";

export const fetchFriends = () => (dispatch, getState) => {
  const state = getState();
  const options = state.credentialsReducer.options;

  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get("https://split-the-bill-backend.herokuapp.com/friends", options)
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FRIENDS_FAIL, payload: err });
    });
};

export const addFriend = id => (dispatch, getState) => {
  const state = getState();
  const options = state.credentialsReducer.options;

  dispatch({ type: ADD_FRIEND_START });
  axios
    .post(
      `https://split-the-bill-backend.herokuapp.com/friends/${id}`,
      {},
      options
    )
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAIL, payload: err });
    });
};
