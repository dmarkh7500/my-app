import { SWITCH_OPTION } from "./types"

const initialState = {
    options: ['Запущено', 
    'Остановлено',
     'Недоступно']
}




export const condition = (state = initialState, action) => {
    switch(action.type){
        case SWITCH_OPTION:
            return {...state, options: state.options.concat(action.payload)}


    default: return state
    }
    
}