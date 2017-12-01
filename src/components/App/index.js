import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Caps from '../Caps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Caps</h1>
        </header>
        <p className="App-intro">
          <Caps key='id' picture='img' like='true or false' favourite='true or false'/>
        </p>
      </div>
    );
  }
}

export default App;
