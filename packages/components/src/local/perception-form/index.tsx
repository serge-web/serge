import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import ForcePicker from '../form-elements/force-picker'
import Selector from '../form-elements/selector'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const [formState, setFormState] = useState(formData.values)

  const { perceivedForce, perceivedType } = formData.populate
  const { perceivedForceVal, perceivedTypeVal } = formState

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    setFormState(
      {
        ...formState,
        perceivedForceVal: e.value
      }
    )
  }

  const selectHandler = (data: string): void => {
    setFormState(
      {
        ...formState,
        perceivedTypeVal: data
      }
    )
  }

  const submitForm = (): void => {
    if (postBack !== undefined) {
      postBack(formState)
    }
  }

  return <Form type="perceived-as" headerText={formHeader}>
    <fieldset>
      <ForcePicker label="Perceived Force" name='perceivedForce' options={perceivedForce} selected={perceivedForceVal} updateState={changeHandler}/>
      <Selector label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler}/>
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PerceptionForm
