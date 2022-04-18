import { SWITCH_OPTION } from "./types"

const initialState = null



 


export const selectedCondition = (state = initialState, action) => {
switch(action.type){
    case SWITCH_OPTION:
        return action.payload

    default: 
        return state
}


        
    }
       

