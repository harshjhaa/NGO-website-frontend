import {
  WRITE_TO_US_ADD_SUCCESS,
  WRITE_TO_US_FAILURE,
  WRITE_TO_US_SET_INITIAL_STATE,
} from "../../assets/constants/Constant";

const initialState = {
  contactUsAddDataResponse: {},
};

const contactUsReducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case WRITE_TO_US_ADD_SUCCESS:
      return {
        ...state,
        contactUsAddDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case WRITE_TO_US_FAILURE:
      return {
        ...state,
        contactUsAddDataResponse: {
          success: action.payload.data.success,
          message: action.payload.data.message,
        },
      };
    case WRITE_TO_US_SET_INITIAL_STATE:
      return initialState;
    default:
      return state;
  }
};

export default contactUsReducer;
