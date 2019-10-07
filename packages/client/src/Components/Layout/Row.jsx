import React, { Component } from 'react';

class Row extends Component {

  render() {

    var classes = this.props.className ? `${this.props.className} flex-content` : "flex-content";

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

export default Row;
