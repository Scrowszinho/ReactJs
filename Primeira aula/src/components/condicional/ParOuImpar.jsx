import React from 'react';

export default props => {
    return (
        <div>
            {props.num % 2 === 0 ?
                <span>Par</span> :
                <span>Impar</span>}
        </div>
    );
}