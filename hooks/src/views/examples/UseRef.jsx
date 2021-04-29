import React,{useState, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
    const[text, setText] = useState('');
    const count = useRef(0);
    count.current ++;
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Exer #01' />
            <div className="center">
                <input type="text" className="input" value={text} onChange={e=>setText(e.target.value)} />
               <div>
                <span className="text">Valor: </span>
                <span className="text">{text}</span>
                <span className="text red">[{count.current}]</span>
                </div>
            </div>
        </div>
    )
}

export default UseRef
