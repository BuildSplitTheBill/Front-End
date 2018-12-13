import {
  FETCHING_BILLS,
  FETCH_BILLS_SUCCESS,
  FETCH_BILLS_FAIL,
  ADD_BILL_START,
  ADD_BILL_SUCCESS,
  ADD_BILL_FAIL
} from "../actions/billsActions";

const initialState = {
  bills: [],
  isFetchingBills: false,
  isAddingBill: false,
  error: null
};

const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch BILLs

    case FETCHING_BILLS:
      return {
        ...state,
        isFetchingBills: true,
        error: null
      };

    case FETCH_BILLS_SUCCESS:
      return {
        ...state,
        isFetchingBills: false,
        error: null,
        bills: action.payload
      };

    case FETCH_BILLS_FAIL:
      return {
        ...state,
        isFetchingBills: false,
        error: action.payload
      };

    // Add bills

    case ADD_BILL_START:
      return {
        ...state,
        isAddingBill: true,
        error: null
      };

    case ADD_BILL_SUCCESS:
      return {
        ...state,
        isAddingBill: false,
        error: null,
        bills: [...state.bills, action.payload]
      };

    case ADD_BILL_FAIL:
      return {
        ...state,
        isAddingBill: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default billsReducer;
