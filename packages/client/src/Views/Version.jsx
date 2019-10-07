import React, { Component } from 'react';
import preval from 'preval.macro';

const appBuildDate = preval`module.exports = new Date().toISOString().slice(0, 19).replace('T', ' ')`;

class Version extends Component {

  render() {
    return (
      <ul className='version-container'>
        <li>App:<span>{process.env.REACT_APP_NAME}</span></li>
        <li>Version:<span>{process.env.REACT_APP_VERSION}</span></li>
        <li>Build:<span>{appBuildDate}</span></li>
      </ul>
    );
  }
}

export default Version;
