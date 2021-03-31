import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';

export default () => {
    return (
        <div id='app'>
            <Primeiro></Primeiro>
            <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
        </div>
    );
}