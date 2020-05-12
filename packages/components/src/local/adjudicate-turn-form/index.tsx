import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import ForcePicker from '../form-elements/force-picker'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const [formState, setFormState] = useState(formData)
 
  const { status, speed, visibleTo, condition } = formState.populate
  const { statusVal, speedVal, visibleToVal, conditionVal } = formState.values

  
  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
   const { name, value } = e

  // If a value has been passed as a string when it should be a number,
  // convert it back to a number
  const outputVal = isNumber(value) ? parseInt(value) : value

   setFormState(
     {
       populate: formData.populate,
       values: {
         ...formState.values,
         [`${name}Val`]: outputVal,
       }
     }
   )
 }

 console.log(speedVal)

 const submitForm = (): void => postBack(formState)

  return (
    <Form type="adjudication" headerText={formHeader} >
      <fieldset>
        <PlannedRoute />
        <RCB type="radio" label="Status" options={status} value={statusVal} updateState={changeHandler}/>
        <RCB type="radio" label="Speed (kts)" name="speed" options={speed} value={speedVal} updateState={changeHandler}/>
      </fieldset>
      <fieldset>
        <ForcePicker label="Visible to" options={visibleTo} selected={visibleToVal} updateState={changeHandler}/>
        <hr />
        <RCB type="radio" label="Condition" options={condition} value={conditionVal} updateState={changeHandler}/>
      </fieldset>
      <Button onClick={submitForm}>Save</Button>
    </Form>
  )
}

export default AdjudicateTurnForm
