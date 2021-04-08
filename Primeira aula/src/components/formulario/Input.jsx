import React, {useState} from 'react';
import './Input.css';

export default props =>{
    const[valor,setValor] = useState('');
    return(
        <div>
            <input value={valor} onChange={t => setValor(t.target.value)} />
            <input value={valor} readOnly />
        </div>
);
}