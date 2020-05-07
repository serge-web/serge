import React from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import ForcePicker from '../form-elements/force-picker'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const { status, speed, visibleTo, condition } = formData.populate
  const { statusVal, speedVal, visibleToVal, conditionVal } = formData.values

  console.log(postBack)

  return (
    <Form type="adjudication" headerText={formHeader} >
      <fieldset>
        <PlannedRoute />
        <RCB type="radio" label="Status" options={status} value={statusVal}/>
        <RCB type="radio" label="Speed (kts)" options={speed} value={speedVal} />
      </fieldset>
      <fieldset>
        <ForcePicker label="Visible to" options={visibleTo} selected={visibleToVal}/>
        <hr />
        <RCB type="radio" label="Condition" options={condition} value={conditionVal}/>
      </fieldset>
      <Button>Save</Button>
    </Form>
  )
}

export default AdjudicateTurnForm
