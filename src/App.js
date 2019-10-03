import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { innerHeight } = window
    return (
      <div className="App" style={{height: `${innerHeight}px`}}>
        <h1> Something is coming... </h1>
      </div>
    );
  }
}

export default App;
