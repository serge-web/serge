import React from 'react'

interface Props { children?: any }

const Loader: React.FC<Props> = ({ children }) => (
  <div className='loading'>
    <div className='loader'>&nbsp;</div>
    { children }
  </div>
)

export default Loader
