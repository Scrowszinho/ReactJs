import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
const Menu = props =>{
 return(
 <aside className='Menu'>
    <nav>
       <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/Param/1'>Param #01</Link></li>
          <li><Link to='/Param/2'>Param #02</Link></li>
          <li><Link to='/About'>Sobre</Link></li>
       </ul>
    </nav>
    </aside>
 )
}

export default Menu;