import React from 'react';
import Main from './pages/Main'
import Add from './pages/Add'
import Update from './pages/Update'
import SignUp from './pages/SignUp';
import Login from './pages/Login';



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
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/SignUp'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
