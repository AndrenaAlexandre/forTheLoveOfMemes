import React from 'react';
import { Meme } from '../Meme/Meme';
import { Switch, Route } from 'react-router-dom';
import { MemeGenerated } from '../MemeGenerated/MemeGenerated';
import { MemesArchived } from '../MemeArchive/MemeArchive';
// import styles from './styles.module.css';

export const App = () => {
  return (
    <div className=''>
      <h1>Me(me)ntal (We)llness</h1>
        <Switch>
          <Route exact path='/'> 
            <Meme />
          </Route>
          <Route path='/generated'>
            <MemeGenerated />
          </Route>
          <Route path='/archive'>
            <MemesArchived />
          </Route>
        </Switch>
    </div>
  );
}
 // this code we import in switch and route so that I can switch between what is seen, (the original meme and the generated meme)
 // when the path changes from the original / to generated(what I set in the meme component) it will switch the route

