import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import FormGroup from '../form-elements/form-group'
import Speed from '../form-elements/speed'
import Button from '../form-elements/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import TextInput from '../form-elements/text-input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

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
    <FormGroup title="Planned Route" align="right">
      <Button>Plan Route</Button>
    </FormGroup>
    <FormGroup title="State" align="right">
      <Select
        className={styles.select}
        value={statusVal.name}
        onChange={statusHandler}
      >
        {status.map((s: any) => (
          <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
        ))}
      </Select>
      {/*
        <RCB
          type="radio"
          label="Status"
          options={status.map((s: any) => s.name)}
          value={statusVal.name}
          updateState={statusHandler}
        />
      */}
    </FormGroup>
    {statusVal.mobile
      ? <FormGroup>
        <Speed
          colCount={6}
          value={speedVal}
          options={speed}
          onClick={changeHandler}
        />
      </FormGroup>
      /*
       <RCB
        type="radio"
        label="Speed"
        options={speed}
        value={speedVal}
        updateState={changeHandler}
      />
      */
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
    <Button onClick={submitForm}>{statusVal.mobile ? 'Plan turn' : 'Save'}</Button>
  </div>
}

export default PlanTurnForm
