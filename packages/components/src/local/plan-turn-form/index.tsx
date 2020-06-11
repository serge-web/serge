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

  const speedHandler = (e: any): void => {
    if (isNumber(e)) {
      setFormState(
        {
          ...formState,
          speedVal: e
        }
      )
    }
  }

  // Status has a different data model and requires it's own handler

  const statusHandler = (data: any): void => {
    // retrieve the new value
    const newState: string = data.target && data.target.value

    // find the status object for this state
    const selectedStatus = status.find((s: any) => s.name === newState)

    // if status matched, update it.
    if (selectedStatus) {
      setFormState({
        ...formState,
        statusVal: selectedStatus
      })
    } else {
      console.warn('Unable to find state to match:' + newState)
    }
  }

  const submitForm = (): void => {
    if (turnPlanned !== undefined) {
      turnPlanned(formState)
    }
  }
  /* note: in some selectedAsset update cycles this form gets rendered
   * when we don't know the status of the selected asset.  For this reason
   * we use `statusVal &&` guard check in the following block
   */
  return <div className={styles.main}>
    <TitleWithIcon
      forceColor={icon.forceColor}
      platformType={icon.platformType}
    >
      {formHeader}
    </TitleWithIcon>
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
    </FormGroup>
    {statusVal.mobile
      ? <FormGroup>
        <Speed
          colCount = { undefined }
          value = { speedVal }
          options = { speed }
          onClick = { speedHandler }
        />
      </FormGroup>
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
