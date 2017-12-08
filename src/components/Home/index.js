import React from 'react';
import Caps from '../Caps';
import Axios from 'axios';
// import DataJSON from '../../caps.json';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {caps: null};
    // this._fetchRandom();
    this.refresh = this.refresh.bind(this);
  }

  _fetchRandom() {

    Axios.get('/screencaps/random/')
    .then((res) => {

      this.setState({caps: res.data.caps});

    })
  };

  refresh() {
    this._fetchRandom();
  };

  _getCap() {
    if(this.state.caps) {
    // console.log(this.state);
      return (
        <Caps picture={this.state.caps.path} title={this.state.caps.movie.title} key={this.state.id}/>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  };

  componentDidMount() {
    this._fetchRandom();
  }

  render() {

    return (
      <div>
        <span onClick={this.refresh} className='button is-warning'>Refresh</span>
        <br /> <br />
        {this._getCap()}
      </div>
    )
  }
}

export default Home;
