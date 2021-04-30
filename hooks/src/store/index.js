import {reducer} from './reducers';
import {add2} from './actions/add2';
const initialState = {
    number: 0,
    other: 'Seja bem vindo'
}

export {
    reducer,    
    initialState,
    add2
}