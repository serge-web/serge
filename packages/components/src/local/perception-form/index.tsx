import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Selector from '../form-elements/selector'
import RCB from '../form-elements/rcb'
import TextInput from '../form-elements/text-input'
import { PerceptionFormValues } from '@serge/custom-types'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const [formState, setFormState] = useState<PerceptionFormValues>(formData.values)

  const { perceivedForce, perceivedType } = formData.populate
  const { perceivedNameVal, perceivedForceVal, perceivedTypeVal } = formState

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    const { name, value } = e
    setFormState(
      {
        ...formState,
        [`${name}Val`]: value
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
      postBack('perception', formState)
    }
  }

  return <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''}>
    <fieldset>
      <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={changeHandler}/>
      <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForce} value={perceivedForceVal} updateState={changeHandler}/>
      <Selector native={true} label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler}/>
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PerceptionForm
