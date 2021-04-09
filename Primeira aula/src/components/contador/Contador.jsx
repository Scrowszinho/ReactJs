import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        numero: this.props.numIni || 0,
        passo: this.props.passoIni || 5
    }

    inc = () =>{
        this.setState({
            numero: this.state.numero + 1,
        });
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - 1,
        });
    }

    setPasso = (evento) =>{
        this.setState({
            passo: +evento.target.value
        });
    }

    incPass = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
                <input id='passoInput' type='number' value={this.state.passo} onChange={this.setPasso}/>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <button onClick={this.incPass}>+Passo</button>

            </div>
        );
    }
}