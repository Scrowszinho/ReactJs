import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
    const context = useContext(DataContext);
    function setNum(n) {
        context.setState({
            ...context.state,
            number: context.state.number + n
        })
    }

    const { number, setNumber, text, setText } = useContext(AppContext);
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>
            </div>
            <div>
                <button className="btn" onClick={() => setNum(+1)}>+1</button>
                <button className="btn" onClick={() => setNum(-1)}>-1</button>
            </div>
            <div className="center">
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>
                        -1
                </button>
                <button className="btn" onClick={() => setNumber(number + 1)}>
                        +1
                </button>
                </div>
                <span className="text">{text}</span>
                <button className="btn" onClick={()=>setText('Texto teste')}>Trocar texto</button>
            </div>
        </div>
    )
}

export default UseContext
