import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const [formState, setFormState] = useState(formData)

  const statusHandler = (data: string): void => {
    setFormState(
      {
        populate: formData.populate,
        values: {
          statusVal: data,
          turnsVal: formData.values.turnsVal,
        }
      }
    )
  }

  const turnsHandler = (data: number): void => {
    setFormState(
      {
        populate: formData.populate,
        values: {
          statusVal: formData.values.statusVal,
          turnsVal: data
        }
      }
    )
  };

  const submitForm = (): void => postBack(formState)

  const { status } = formState.populate
  const { statusVal, turnsVal } = formState.values
  return <Form type="planning" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" label="Status" options={status} value={statusVal} updateState={statusHandler}/>
      <Turns turns={turnsVal} updateState={turnsHandler} />
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PlanTurnForm
