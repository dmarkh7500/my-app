import { combineReducers } from "redux";
import { condition } from "./condition";
import { operation } from "./operation";
import { checkbox } from "./checkbox";

export const rootReducer = combineReducers({
     condition, operation, checkbox}
)
