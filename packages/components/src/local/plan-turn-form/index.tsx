import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  // TODO: Refactor this into a reusable helper and remove other instances
  const [formState, setFormState] = useState(formData.values)

  const { status, speed } = formData.populate
  const { statusVal, turnsVal, speedVal } = formState

  const changeHandler = (e: any): void => {
    const { name, value } = e

    // If a value has been passed as a string when it should be a number,
    // convert it back to a number
    const outputVal = isNumber(value) ? parseInt(value) : value

    setFormState(
      {
        ...formState,
        [`${name}Val`]: outputVal
      }
    )
  }

  const submitForm = (): void => {
    if (postBack !== undefined) {
      postBack(formState)
    }
  }

  return <Form type="planning" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" label="Status" options={status} value={statusVal} updateState={changeHandler}/>
      {statusVal === 'Transiting' && <RCB type="radio" label="Speed" options={speed} value={speedVal} updateState={changeHandler}/> }
      <Turns turns={turnsVal} updateState={changeHandler} />
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PlanTurnForm
