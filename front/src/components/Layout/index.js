import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './Capszinga_logo.png';
import Caps from '../Caps'

class Layout extends Component {
  render() {
    return (
      <div>
        <section class="hero is-light is-medium">

          <div class="hero-head">
            <nav className="level">
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/signin'>Sign In</Link></a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/signup'>Sign Up</Link></a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/'>Home</Link></a>
              </p>

              <p className="level-item has-text-centered">
                <img src={logo} alt="logo" />
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/gallery'>Gallery</Link></a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/upload'>Upload</Link></a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info"><Link to='/profile'>Profile</Link></a>
              </p>
            </nav>
          </div>
        </section>

        <section class="hero is-dark is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              {this.props.children}
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default Layout;
