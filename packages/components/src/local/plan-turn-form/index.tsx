import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  // TODO: Refactor this into a reusable helper and remove other instances
  const [formState, setFormState] = useState(formData)

  const changeHandler = (e: any): void => {
    const { name, value } = e
    setFormState(
      {
        populate: formData.populate,
        values: {
          ...formState.values,
          [`${name}Val`]: value
        }
      }
    )
  }

  const submitForm = (): void => postBack(formState)

  const { status } = formState.populate
  const { statusVal, turnsVal } = formState.values
  return <Form type="planning" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" label="Status" options={status} value={statusVal} updateState={changeHandler}/>
      <Turns turns={turnsVal} updateState={changeHandler} />
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PlanTurnForm
