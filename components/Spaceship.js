import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets:false,
  colors:['black','red']
};

module.exports = Spaceship
