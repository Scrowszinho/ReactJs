import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function fatorial(n){
    if(n<0) return -1
    if(n === 0) return 1
    return fatorial(n-1)*n
}

const UseEffect = (props) => {
    const [num, setNum] = useState(0);
    const [fat,setFat] = useState(1);
    const [tipo,setTipo] = useState('');
    useEffect(() =>{
    setFat(fatorial(num))
    },[num]);

    useEffect(()=>{
        if(num % 2 === 0){
            setTipo('Par');
        } else { setTipo('Impar')}
    },[num]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exer #01' />
            <div style={{fontSize:'50px'}}>
                <span>Fatorial: </span>
                <span style={{ color: 'red' }}>{fat}</span>
            </div>
            <input type="number" className="input" value={num} onChange={e => setNum(e.target.value)} />
            
            <SectionTitle title='Exer #02' />
            <div style={{fontSize:'50px'}}>
                <span>Número: </span>
                <span style={{ color: 'red' }}>{tipo}</span>
            </div>
        </div>
    )
}

export default UseEffect
