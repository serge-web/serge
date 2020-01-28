import React from 'react'

import Perception from '../FormChildPerception'
import PlannedStatus from '../FormChildPlannedStatus'
import Adjudication from '../FormChildAdjudication'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      { props.store.currentForce !== 'umpire'
        ? (props.store.currentForce !== props.store.currentMarkerForce)
          ? <Perception store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></Perception>
          : <PlannedStatus store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></PlannedStatus>
        : <Adjudication store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></Adjudication>
      }
    </section>
  )
}
export default MappingForm
