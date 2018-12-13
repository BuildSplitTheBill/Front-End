import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../actions/dataActions";

const initialState = {
  balancesData: [],
  isFetchingData: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        balancesData: action.payload,
        isFetchingData: false,
        error: null
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
