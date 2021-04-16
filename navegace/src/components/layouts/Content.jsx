import React from 'react';
import './Content.css';
import {
   Route,
   Switch
} from 'react-router-dom';

import About from '../../views/examples/About';
import Param from '../../views/examples/Param';
import Home from '../../views/examples/Home';

const Content = props => {
   return (
      <main className='Content'>
         <Switch>
            <Route path='/about'>
               <About />
            </Route>

            <Route path='/Param/:id'>
               <Param />
            </Route>

            <Route exact path='/'>
               <Home />
            </Route>

         </Switch>
      </main>
   )
}

export default Content;