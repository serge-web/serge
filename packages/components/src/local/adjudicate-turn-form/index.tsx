import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import components */
import PlannedRoute from '../form-elements/planned-route'
import Speed from '../form-elements/speed'
import { Button } from '../atoms/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import RCB from '../form-elements/rcb'
import { FormGroup, clSelect } from '../form-elements/form-group'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, channelID, icon, plansSubmitted, canSubmitPlans, postBack }) => {
  const [formState, setFormState] = useState(formData.values)

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans
  const { status, speed, visibleTo, condition } = formData.populate
  const { plannedRouteStatusVal, statusVal, speedVal, visibleToVal, conditionVal } = formState

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    const { name, value } = e
    updateState({ name, value })
  }

  const clickHandler = (data: any): void => {
    updateState(data)
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

  const updateState = (data: any): void => {
    const { name, value } = data

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

  const submitForm = (): void => {
    if (postBack !== undefined) {
      postBack('adjudicate', formState, channelID)
    }
  }

  return (
    <div className={styles.adjudicate}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        {formHeader}
        { plansSubmitted &&
         <h5 className='sub-title'>(Form disabled, plans submitted)</h5>
        }

      </TitleWithIcon>
      { plannedRouteStatusVal === 'accepted' && <span> Reviewed </span>}
      { conditionVal.toLowerCase() === 'working' && <fieldset>
        <FormGroup title="Planned Route" align="right">
          { !formDisabled &&
            <PlannedRoute name="plannedRouteStatus" status={plannedRouteStatusVal} updateState={clickHandler} />
          }
        </FormGroup>
        {
          plannedRouteStatusVal === 'rejected' && <div>
            <RCB type="radio" label="Status" options={status.map((s: any) => s.name)} value={statusVal.name} updateState={statusHandler}/>
            { statusVal.mobile &&
              <RCB type="radio" label="Speed (kts)" name="speed" options={speed} value={speedVal} updateState={changeHandler}/>
            }
          </div>
        }
        {
          plannedRouteStatusVal !== 'rejected' && <>
            <FormGroup title="State" align="right">
              <Select
                className={clSelect}
                value={statusVal.name}
                onChange={statusHandler}
              >
                {status.map((s: any) => (
                  <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
                ))}
              </Select>
            </FormGroup>
            <FormGroup title="Speed (kts)" titlePosition="absolute">
              {speed.length > 0 &&
                <Speed
                  value = { speedVal }
                  options = { speed }
                  onClick = { speedHandler }
                />
              }
            </FormGroup>
          </>
        }
      </fieldset>
      }
      <fieldset>
        <FormGroup title="Visible to" align="right">
          <RCB type="checkbox" force={true} label="" options={visibleTo} value={visibleToVal} updateState={changeHandler}/>
        </FormGroup>
        <FormGroup title="Condition" align="right">
          <RCB type="radio" label="" options={condition} value={conditionVal} updateState={changeHandler}/>
        </FormGroup>
      </fieldset>
      { !formDisabled &&
        <Button onClick={submitForm}>Save</Button>
      }
    </div>
  )
}

export default AdjudicateTurnForm
