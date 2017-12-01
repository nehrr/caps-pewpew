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

  componentDidMount() {
    this._RandomCaps();
  }

  render() {
    return (
      <div>
        <Caps picture={this.state.caps.pathcaps} title={this.state.caps.movie}/>
      </div>
    )
  }
}

export default Home;
