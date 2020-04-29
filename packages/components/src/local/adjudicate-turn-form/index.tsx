import React from 'react'

/* Import Types */
import Props from './types/props'
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import RadioType from '../form-elements/radio-type'
import CheckboxType from '../form-elements/checkbox-type'
import { Button } from '@material-ui/core'


/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const AdjudicateTurnForm: React.FC<Props> = ({}: Props) =>
  <Form type="adjudication" headerText="placeholder">
    <fieldset>
      <PlannedRoute />
      <RadioType label="Status" options={['Fishing', 'Moored', 'Transiting']} />
      <RadioType label="Speed (kts)" options={[10, 20, 30]} />
    </fieldset>
    <fieldset>
      <CheckboxType label="Visible to" options={['Blue Force', 'Green Force']} />
      <hr />
      <RadioType label="Condition" options={['Working', 'Disabled', 'Immobile', 'Destroyed']} />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default AdjudicateTurnForm
