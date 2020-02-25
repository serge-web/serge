import React from 'react'

export default ({ children }) => (
  <div className="loading">
    <div className="loader">&nbsp;</div>
    { children }
  </div>
);
