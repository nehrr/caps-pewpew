import React from 'react';
import Caps from '../Caps';
import DataJSON from '../../caps.json';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { caps: [] };
  }

  _RandomCaps() {
    let randomCaps = DataJSON[Math.floor(Math.random() * DataJSON.length)];
    this.setState ({ caps: randomCaps})
    console.log(randomCaps);
  }

  componentWillMount() {
    this._RandomCaps();
  }

  render() {
    return (
      <div>
        <img src={this.state.caps.pathcaps} />
        <h4>{this.state.caps.movie}</h4>
        <a>Share action</a>
        <a>Favourite action</a>
        <a>Like action</a>
      </div>
    )
  }
}

export default Home;
