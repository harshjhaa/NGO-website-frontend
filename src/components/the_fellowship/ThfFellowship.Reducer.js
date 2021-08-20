import { ADD_DATA_SUCCESS, FAILURE } from "./ThfFellowship.Constant";

const initialState = {
  addDataResponse: {},
};

const thfFellowshipReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        addDataResponse: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        addDataResponse: action.payload,
      };
    default:
      return state;
  }
};

export default thfFellowshipReducer;
