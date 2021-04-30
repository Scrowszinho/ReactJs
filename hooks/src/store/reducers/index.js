export function reducer(state, action) {
    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 }
            break;
        case 'login':
            return {...state, other:action.other}
        break;
        case 'multi':
            return {...state, number: state.number * 7}
            break;
        case 'diviser':
            return {...state, number:state.number/25}
        break;
        case 'parser':
            return {...state, number: parseInt(state.number)}
        break;
        case 'setNum':
            return {...state, number: action.number}
        break;
        default:
            return state
            break;
    }
}