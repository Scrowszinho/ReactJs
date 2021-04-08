import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props =>{
    const nome = '?';
    const numero = 0;
    const fornecerInfo = (nome, numero) =>{
        console.log(nome,numero);
    }
    return(
        <div>
            <span>{nome} </span>
            <span>{numero}</span>
            <IndiretaFilho onClick={fornecerInfo}></IndiretaFilho>
        </div>
    );
}