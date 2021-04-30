import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    other: 'Seja bem vindo'
}

function reducer(state, action) {
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [tamanho, setTamanho] = useState( );
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
            <span className="text">{state.number}</span>
                <span className="text">{state.other}</span>
            <div>
                <button className="btn" onClick={()=>dispatch({type:'add2'})}>+2</button>
                <button className="btn" onClick={()=>dispatch({type:'login',other:'Gustavo'})}>Login</button>
                <button className="btn" onClick={()=>dispatch({type:'multi'})}>x7</button>
                <button className="btn" onClick={()=>dispatch({type:'diviser'})}>/25</button>
                <button className="btn" onClick={()=>dispatch({type:'parser'})}>to int</button>
                <button className="btn" onClick={()=>dispatch({type:'setNum',number:tamanho})}>Ok</button>
                </div>
                <input type="number" className="input" value={tamanho} onChange={e=>setTamanho(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseReducer
