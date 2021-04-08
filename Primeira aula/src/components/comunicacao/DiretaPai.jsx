import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props =>{
    return(
        <div>
            <DiretaFilho texto='Teste ' numero={1} ></DiretaFilho>
            <DiretaFilho texto='Teste ' numero={2} ></DiretaFilho>

        </div>
    );
}