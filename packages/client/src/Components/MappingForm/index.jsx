import React from 'react'

const MappingForm = ({ position }) => {
  return (
    <form className="mapping-form" style={{
      position: 'absolute'
    }}>
      <label htmlFor="POC">Proof of concept</label>
      <input type="text" name="POC" id="POC" />
    </form>
  )
}
export default MappingForm
