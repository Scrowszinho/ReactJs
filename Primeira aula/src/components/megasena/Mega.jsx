import React, {useState} from 'react';
import numero from './numeros';

export default props =>{
    const[num,setNum] = useState(0);
  
    const handleClicker = () =>{
       numero(num-1);
    }
    return(
        <div>
        <h2>Megasena</h2>
        <h3></h3>
        <input value={num} onChange={t=>setNum(t.target.value)} type='number'/>
        <button onClick={handleClicker}>Gerar números</button>
        </div>
    );
}