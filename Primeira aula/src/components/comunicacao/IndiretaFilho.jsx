import React from 'react';

export default props =>{
    return(
        <div>
          <h3>Filho</h3>
          <button onClick={() => props.onClick('João', 16)}>Fornecer informações</button>
        </div>
    );
}