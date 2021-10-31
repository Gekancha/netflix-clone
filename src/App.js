import React,{useEffect, useState} from 'react' ; 
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
  } from 'react-router-dom';
import Homescreen from './HomeScreen';
import Profile from './Profile';

function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homescreen/>
          </Route>
          <Route exact path="/Profile">
            <Profile/>
          </Route>
        </Switch>
      </Router>
      
  
      
    </div>
  );
}

export default App;
