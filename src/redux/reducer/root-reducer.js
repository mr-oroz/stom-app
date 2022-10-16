import { combineReducers } from "redux";
import { AuthReducer } from "./auth-reducer";
import { globalReducer } from "./global-reducer";

export const rootReducer = combineReducers({
  AuthReducer,
  globalReducer
})