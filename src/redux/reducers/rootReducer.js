import { combineReducers } from "redux";
import { conditionsDictionary } from "./conditionsDictionary";
import { operation } from "./operation";
import { checkbox } from "./checkbox";
import { selectedCondition} from './selectedCondition';

export const rootReducer = combineReducers({
     conditionsDictionary, operation, checkbox, selectedCondition}
)
