import {
  FETCHING_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAIL
  //   ADD_FRIEND_START,
  //   ADD_FRIEND_SUCCESS,
  //   ADD_FRIEND_FAIL,
  //   DELETE_FRIEND_START,
  //   DELETE_FRIEND_SUCCESS,
  //   DELETE_FRIEND_FAIL
} from "../actions/friendsActions";

const initialState = {
  friends: [],
  isFetchingFriendsFriends: false,
  isAddingFriendFriend: false,
  isDeletingFriend: false,
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Friends

    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetchingFriends: true,
        error: null
      };

    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetchingFriends: false,
        error: null,
        friends: action.payload
      };

    case FETCH_FRIENDS_FAIL:
      return {
        ...state,
        isFetchingFriends: false,
        error: action.payload
      };

    // Add Friends

    // case ADD_FRIEND_START:
    //   return {
    //     ...state,
    //     isAddingFriend: true,
    //     error: null
    //   };

    // case ADD_FRIEND_SUCCESS:
    //   return {
    //     ...state,
    //     isAddingFriend: false,
    //     error: null,
    //     friends: [...state.friends, action.payload]
    //   };

    // case ADD_FRIEND_FAIL:
    //   return {
    //     ...state,
    //     isAddingFriend: false,
    //     error: action.payload
    //   };

    default:
      return state;
  }
};

export default friendsReducer;
