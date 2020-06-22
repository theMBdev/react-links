import React from 'react';
import './App.css';

import { Nav } from './components/Nav';
import { LinkHome } from './components/Link';
import { CreateLink } from './components/CreateLink';
import { EditLink } from './components/EditLink';


import { GlobalProvider } from './context/GlobalState';

import {BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>

    <GlobalProvider>
    <div className="app">
    
    < Nav />
    <Switch>
      <Route path="/" exact component={LinkHome}/>
      <Route path="/create" exact component={CreateLink}/>
      <Route path="/editlink/:id" exact component={EditLink}/>
    </Switch>

    </div>
    </GlobalProvider>

</BrowserRouter>
  );
}

export default App;
