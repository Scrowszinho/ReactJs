import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState, reducer} from '../../store';
import {add2,multi} from '../../store/actions/';
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
                <button className="btn" onClick={()=>add2(dispatch)}>+2</button>
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
