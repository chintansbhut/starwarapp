import { combineReducers } from "redux";
import authReducer from "./loginReducer";
import swapReducer from "./swapReducer";

export default combineReducers({
  auth: authReducer,
  swapData: swapReducer
});
