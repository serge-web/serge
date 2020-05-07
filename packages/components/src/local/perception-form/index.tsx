import React from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import ForcePicker from '../form-elements/force-picker'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
  const { perceivedForce } = formData.populate
  const { perceivedForceVal } = formData.values

  console.log(postBack)

  return <Form type="perceived-as" headerText={formHeader}>
    <fieldset>
      <ForcePicker label="Perceived Force" options={perceivedForce} selected={perceivedForceVal} />
    </fieldset>
    <Button>Save</Button>
  </Form>
}

export default PerceptionForm
