import React from 'react';
import Main from './pages/Main'
import Add from './pages/Add'
import Update from './pages/Update'
import Footer from './components/Footer'
import Spacer from './components/Spacer'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={['/','/Main']}>
            <Main />
          </Route>
          <Route path='/Add'>
            <Add />
          </Route>
          <Route path='/Update/:id' exact component={Update}>
            <Update />
          </Route>
        </Switch>
        
      </div>
      <Spacer />
      <Footer />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
