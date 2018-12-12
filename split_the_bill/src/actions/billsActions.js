import axios from "axios";

export const FETCHING_BILLS = "FETCHING";
export const FETCH_BILLS_SUCCESS = "FETCH_BILLS_SUCCESS";
export const FETCH_BILLS_FAIL = "FETCH_BILLS_FAIL";

// export const ADD_BILL_START = "ADD_BILL_START";
// export const ADD_BILL_SUCCESS = "ADD_BILL_SUCCESS";
// export const ADD_BILL_FAIL = "ADD_BILL_FAIL";

export const fetchBILLs = () => dispatch => {
  dispatch({ type: FETCHING_BILLS });
  console.log("fetching bills");
  axios
    .get("https://split-the-bill-backend.herokuapp.com/bills")
    .then(res => {
      console.log("res", res);
      dispatch({ type: FETCH_BILLS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_BILLS_FAIL, payload: err });
    });
};

// export const addBILL = () => dispatch => {
//   dispatch({ type: ADD_BILL_START });
//   axios
//     .post("https://split-the-bill-backend.herokuapp.com/bills", BILL)
//     .then(res => {
//       dispatch({ type: ADD_BILL_SUCCESS, payload: res.data });
//     })
//     .catch(err => {
//       dispatch({ type: ADD_BILL_FAIL, payload: err });
//     });
// };
