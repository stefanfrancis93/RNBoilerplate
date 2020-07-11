import authReducer, { initialState as authState } from "@Store/auth/reducer";
import { combineReducers } from "redux";

export const initialState = {
  auth: authState,
};

export default combineReducers({
  auth: authReducer,
});
