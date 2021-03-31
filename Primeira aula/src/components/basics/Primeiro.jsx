import React from 'react';
export default function Primeiro(props){
    return (
        <div>
        <h2>Retorno</h2>
        <p>Teste</p>
        <h1>{props.primeiro > props.segundo ? props.primeiro : props.segundo}</h1>
        <h2>{props.primeiro < props.segundo ? props.primeiro : props.segundo}</h2>
        </div>
    );
}