import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'
import PlannedStatus from '../FormChildPlannedStatus'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      { (props.store.currentForce !== props.store.currentMarkerForce && props.store.currentForce !== 'umpire')
        ? <Perception store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></Perception>
        : <PlannedStatus store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></PlannedStatus>
      }
    </section>
  )
}
export default MappingForm
