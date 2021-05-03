import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import {useConter} from '../../hooks/useCustom';
import {useFetch} from '../../hooks/useFatch';
const UseRef = (props) => {
    const [count, inc, dec] = useConter();
    const url = 'http://files.cod3r.com.br/curso-react/estados.json';
    const response = useFetch(url);

    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title='Custom hook' />
            <span className="text">{count}</span>
            <div>
                <button className="btn" onClick={()=>inc()}>+1</button>
                <button className="btn" onClick={()=>dec()}>-1</button>
            </div>
            <SectionTitle title='Exer 2' />
            <div>
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
