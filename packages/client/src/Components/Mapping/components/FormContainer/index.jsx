import React, { cloneElement } from 'react'
import MarkerName from '../MarkerName'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      <form>
        <MarkerName name={props.store.currentMarkerName}/>
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
