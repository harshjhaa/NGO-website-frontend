import axios from "axios";

import { ADD_DATA_SUCCESS, FAILURE } from "./ThfFellowship.Constant";

const joinUfFormAddDataSuccess = (res) => ({
  type: ADD_DATA_SUCCESS,
  payload: res,
});

const joinUsFormAddDataFailure = (errorCode) => ({
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
      if (res.data.success === 0) {
        // console.log("Database Error: ", res.data.message);
        dispatch(joinUsFormAddDataFailure(res));
      } else if (res.data.success === 1) {
        // console.log("Data Save Success: ", res.data.message);
        dispatch(joinUfFormAddDataSuccess(res));
      }
    })
    .catch((err) => {
      // console.log("Data Save Failed: ", err);
      dispatch(joinUsFormAddDataFailure("Failed"));
    });
};

export const joinFormDataAdd = (value) => (dispatch) => {
  addData(value, dispatch);
};
