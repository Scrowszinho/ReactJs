import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';
import Card from './components/layouts/Card';
import './App.css';

export default () => {
    return (
        <div className='App'>
            <h1>Fundamentos</h1>
            <div className='Cards'>
            <Card titulo={'#01 - Números maiores'}>
                <Primeiro primeiro={(Math.random() * (100 - 0) + 0).toFixed()} segundo={(Math.random() * (100 - 0) + 0).toFixed()}></Primeiro>
            </Card>
            <Card titulo={'#02 - Com Parametro'}>
                <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
            </Card>
            </div>
        </div>
    );
}