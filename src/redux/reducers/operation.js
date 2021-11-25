import { SWITCH_OPTION } from "./types"
const initialState =
    ['Старт', 
    'Стоп',
    'Перезапуск']
    




export const operation = (state = initialState, action) => {
    
    switch(action.type){
        case SWITCH_OPTION:
            return {...state,
                options: [action.payload]}

    default: return state
}}