import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import FormGroup from '../form-elements/form-group'
import Button from '../form-elements/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import RCB from '../form-elements/rcb'
import TextInput from '../form-elements/text-input'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, turnPlanned, icon }) => {
  // TODO: Refactor this into a reusable helper and remove other instances
  const [formState, setFormState] = useState(formData.values)

  const { status, speed } = formData.populate
  const { statusVal, turnsVal, speedVal } = formState

  const changeHandler = (e: any): void => {
    const { name, value } = e

    // If a value has been passed as a string when it should be a number,
    // convert it back to a number
    const outputVal = isNumber(value) ? parseInt(value) : value

    setFormState(
      {
        ...formState,
        [`${name}Val`]: outputVal
      }
    )
  }

  // Status has a different data model and requires it's own handler

  const statusHandler = (data: any): void => {
    const { name, value } = data

    const selectedStatus = status.find((s: any) => s.name === value)

    setFormState({
      ...formState,
      [`${name}Val`]: selectedStatus
    })
  }

  const submitForm = (): void => {
    if (turnPlanned !== undefined) {
      turnPlanned(formState)
    }
  }

  return <div className={styles.main}>
    <TitleWithIcon
      forceColor={icon.forceColor}
      platformType={icon.platformType}
    >
      {formHeader}
    </TitleWithIcon>
    <FormGroup title="Planned Route">
      <div className={styles['planned-route']}>
        <Button>Plan Route</Button>
      </div>
    </FormGroup>
    <FormGroup title="State">
      <RCB
        type="radio"
        label="Status"
        options={status.map((s: any) => s.name)}
        value={statusVal.name}
        updateState={statusHandler}
      />
    </FormGroup>
    <FormGroup>
      {statusVal.mobile
        ? <RCB
          type="radio"
          label="Speed"
          options={speed}
          value={speedVal}
          updateState={changeHandler}
        />
        : <>
          <TextInput
            label="For"
            name="turns"
            value={turnsVal}
            updateState={changeHandler}
          />
          turns
        </>
      }
    </FormGroup>
    <Button onClick={submitForm}>{statusVal.mobile ? 'Plan turn' : 'Save'}</Button>
  </div>
}

export default PlanTurnForm
