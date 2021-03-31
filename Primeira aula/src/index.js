import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';

const el = document.getElementById('root');
ReactDOM.render(
    <div>
       <Primeiro></Primeiro>
       <ComParametro titulo={'Titulo'} subtitulo={'Subtitulo'}></ComParametro>
    </div>
    , el);