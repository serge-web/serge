import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Selector from '../form-elements/selector'
import RCB from '../form-elements/rcb'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const [formState, setFormState] = useState(formData)

  const { perceivedForce, perceivedType } = formState.populate
  const { perceivedForceVal, perceivedTypeVal } = formState.values

  // TODO: Refactor this into a reusable helper and remove other instances
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

  const selectHandler = (data: string): void => {
    setFormState(
      {
        populate: formData.populate,
        values: {
          ...formState.values,
          perceivedTypeVal: data
        }
      }
    )
  }

  const submitForm = (): void => postBack(formState)

  return <Form type="perceived-as" headerText={formHeader}>
    <fieldset>
      <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForce} value={perceivedForceVal} updateState={changeHandler}/>
      <Selector label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler}/>
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PerceptionForm
