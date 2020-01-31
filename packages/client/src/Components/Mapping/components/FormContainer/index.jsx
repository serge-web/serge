import React, { cloneElement } from 'react'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      {
        cloneElement(props.child, {
          store: props.store,
          onStoreUpdate: props.onStoreUpdate,
          callbackFunction: props.callbackFunction
        })
      }
    </section>
  )
}
export default MappingForm
