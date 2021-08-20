import axios from "axios";

import { ADD_DATA_SUCCESS, FAILURE } from "./ThfFellowship.Constant";

const joinUfFormAddDataSuccess = (res) => ({
  type: ADD_DATA_SUCCESS,
  payload: res,
});

const joinUfFormAddDataFailure = (errorCode) => ({
  type: FAILURE,
  payload: errorCode,
});

export const addData = (
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
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
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
  axios
    .post("/api/join-us", body, config)
    .then((res) => {
      if (res) {
        console.log("Data Save Success");
        dispatch(joinUfFormAddDataSuccess(res));
      } else {
        console.log("Data Save Failedddd: ", res);
        dispatch(joinUfFormAddDataFailure("Failed:"));
      }
    })
    .catch((err) => {
      console.log("Data Save Failedd: ", err);
      dispatch(joinUfFormAddDataFailure("Failed"));
    });
};

export const joinFormDataAdd = (value) => (dispatch) => {
  addData(value, dispatch);
};
