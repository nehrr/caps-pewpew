import React from 'react';

class Caps extends React.Component {

  //<Caps picture='path' title='movie title' />
  render() {
    return (
      <div>
        <div>
          <img src={this.props.picture} />
          <h1>{this.props.title}</h1>
          <i class="fa fa-share fa-2x"></i>&nbsp;
          <i class="fa fa-star-o fa-2x">{this.props.favourite}</i>&nbsp;
          <i class="fa fa-heart-o fa-2x">{this.props.like}</i>
        </div>
        <br /><br />
      </div>
    )
  }
}

export default Caps;
