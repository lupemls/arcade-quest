import React from 'react';
import Main from './pages/Main'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Main />
      </BrowserRouter>  
  );
}

export default App;
