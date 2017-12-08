import React from 'react';
import Caps from '../Caps';
import Axios from 'axios';
import _ from 'lodash';
// import DataJSON from '../../caps.json';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {caps: [] };
  }

  _fetchData() {
    Axios.get('/screencaps/')
    .then((res) => {
      console.log(res);
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
        {_.sample(this._getCaps())}
      </div>
    )
  }
}

export default Home;
