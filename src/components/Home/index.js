import React from 'react';
import Caps from '../Caps';
import DataJSON from '../../caps.json';

class Home extends React.Component {

  render() {
    let randomCaps = DataJSON[Math.floor(Math.random() * DataJSON.length)];
    return (
      <div>
        <Caps picture={randomCaps.pathcaps} title={randomCaps.movie}/>
      </div>
    )
  }
}

export default Home;
