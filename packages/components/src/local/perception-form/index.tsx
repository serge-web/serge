import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import ForcePicker from '../form-elements/force-picker'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
 
  const [formState, setFormState] = useState(formData)
  
  const { perceivedForce } = formState.populate
  const { perceivedForceVal } = formState.values

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
   const { name, value } = e
   setFormState(
     {
       populate: formData.populate,
       values: {
         ...formState.values,
         [`${name}Val`]: value,
       }
     }
   )
 }

 const submitForm = (): void => postBack(formState)

  return <Form type="perceived-as" headerText={formHeader}>
    <fieldset>
      <ForcePicker label="Perceived Force" name={'perceivedForce'} options={perceivedForce} selected={perceivedForceVal} updateState={changeHandler}/>
    </fieldset>
    <Button onClick={submitForm}>Save</Button>
  </Form>
}

export default PerceptionForm
