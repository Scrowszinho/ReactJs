import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';
import CoresParametro from './components/basics/CoresParametro';
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
            <Card titulo={'#02 - Com Parametro'} color={'#008'}>
                <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
            </Card>

            <Card titulo={'#03 - Cores com Parametro'}  color={'#0F0'}>
                <CoresParametro color={'#0F0'}></CoresParametro>
            </Card>
            </div>
        </div>
    );
}