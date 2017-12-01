import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Caps from '../Caps'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Caps</h1>
          <div className="App">
              <Link to='/signin'>SignIn</Link>
              &nbsp; &nbsp;
              <Link to='/signup'>SignUp</Link>
              &nbsp; &nbsp;
              <Link to='/'>Home</Link>
              &nbsp; &nbsp;
              <Link to='/gallery'>Gallery</Link>
              &nbsp; &nbsp;
              <Link to='/upload'>Upload</Link>
              &nbsp; &nbsp;
              <Link to='/profile'>Profile</Link>
          </div>
        </header>

          {this.props.children}

      </div>
    );
  }
}

export default Layout;
