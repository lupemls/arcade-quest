import React from 'react';
import Main from './pages/Main'
import Add from './pages/Add'
import Update from './pages/Update'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={['/','/Main']}>
            <Main />
          </Route>
          <Route path='/Add'>
            <Add />
          </Route>
          <Route path='/Update'>
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
