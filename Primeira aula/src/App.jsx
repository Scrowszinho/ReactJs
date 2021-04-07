import React from 'react';
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro';
import CoresParametro from './components/basics/CoresParametro';
import Card from './components/layouts/Card';
import './App.css';
import Familia from './components/basics/Familia';
import Cor from './components/basics/Cor';
import Membro from './components/basics/Membro';
import ListaAluno from './components/repeticao/ListaAluno';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
var cor = Cor();

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

                <Card titulo={'#03 - Cores com Parametro'} color={cor}>
                    <CoresParametro color={cor}></CoresParametro>
                </Card>
                <Card titulo={'#04 - Compoentes Filhos'} color={'#800080'} >
                   <Familia  sobrenome={'Godoy'}>
                    <Membro nome={'Luis Gustavo'}/>
                    <Membro nome={'Ricardo'} />
                    <Membro nome={'João Pedro'} />
                    </Familia>
                </Card>
                <Card titulo={'#04 Repetição - Lista de Alunos'} color={Cor()}>
                   <ListaAluno></ListaAluno>
                </Card>
                <Card titulo={'#04.1 Repetição - Lista de Produtos'} color={Cor()}>
                   <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo={'#05 - Condicional'} color={Cor()}>
                   <ParOuImpar num={20}></ParOuImpar>
                </Card>
            </div>
        </div>
    );
}