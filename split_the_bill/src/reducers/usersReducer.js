import {
  FETCHING_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from "../actions/usersActions";

const initialState = {
  users: [],
  isFetchingUsers: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS:
      return {
        ...state,
        isFetchingUsers: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetchingUsers: false,
        error: null,
        users: action.payload
      };

    case FETCH_USERS_FAIL:
      return {
        ...state,
        isFetchingUsers: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
