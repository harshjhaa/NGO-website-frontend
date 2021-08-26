import axios from "axios";
import {
  JOIN_FORM_ADD_SUCCESS,
  JOIN_FORM_FAILURE,
  JOIN_FORM_SET_INITIAL_STATE,
} from "./ThfFellowship.Constant";

const axiosInstansce = axios.create({
  baseURL: process.env.REACT_APP_API_URL_PROD,
  headers: {
    "Content-Type": "application/json",
  },
});

const joinUfFormAddDataSuccess = (res) => ({
  type: JOIN_FORM_ADD_SUCCESS,
  payload: res,
});

const joinUsFormAddDataFailure = (errorCode) => ({
  type: JOIN_FORM_FAILURE,
  payload: errorCode,
});

const setInitState = (dispatch) => {
  dispatch({
    type: JOIN_FORM_SET_INITIAL_STATE,
  });
};

const addData = (
  {
    name,
    email,
    mobile_no,
    city,
    state,
    area_of_intrest,
    skill,
    availability,
    serve_as,
  },
  dispatch
) => {
  const body = JSON.stringify({
    name,
    email,
    mobile_no,
    city,
    state,
    area_of_intrest,
    skill,
    availability,
    serve_as,
  });

  const failedResData = {
    data: {
      success: 0,
      message: "Operation Failed",
    },
  };

  axiosInstansce
    .post("/api/join-us", body)
    .then((res) => {
      if (res.data.success === 0) {
        console.log("Database Error: ", res.data);
        dispatch(joinUsFormAddDataFailure(res));
      } else if (res.data.success === 1) {
        console.log("Data Save Success: ", res.data);
        dispatch(joinUfFormAddDataSuccess(res));
      } else {
        dispatch(joinUsFormAddDataFailure(failedResData));
      }
    })
    .catch((err) => {
      console.log("Data Save Failed: ", err);
      dispatch(joinUsFormAddDataFailure(failedResData));
    });
};

export const joinFormDataAdd = (value) => (dispatch) => {
  addData(value, dispatch);
};

export const setInitialState = () => (dispatch) => {
  setInitState(dispatch);
};
