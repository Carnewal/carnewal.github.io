import React, { Component } from 'react';
import './App.css';
import Head from './Head'
import Timeline from './Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Timeline />
      </div>
    );
  }
}

export default App;
