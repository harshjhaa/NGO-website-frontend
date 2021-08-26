import { combineReducers } from "redux";
import thfFellowshipReducer from "../../components/the_fellowship/ThfFellowship.Reducer";
import contactUsReducer from "../../components/get_involved/contact/ContactUs.Reducer";

export default combineReducers({
  thfFellowshipReducer,
  contactUsReducer,
});
