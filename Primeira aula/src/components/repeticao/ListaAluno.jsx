import React from 'react';
import  alunos from '../../data/aluno';
export default props => {
    const lis = alunos.map(aluno =>{
        return <li key={aluno.id}>
            {aluno.id} - <strong>{aluno.name}</strong> : {aluno.nota}
        </li>
    })
    return(
        <div>
            <ul style={{listStyle:'none'}}>
                {lis}
            </ul>
        </div>
    );
}