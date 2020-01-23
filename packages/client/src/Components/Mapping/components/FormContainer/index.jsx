import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'

const MappingForm = props => {
  return (
    <section className="mapping-form-container">
      { (props.store.currentForce !== props.store.currentMarkerForce && props.store.currentForce !== 'umpire')
        ? <Perception store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></Perception>
        : <div>Nothing set up for this yet</div>
      }
    </section>
  )
}
export default MappingForm
