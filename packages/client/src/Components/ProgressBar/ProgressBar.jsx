import React, { Component } from 'react';

class ProgressBar extends Component {

  render() {
    return (
      <div className="progress">
        {this.props.children}
      </div>
    );
  }
}

export default ProgressBar;
