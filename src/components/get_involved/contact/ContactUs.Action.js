import axios from "axios";
import {
  WRITE_TO_US_ADD_SUCCESS,
  WRITE_TO_US_FAILURE,
  WRITE_TO_US_SET_INITIAL_STATE,
} from "../../assets/constants/Constant";

const axiosInstansce = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PROD,
  headers: {
    "Content-Type": "application/json",
  },
});

const writeToUsFormDataAddSuccess = (res) => ({
  type: WRITE_TO_US_ADD_SUCCESS,
  payload: res,
});

const writeToUsFormDataAddFailure = (errorCode) => ({
  type: WRITE_TO_US_FAILURE,
  payload: errorCode,
});

const setInitState = (dispatch) => {
  dispatch({
    type: WRITE_TO_US_SET_INITIAL_STATE,
  });
};

const addData = (
  { name, email, mobile_no, query_type, query_message, preffered_time },
  dispatch
) => {
  const body = JSON.stringify({
    name,
    email,
    mobile_no,
    query_type,
    query_message,
    preffered_time,
  });

  const failedResData = {
    data: {
      success: 0,
      message: "Operation Failed: Please Try Again Later",
    },
  };

  axiosInstansce
    .post("/api/write-to-us", body)
    .then((res) => {
      if (res.data.success === 0) {
        console.log("Database Error: ", res.data.message);
        dispatch(writeToUsFormDataAddFailure(res));
      } else if (res.data.success === 1) {
        console.log("Data Save Success: ", res.data.message);
        dispatch(writeToUsFormDataAddSuccess(res));
      } else {
        dispatch(writeToUsFormDataAddFailure(failedResData));
      }
    })
    .catch((err) => {
      console.log("Data Save Failed: ", err);
      dispatch(writeToUsFormDataAddFailure(failedResData));
    });
};

export const writeToUsFormDataAdd = (value) => (dispatch) => {
  addData(value, dispatch);
};

export const setInitialState = () => (dispatch) => {
  setInitState(dispatch);
};
