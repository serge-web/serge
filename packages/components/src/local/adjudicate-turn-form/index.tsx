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
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formData }) => {
  const { status, speed, visibleTo, condition } = formData

  return (
    <Form type="adjudication" headerText="placeholder" >
      <fieldset>
        <PlannedRoute />
        <RCB type="radio" label="Status" options={status} />
        <RCB type="radio" label="Speed (kts)" options={speed} />
      </fieldset>
      <fieldset>
        <ForcePicker label="Visible to" options={visibleTo} />
        <hr />
        <RCB type="checkbox" label="Condition" options={condition} />
      </fieldset>
      <Button>Save</Button>
    </Form>
  )
}

export default AdjudicateTurnForm
