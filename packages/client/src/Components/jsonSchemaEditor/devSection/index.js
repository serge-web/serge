import React from 'react'

const DevSection = ({children}) => {
  return (
    <div>
      {process.env.REACT_APP_ENV === "dev" && children}
    </div>
  )
}

export default DevSection
