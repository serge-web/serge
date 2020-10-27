import React, { useState, useEffect } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import components */
import PlannedRoute from '../form-elements/planned-route'
import Speed from '../form-elements/speed'
import { Button } from '../form-elements/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import RCB from '../form-elements/rcb'
import { FormGroup, clSelect } from '../form-elements/form-group'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { PlanningStates } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'
import { PlanTurnFormValues, Status } from '@serge/custom-types'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, icon, plansSubmitted, canSubmitPlans, routeAccepted, turnPlanned }) => {
  const [formState, setFormState] = useState(formData.values)
  const [stateIsMobile, setStateIsMobile] = useState<boolean>(false)

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans
  const { status, speed, visibleTo, condition } = formData.populate
  const { plannedRouteStatusVal, statusVal, speedVal, visibleToVal, conditionVal } = formState

  const canChangeState: boolean = plannedRouteStatusVal === PlanningStates.Rejected 

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    const { name, value } = e
    updateState({ name, value })
  }

  const clickHandler = (data: any): void => {
    console.log('click', data)
    updateState(data)
  }

  useEffect(() => {
    console.log('speeds', speed)
  }, [speed])

  useEffect(() => {
    console.log('status', formState)
    const newStatus: Status | undefined = formState && formState.statusVal
    if(newStatus) {
      setStateIsMobile(newStatus.mobile)
      console.log('form data', formData.populate)
    }
  }, [formState])


  useEffect(() => {
    console.log('new planed status', plannedRouteStatusVal)
    // see if we've just entered planning phase
    if(plannedRouteStatusVal === PlanningStates.Planning) {
      const state: Status | undefined = formState && formState.statusVal
      if(state) {
        // ok, start planning
        const turnData: PlanTurnFormValues = {
          statusVal: state,
          speedVal: speedVal,
          turnsVal: 1
        }
        if(turnPlanned) {
          turnPlanned(turnData)
        }
      }
    }
  }, [plannedRouteStatusVal])

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
    if (routeAccepted !== undefined) {
      routeAccepted(formState)
    }
  }

  return (
    <div className={styles.adjudicate}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        {formHeader} {plannedRouteStatusVal}
        { plansSubmitted &&
         <h5 className='sub-title'>(Form disabled, plans submitted)</h5>
        }

      </TitleWithIcon>
      { plannedRouteStatusVal === PlanningStates.Pending && <span> Reviewed </span>}
      { conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <FormGroup title="Planned Route" align="right">
          { !formDisabled &&
            <PlannedRoute name="plannedRouteStatus" isMobile={stateIsMobile} status={plannedRouteStatusVal} updateState={clickHandler} />
          }
        </FormGroup>
        <FormGroup title="State" align="right">
          <Select
            className={clSelect}
            value={statusVal.name}
            disabled={ !canChangeState }
            onChange={statusHandler}
          >
            {status.map((s: any) => (
              <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
            ))}
          </Select>
        </FormGroup>
        {speed.length > 0 && formState && formState.statusVal && formState.statusVal.mobile &&
          <FormGroup title="Speed (kts)" titlePosition="absolute">
              <Speed
                disabled={ !canChangeState }
                value = { speedVal }
                options = { speed }
                onClick = { speedHandler }
              />
          </FormGroup>
        }
        </fieldset>
      }
      <fieldset>
        <FormGroup title="Visible to" align="right">
          <RCB type="checkbox" force={true} label="" compact={true} options={visibleTo} value={visibleToVal} updateState={changeHandler}/>
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
