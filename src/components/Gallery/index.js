import React from 'react';
import Caps from '../Caps';
import Axios from 'axios';
// import DataJSON from '../../caps.json';

class Gallery extends React.Component {

  constructor() {
    super();
    this.state = { caps: [] };
  }

  _fetchData() {
    Axios.get('/screencaps/')
    .then((res) => {
      // console.log(res);
      this.setState({caps: res.data.caps});
    })
  }

  _getCaps() {
    return this.state.caps.map( aCap => {
      return (
        <Caps picture={aCap.path} title={aCap.movie.title} key={aCap.id}/>
      )
    })
  };

  componentDidMount() {
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
