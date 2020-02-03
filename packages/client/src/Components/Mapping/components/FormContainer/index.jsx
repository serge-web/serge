import React, { cloneElement } from 'react'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      <form>
        <h2>{props.store.currentMarkerName}</h2>
        {
          cloneElement(props.child, {
            store: props.store,
            onStoreUpdate: props.onStoreUpdate,
            callbackFunction: props.callbackFunction
          })
        }
      </form>
    </section>
  )
}
export default MappingForm
