import React, { Component } from 'react';
import './App.css';
import Head from './Head'
import Timeline from '../containers/Timeline'
import Portfolio from './Portfolio'
import Home from './Home'

import Navigation from '../containers/Navigation'

import {Route} from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route path="/home" render={() => <Home/>}/>
        <Route path="/portfolio" render={() => <Portfolio/>}/>
        <Route path="/timeline" render={() => <Timeline/>}/>

      </div>
    );
  }
}

export default App;
