import React from 'react';

class Caps extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.picture} />
        <h4>{this.props.movieTitle}</h4>
        <a>Share action</a>
        <a>Favourite action</a>
        <a>Like action</a>
      </div>
    )
  }
}

export default Caps;
