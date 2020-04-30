import React from 'react'

/* Import Types */
// import Props from './types/props'
import Form from '../form'
import RCB from '../form-elements/rcb'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'

/* Render component */
export const PerceptionForm: React.FC = () =>
  <Form type="perceived-as" headerText="placeholder">
    <fieldset>
      <RCB type="radio" label="Perceived Force" options={['Red', 'Green']} force={true}/>
      <Turns />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default PerceptionForm
