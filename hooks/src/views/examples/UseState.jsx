import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
const UseState = (props) => {

    const [x,setX] = useState(0);
    const [text,setText] = useState("");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
        <SectionTitle title='Exercício #01' />
        <span className="text">{x}</span>
        <div>
        <button className="btn" onClick={()=> setX(x +1)}>+1</button>
        <button className="btn" onClick={()=> setX(x -1)}>-1</button>

        </div>
        <SectionTitle title='Exercício #02' />
            <input type="text" value={text} onChange={e=>setText(e.target.value)} className="input"/>
        </div>
    )
}

export default UseState
