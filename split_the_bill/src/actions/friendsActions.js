// import axios from "axios";

// export const FETCH_FRIENDS = "FETCHING";
// export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
// export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

// export const ADD_FRIEND_START = "ADD_FRIEND_START";
// export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
// export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

// export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
// export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
// export const UPDATE_FRIEND_FAILURE = "UPDATE_FETCH_FAILURE";

// export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
// export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
// export const DELETE_FRIEND_FAILURE = "DELETE_FETCH_FAILURE";

// export const fetchFriends = () => dispatch => {
//   dispatch({ type: FETCH_FRIENDS });
//   axios
//     .get("")
//     .then(res => {
//       dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err });
//     });
// };

// export const addFriend = friend => dispatch => {
//   dispatch({ type: ADD_FRIEND_START });
//   axios
//     .post("", friend)
//     .then(res => {
//       dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
//     });
// };

// export const updateFriend = (data, id) => dispatch => {
//   dispatch({ type: UPDATE_FRIEND_START });
//   axios
//     .put(`/${id}`, data)
//     .then(res => {
//       dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err });
//     });
// };

// export const deleteFriend = id => dispatch => {
//   dispatch({ type: DELETE_FRIEND_START });
//   axios
//     .delete(`/${id}`)
//     .then(res => {
//       dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: DELETE_FRIEND_FAILURE, payload: err });
//     });
// };
