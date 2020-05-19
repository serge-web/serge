import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import TextInput from '../form-elements/text-input'

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

  // Status has a different data model and requires it's own handler

  const statusHandler = (data: any): void => {
    const { name, value } = data

    const selectedStatus = status.find((s: any) => s.name === value)

    setFormState({
      ...formState,
      [`${name}Val`]: selectedStatus
    })
  }

  const submitForm = (): void => {
    if (postBack !== undefined) {
      postBack(formState)
    }
  }

  return <Form type="planning" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" label="Status" options={status.map((s: any) => s.name)} value={statusVal.name} updateState={statusHandler}/>
      {statusVal.mobile ? <RCB type="radio" label="Speed" options={speed} value={speedVal} updateState={changeHandler}/> : <><TextInput label="For" name="turns" value={turnsVal} updateState={changeHandler} /> turns</>}
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PlanTurnForm
