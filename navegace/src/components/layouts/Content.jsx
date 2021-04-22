import React from 'react';
import './Content.css';
import {
   Route,
   Switch
} from 'react-router-dom';


import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
const Content = props => {
   return (
      <main className='Content'>
         <Switch>

            <Route exact path='/'>
               <Home />
            </Route>

            <Route path='*'>
               <NotFound />
            </Route>


         </Switch>
      </main>
   )
}

export default Content;