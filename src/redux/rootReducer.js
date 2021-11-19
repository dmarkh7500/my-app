import { combineReducers } from "redux";
import { condition } from "./condition";
import { operation } from "./operation";

export const rootReducer = combineReducers({
     condition, operation}
)
