import React from 'react'

/* Import Types */
// import Props from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'
import ForcePicker from '../form-elements/force-picker'

/* Render component */
export const PerceptionForm: React.FC = () =>
  <Form type="perceived-as" headerText="placeholder">
    <fieldset>
      <ForcePicker label="Perceived Force" options={[{
        name: 'Blue',
        colour: '#69c'
      },
      {
        name: 'Red',
        colour: '#f00'
      },
      {
        name: 'White',
        colour: '#fff'
      }]} />
      <Turns />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default PerceptionForm
