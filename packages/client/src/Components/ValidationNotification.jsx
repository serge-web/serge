import React, { Component } from 'react';

import '../scss/App.scss';

class ValidationNotification extends Component {

  render() {
    return (
      <>
        <div className="invalid-notification"><p>{this.props.children}</p></div>
      </>
    );
  }
}
export default ValidationNotification;
