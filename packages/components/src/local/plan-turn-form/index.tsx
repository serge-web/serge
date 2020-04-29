import React from 'react'

/* Import Types */
import Props from './types/props'
import Form from '../form'
import RadioType from '../form-elements/radio-type'
import { Button } from '@material-ui/core'
import Turns from '../form-elements/turns'


/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const PlanTurnForm: React.FC<Props> = ({}: Props) =>
  <Form type="planning" headerText="placeholder">
    <fieldset>
      <RadioType label="Status" options={['Moored', 'Transiting']} />
      <Turns />
    </fieldset>
    <Button>Save</Button>
  </Form>

export default PlanTurnForm
