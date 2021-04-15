import React from 'react';
import './App.css';
import Menu from '../components/layouts/Menu';
import Content from '../components/layouts/Content';

const App = props =>{
 return(
 <div className='App'>
    <Menu />
    <Content />
    </div>
 )
}

export default App;