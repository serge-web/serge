import React from 'react'

/* Import Types */
// import Props from './types/props'
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import ForcePicker from '../form-elements/force-picker'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const AdjudicateTurnForm: React.FC = () =>
  <Form type="adjudication" headerText="placeholder">
    <fieldset>
      <PlannedRoute />
      <RCB type="radio" label="Status" options={['Fishing', 'Moored', 'Transiting']} />
      <RCB type="radio" label="Speed (kts)" options={[10, 20, 30]} />
    </fieldset>
    <fieldset>
      <ForcePicker label="Visible to" options={[
        {
          name: 'Blue Force',
          colour: '#69c'
        },
        {
          name: 'Red Force',
          colour: '#f00'
        },
        {
          name: 'White Force',
          colour: '#fff'
        }
      ]} />
      <hr />
      <RCB type="checkbox" label="Condition" options={['Working', 'Disabled', 'Immobile', 'Destroyed']} />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default AdjudicateTurnForm
