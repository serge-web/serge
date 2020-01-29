import React, { cloneElement } from 'react'

import Perception from '../FormChildPerception'
import PlannedStatus from '../FormChildPlannedStatus'
import Adjudication from '../FormChildAdjudication'

import './styles.scss'

// Every new child of this popup must be imported and then added to the registry
const componentRegistry = [
  {
    name: 'perception',
    element: <Perception />
  },
  {
    name: 'planned-status',
    element: <PlannedStatus />
  },
  {
    name: 'adjudication',
    element: <Adjudication />
  }
]

const MappingForm = props => {
  const component = componentRegistry.find(component => component.name === props.child)
  return (
    <section className="mapping-form-container">
      {
        cloneElement(component.element, {
          store: props.store,
          onStoreUpdate: props.onStoreUpdate,
          callbackFunction: props.callbackFunction
        })
      }
    </section>
  )
}
export default MappingForm
