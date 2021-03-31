import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';

export default () => {
    return (
        <div id='app'>
            <Primeiro primeiro={Math.random() * (100 - 0) + 0} segundo={Math.random() * (100 - 0) + 0}></Primeiro>
            <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
        </div>
    );
}