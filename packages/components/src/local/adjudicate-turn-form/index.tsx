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
import { deepCompare, isNumber } from '@serge/helpers'
import Badge from '../atoms/badge'
import { ColorOption, RouteStatus, Status } from '@serge/custom-types'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({
  plansSubmitted, canSubmitPlans, manager
}) => {
  // flag for if the current state is mobile#
  const [statusValues, setStatusValues] = useState<Array<Status>>([])
  const [speedValues, setSpeedValues] = useState<Array<number>>([])
  const [visibleToValues, setVisibleToValues] = useState<Array<ColorOption>>([])
  const [conditionValues, setConditionValues] = useState<Array<string>>([])

  const [plansSubmittedVal, setPlansSubmittedVal] = useState<boolean>(true)

  const [stateIsMobile, setStateIsMobile] = useState<boolean>(false)
  const [upperPlanningActions, setUpperPlanningActions] = useState<Array<{ label: string, action: PlanningCommands }>>([])
  const [lowerPlanningActions, setLowerPlanningActions] = useState<Array<{ label: string, action: PlanningCommands }>>([])
  const [statusVal, setStatusVal] = useState<string>('')
  const [speedVal, setSpeedVal] = useState<number>(0)
  const [conditionVal, setConditionVal] = useState<string>('')
  const [visibleVal, setVisibleVal] = useState<Array<string>>(manager ? manager.currentVisibleTo() : [])
  const icon: {forceColor: string, platformType: string} = manager ? manager.iconData : { forceColor: '', platformType: '' }

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans

  const canChangeState: boolean = manager ? manager.canChangeState() : false

  const handleCommandLocal = (command: PlanningCommands): void => {
    if (manager) {
      console.log('new command')
      manager.handleState(command)
    }
  }

  const conditionHandler = (e: any): void => {
    console.log('condition change!', e.name, e.value)
    manager && manager.setCurrentCondition(e.value)
    setConditionVal(e.value)
  }

  const visibleHandler = (e: any): void => {
    console.log('visible change!', e.name, e.value)
    setVisibleVal(e.value)
    manager && manager.setCurrentVisibleTo(e.value)
  }

  const updateIfNecessary = (name: string, before: any, after: any, doUpdate: {(value: any): void}): void => {
    name && name
    if (!deepCompare(before, after)) {
      //console.log('+ updating ', name, before, after)
      doUpdate(after)
    } else {
      //ßconsole.log('- not updating', name)
    }
  }

  //   console.log('rendering', manager && manager.currentVisibleTo(), formData.status, icon)

  useEffect(() => {
    if (manager) {
      updateIfNecessary('plans', plansSubmittedVal, plansSubmitted, setPlansSubmittedVal)

      // the available options
      const formData = manager.formData
      updateIfNecessary('status values', statusValues, formData.status, setStatusValues)
      updateIfNecessary('visible values', visibleToValues, formData.visibleTo, setVisibleToValues)
      updateIfNecessary('speed values', speedValues, formData.speed, setSpeedValues)
      updateIfNecessary('condition values', conditionValues, formData.condition, setConditionValues)

      // and the actual state
      updateIfNecessary('status', statusVal, manager.plannedState().name, setStatusVal)
      updateIfNecessary('mobile', stateIsMobile, manager.plannedState().mobile, setStateIsMobile)
      updateIfNecessary('speed', speedVal, manager.plannedSpeed(), setSpeedVal)

      // visibility & condition
      updateIfNecessary('visible ', visibleVal, manager.currentVisibleTo(), setVisibleVal)
      updateIfNecessary('condition ', conditionVal, manager.currentCondition(), setConditionVal)

      // the command buttons
      updateIfNecessary('upper ', upperPlanningActions, manager.upperActionsFor(stateIsMobile), setUpperPlanningActions)
      updateIfNecessary('lower ', lowerPlanningActions, manager.lowerActionsFor(stateIsMobile), setLowerPlanningActions)
    }
  }, [manager])

  /** update the state mobility flag */
  useEffect(() => {
    if(statusVal && manager) {
      setStateIsMobile(manager.stateIsMobile(statusVal))
    }
  }, [statusVal])


  // Status has a different data model and requires it's own handler

  const statusHandler = (data: any): void => {
    // retrieve the new value
    const newState: string = data.target && data.target.value

    if (manager) {
      manager.setStatus(newState, speedVal)
      const newStatus: RouteStatus = manager.currentStatus()
      setStatusVal(newStatus.state)

      // also update the mobile state
    }
  }

  const speedHandler = (e: any): void => {
    //   console.log('new speed')
    if (isNumber(e)) {
      if (manager) {
        manager.setStatus(statusVal, e)
        setSpeedVal(e)
      }
    }
  }

  return (
    <div className={styles.adjudicate}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        {manager && manager.formHeader}
        {manager &&
          <Badge label={manager.currentPlanningStatus()} />
        }
        {plansSubmittedVal &&
          <h5 className='sub-title'>(Form disabled, plans submitted)</h5>
        }

      </TitleWithIcon>
      { conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <FormGroup title="Player Route" align="right">
          {!formDisabled && upperPlanningActions && upperPlanningActions.map((item: any) =>
            <Button key={item.label} onClick={(): void => handleCommandLocal(item.action)}>{item.label}</Button>
          )}
        </FormGroup>
        <FormGroup title="State" align="right">
          <Select
            className={clSelect}
            value={statusVal}
            disabled={!canChangeState}
            onChange={statusHandler}
          >
            {statusValues.map((s: any) => (
              <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
            ))}
          </Select>
        </FormGroup>
        {speedValues.length > 0 && stateIsMobile &&
          <FormGroup title="Speed (kts)" titlePosition="absolute">
            <Speed
              disabled={!canChangeState}
              value={speedVal}
              options={speedValues}
              onClick={speedHandler}
            />
          </FormGroup>
        }
      </fieldset>
      }
      <fieldset>
        <FormGroup title="Visible to" align="right">
          <RCB type="checkbox" force={true} label="" compact={true} options={visibleToValues} value={visibleVal} updateState={visibleHandler} />
        </FormGroup>
        <FormGroup title="Condition" align="right">
          <RCB type="radio" label="" options={conditionValues} value={conditionVal} updateState={conditionHandler} />
        </FormGroup>
      </fieldset>
      <fieldset>
        <FormGroup title="Adjudication" align="right">
          {!formDisabled && lowerPlanningActions && lowerPlanningActions.map((item: any) =>
            <Button key={item.label} onClick={(): void => handleCommandLocal(item.action)}>{item.label}</Button>
          )}
        </FormGroup>
      </fieldset>
    </div>
  )
}

export default AdjudicateTurnForm
