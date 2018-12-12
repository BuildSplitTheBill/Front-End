import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from "../actions/dataAction";

const initialState = {
  amountUserIsOwed: null,
  amountUserOwes: null,
  balance: null,
  obligationsUserIsOwed: [],
  obligationsUserOwes: [],
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
        amountUserIsOwed: action.payload,
        amountUserOwes: action.payload,
        balance: action.payload,
        obligationsUserIsOwed: action.payload,
        obligationsUserOwes: action.payload,
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
