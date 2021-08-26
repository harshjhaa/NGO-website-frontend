import {
  JOIN_FORM_ADD_SUCCESS,
  JOIN_FORM_FAILURE,
  JOIN_FORM_SET_INITIAL_STATE,
} from "./ThfFellowship.Constant";

const initialState = {
  addDataResponse: {},
};

const thfFellowshipReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case JOIN_FORM_ADD_SUCCESS:
      return {
        ...state,
        addDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case JOIN_FORM_FAILURE:
      return {
        ...state,
        addDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case JOIN_FORM_SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default thfFellowshipReducer;
