import React from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  console.log(postBack)
  const { status } = formData.populate
  const { statusVal, turnsVal } = formData.values
  return <Form type="planning" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" label="Status" options={status} value={statusVal} />
      <Turns turns={turnsVal}/>
    </fieldset>
    <Button>Save</Button>
  </Form>
}

export default PlanTurnForm
