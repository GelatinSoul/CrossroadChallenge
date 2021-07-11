import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Landing from './components/home/Landing';
import TitleDetails from './components/home/TitleDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

import store from './store';


function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Route exact path="/" component = {Landing}/>
          <Route exact path="/title/:id" component = {TitleDetails}/>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
