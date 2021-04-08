import React,{useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props =>{
   const[nome,setNome] = useState('?');
   const[numero,setNumero] = useState(0);
    const fornecerInfo = (nome, numero) =>{
        console.log(nome,numero);
        setNome(nome);
        setNumero(numero);
    }
    return(
        <div>
            <span>{nome}</span>
            <span>{numero}</span>
            <IndiretaFilho onClick={fornecerInfo}></IndiretaFilho>
        </div>
    );
}