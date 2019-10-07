import React, { Component } from 'react';
import '../scss/App.scss';

class AwaitingStart extends Component {

  render() {

    console.log(this.props.description);

    return (
      <>
        <div id="loading">
          <div>
            <div id="loader"></div>
          </div>
          <h1>Awaiting game start</h1>
          <p>{this.props.description}</p>
        </div>
      </>
    );
  }
}

export default AwaitingStart;
