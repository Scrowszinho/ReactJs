import React from 'react';
import If from './if';
export default props => {
    return (
        <div>
            <If test={props.usuario.nome && props.usuario}>
                Olá, <strong>{props.usuario.nome}</strong>
            </If>
            <If test={!props.usuario.nome || !props.usuario}>
                Olá, <strong>Anonimo</strong>
            </If>
        </div>
    );
}