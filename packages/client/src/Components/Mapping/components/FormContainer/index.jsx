import React from 'react'

import Perception from '../FormChildPerception'

import './styles.scss'
import PlannedStatus from '../FormChildPlannedStatus'
import { PLAYER_PERCEPTION, PLAN_STATE_FORM } from '../../../../consts'

const MappingForm = props => {
  switch (props.store.formType) {
    case PLAYER_PERCEPTION: {
      return <section className="mapping-form-container">
        <Perception store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></Perception>
      </section>
    }
    case PLAN_STATE_FORM: {
      return <section className="mapping-form-container">
        <PlannedStatus store={props.store} onStoreUpdate={props.onStoreUpdate} callbackFunction={props.callbackFunction}></PlannedStatus>
      </section>
    }
  }
}
export default MappingForm
