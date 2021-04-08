import React from 'react';
import './TabelaProdutos.css';
import produtos from '../../data/produtos';


export default props => {
    const prod = produtos.map(produto => {
        return <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.name}</td>
            <td>{produto.price}</td>
        </tr>
    })
    return (
        <div>
            <table> 
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço R$</th>
                </tr>
                    {prod}
            </table>
        </div>
    );
}