import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

// export const ADD_FRIEND_START = "ADD_FRIEND_START";
// export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
// export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";

// export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
// export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
// export const DELETE_FRIEND_FAIL = "DELETE_FETCH_FAIL";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  console.log("fetching friends");
  axios
    .get("https://split-the-bill-backend.herokuapp.com/friends")
    .then(res => {
      console.log("res", res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FRIENDS_FAIL, payload: err });
    });
};

// export const addFriend = friend => dispatch => {
//   dispatch({ type: ADD_FRIEND_START });
//   axios
//     .post("https://split-the-bill-backend.herokuapp.com/friends", friend)
//     .then(res => {
//       dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: ADD_FRIEND_FAIL, payload: err });
//     });
// };

// export const deleteFriend = id => dispatch => {
//   dispatch({ type: DELETE_FRIEND_START });
//   axios
//     .delete(`https://split-the-bill-backend.herokuapp.com/friends/${id}`)
//     .then(res => {
//       dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: DELETE_FRIEND_FAIL, payload: err });
//     });
// };
