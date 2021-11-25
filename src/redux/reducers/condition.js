import { SWITCH_OPTION } from "./types"
const initialState = 
    ['Запущено', 
    'Остановлено',
     'Недоступно']


     console.log(3);


export const condition = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SWITCH_OPTION:
        console.log(4);
            return {...state,
                    action};
                    
            
            default: return state

            }
        }
           
    
