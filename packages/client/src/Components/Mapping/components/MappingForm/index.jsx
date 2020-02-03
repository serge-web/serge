import React, { cloneElement } from 'react'
import MarkerName from '../MarkerName'

import './styles.scss'

const MappingForm = ({ store, onStoreUpdate, callbackFunction, child }) => {
  return (
    <section className="mapping-form-container">
      <form>
        <MarkerName store={store} onStoreUpdate={onStoreUpdate} callbackFunction={callbackFunction} />
        {
          cloneElement(child, {
            store,
            onStoreUpdate,
            callbackFunction
          })
        }
      </form>
    </section>
  )
}
export default MappingForm
