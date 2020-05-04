import React from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'
import ForcePicker from '../form-elements/force-picker'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formData }) =>
  <Form type="perceived-as" headerText="placeholder">
    <fieldset>
      <ForcePicker label="Perceived Force" options={formData.perceivedForce} />
      <Turns />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default PerceptionForm
