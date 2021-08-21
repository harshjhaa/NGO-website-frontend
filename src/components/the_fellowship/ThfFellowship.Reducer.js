import {
  ADD_DATA_SUCCESS,
  FAILURE,
  SET_INITIAL_STATE,
} from "./ThfFellowship.Constant";

const initialState = {
  addDataResponse: {},
};

const thfFellowshipReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        addDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case FAILURE:
      return {
        ...state,
        addDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default thfFellowshipReducer;
