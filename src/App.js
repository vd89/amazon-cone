/** @format */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
