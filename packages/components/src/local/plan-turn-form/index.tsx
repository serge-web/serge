import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { FormGroup, clSelect, clInput } from '../form-elements/form-group'
import Speed from '../form-elements/speed'
import Button from '../form-elements/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({ formHeader, formData, canSubmitPlans, setHidePlanningForm, turnPlanned, icon, plansSubmitted }) => {
  // TODO: Refactor this into a reusable helper and remove other instances
  const [formState, setFormState] = useState(formData.values)

  const { status, speed } = formData.populate
  const { statusVal, turnsVal, speedVal } = formState

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans

  const changeHandler = (e: any): void => {
    const { name, value } = e.target

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

  /** only enable the save button if this is a non-mobile state,
   * or if we have a speed value assigned
   */
  const saveEnabled: boolean = !statusVal.mobile || (speed.length === 0) || (formState.speedVal !== undefined && formState.speedVal !== 0)

  const submitForm = (): void => {
    if (turnPlanned !== undefined) {
      turnPlanned(formState)
      // control has reached this point because the player has selected
      // a mobile state.  Consequently, the planning form will now be hidden,
      // to allow more space for planning
      if (setHidePlanningForm) {
        setHidePlanningForm(true)
      }
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
      { plansSubmitted &&
       <h5 className='sub-title'>(Form disabled, plans submitted)</h5>
      }
    </TitleWithIcon>

    <FormGroup title="State" align="right">
      <Select
        className={clSelect}
        disabled={formDisabled}
        value={statusVal.name}
        onChange={statusHandler}
      >
        {status.map((s: any) => (
          <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
        ))}
      </Select>
    </FormGroup>
    {statusVal.mobile
      ? <FormGroup title="Speed (kts)" titlePosition="absolute">
        {speed.length > 0 &&
        <Speed
          value = { speedVal }
          options = { speed }
          onClick = { !formDisabled && speedHandler }
        />
        }
      </FormGroup>
      : <FormGroup title="For">
        <Input className={clInput} disabled={formDisabled} name="turns" value={turnsVal} onChange={changeHandler}/>
        <span className={styles.text}>turns</span>
        {/*
          <TextInput
            label="For"
            name="turns"
            value={turnsVal}
            updateState={changeHandler}
          />
        */}
      </FormGroup>
    }
    <FormGroup title="Condition">
      <span className={styles.text}>{/* TODO: add real data */}Working</span>
    </FormGroup>
    { !formDisabled &&
      <Button disabled={!saveEnabled} onClick={submitForm}>{statusVal.mobile ? 'Plan turn' : 'Save'}</Button>
    }
  </div>
}

export default PlanTurnForm
