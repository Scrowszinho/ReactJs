import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';
import Card from './components/layouts/Card';


export default () => {
    return (
        <div id='app'>
            <Card titulo={'Teste'}>
                <Primeiro primeiro={Math.random() * (100 - 0) + 0} segundo={Math.random() * (100 - 0) + 0}></Primeiro>
            </Card>
            <Card titulo={'Teste'}>
                <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
            </Card>

        </div>
    );
}