import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      <Perception store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFn={props.callbackFunction}></Perception>
    </section>
  )
}
export default MappingForm
