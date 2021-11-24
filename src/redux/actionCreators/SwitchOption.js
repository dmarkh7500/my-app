import { SWITCH_OPTION } from "../reducers/types";

export function switchOption(options) {
    return{
        type: SWITCH_OPTION,
        payload: options
    }
}