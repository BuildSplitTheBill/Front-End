import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SET_TOKEN_OPTIONS,
  INITIAL_STATE_FETCHED
} from "../actions/credentialsActions";

const initialState = {
  name: "",
  username: "",
  password: "",
  email: "",
  options: "",
  fetchingInitialState: true,
  loggingIn: false,
  loggedIn: false,
  loggingOut: false,
  logginFail: false,
  error: null
};

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Logging in

    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload,
        password: action.payload,
        loggingIn: false,
        loggedIn: true,
        error: null
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };

    // Registering

    case REGISTER_START:
      return {
        ...state,
        loggingIn: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        name: action.payload,
        username: action.payload,
        password: action.payload,
        email: action.payload,
        loggingIn: false,
        loggedIn: true,
        error: null
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };

    // Logging Out

    case LOGOUT_START:
      return {
        ...state,
        loggingOut: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        loggedIn: false,
        error: null
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        error: action.payload
      };

    case SET_TOKEN_OPTIONS:
      return {
        ...state,
        options: action.payload
      };

    case INITIAL_STATE_FETCHED:
      return {
        ...state,
        fetchingInitialState: false
      };

    default:
      return state;
  }
};

export default credentialsReducer;
