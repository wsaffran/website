import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
