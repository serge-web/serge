import React, { useState, useEffect } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import components */
import Speed from '../form-elements/speed'
import { Button } from '../form-elements/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import RCB from '../form-elements/rcb'
import { FormGroup, clSelect } from '../form-elements/form-group'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { PlanningCommands } from '@serge/config'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'
import { AdjudicateTurnFormValues, Status } from '@serge/custom-types'
import Badge from '../atoms/badge'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({
  formHeader, formData, icon,
  plansSubmitted, canSubmitPlans, manager
}) => {
  const [formState, setFormState] = useState<AdjudicateTurnFormValues>(formData.values)
  // flag for if the current state is mobile
  const [stateIsMobile, setStateIsMobile] = useState<boolean>(formState.statusVal.mobile)
  const [upperPlanningActions, setUpperPlanningActions] = useState<Array<{label: string, action: PlanningCommands}>>([])
  const [lowerPlanningActions, setLowerPlanningActions] = useState<Array<{label: string, action: PlanningCommands}>>([])

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans
  const { status, speed, visibleTo, condition } = formData.populate
  const { statusVal, speedVal, visibleToVal, conditionVal } = formState

  const canChangeState: boolean = manager ? manager.canChangeState() : false

  const handleCommandLocal = (command: PlanningCommands, formState?: AdjudicateTurnFormValues): void => {
    if (manager) {
      manager.handleState(command, formState)
    }
  }

  // TODO: Refactor this into a reusable helper and remove other instances
  const changeHandler = (e: any): void => {
    const { name, value } = e
    updateState({ name, value })
  }

  useEffect(() => {
    const newStatus: Status | undefined = formState && formState.statusVal
    if (newStatus) {
      console.log('setting mobile state to', newStatus.mobile)
      setStateIsMobile(newStatus.mobile)
    }
  }, [formState])

  useEffect(() => {
    if (manager) {
      setUpperPlanningActions(manager.upperActionsFor(stateIsMobile))
      setLowerPlanningActions(manager.lowerActionsFor(stateIsMobile))
    }
  }, [manager])

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

  return (
    <div className={styles.adjudicate}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        {formHeader}
        { manager &&
          <Badge label={manager.currentPlanningStatus()} />
        }
        { plansSubmitted &&
         <h5 className='sub-title'>(Form disabled, plans submitted)</h5>
        }

      </TitleWithIcon>
      { conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <FormGroup title="Player Route" align="right">
          { !formDisabled && upperPlanningActions && upperPlanningActions.map((item: any) =>
            <Button key={item.label} onClick={(): void => handleCommandLocal(item.action, formState)}>{item.label}</Button>
          )}
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
        {speed.length > 0 && formState.statusVal && formState.statusVal.mobile &&
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
      <fieldset>
        <FormGroup title="Adjudication" align="right">
          { !formDisabled && lowerPlanningActions && lowerPlanningActions.map((item: any) =>
            <Button key={item.label} onClick={(): void => handleCommandLocal(item.action, formState)}>{item.label}</Button>
          )}
        </FormGroup>
      </fieldset>
    </div>
  )
}

export default AdjudicateTurnForm
