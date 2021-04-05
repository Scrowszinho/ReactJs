import React from 'react';
import Membro from './Membro';

export default props =>{
    return(
        <div>
       <Membro nome={'Luis Gustavo'} sobrenome={'Godoy'}/>
       <Membro nome={'Ricardo'} sobrenome={props.sobrenome}/>
       <Membro nome={'João Pedro'} {...props}/>
       </div>
    );
}