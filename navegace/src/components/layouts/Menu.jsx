import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
const Menu = props =>{
 return(
 <aside className='Menu'>
    <nav>
       <ul>
          <li><Link to='/'>Inicio</Link></li>
       </ul>
    </nav>
    </aside>
 )
}

export default Menu;