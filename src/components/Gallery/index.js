import React from 'react';
import Caps from '../Caps';
import DataJSON from '../../caps.json';

class Gallery extends React.Component {

  constructor() {
    super();
    this.state = { caps: [] };
  }

  _fetchData() {
    let allCaps = DataJSON;
    this.setState ({ caps: allCaps})
    console.log(allCaps);
  }

  _getCaps() {
    return this.state.caps.map( aCap => {
      return (
        <Caps picture={aCap.pathcaps} title={aCap.movie} />
      )
    })
  };

  componentWillMount() {
    this._fetchData();
  }

  render() {
    return (
      <div>
        <h1>Gallery</h1>
        {this._getCaps()}
      </div>
    )
  }


}

export default Gallery;
