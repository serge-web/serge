import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { PlanningCommands } from '@serge/config'
import { AttributeEditorData, AttributeValues, ForceData, ForceOption, RouteStatus, Status } from '@serge/custom-types'
/* Import helpers */
import { collateEditorData, deepCompare, isNumber } from '@serge/helpers'
import React, { ReactElement, useEffect, useState } from 'react'
import Badge from '../atoms/badge'
import { Button } from '../atoms/button'
import { AttributeEditor } from '../attribute-editor'
import Forces from '../form-elements/forces'
import { clSelect, FormGroup } from '../form-elements/form-group'
/* Import components */
import Speed from '../form-elements/speed'
import TitleWithIcon from '../form-elements/title-with-icon'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({
  plansSubmitted, canSubmitPlans, manager, icon
}) => {
  // flag for if the current state is mobile#
  const [statusValues, setStatusValues] = useState<Array<Status>>([])
  const [speedValues, setSpeedValues] = useState<Array<number>>([])
  const [visibleToValues, setVisibleToValues] = useState<Array<ForceOption>>([])
  const [conditionValues, setConditionValues] = useState<Array<string>>([])

  const [plansSubmittedVal, setPlansSubmittedVal] = useState<boolean>(true)

  const [stateIsMobile, setStateIsMobile] = useState<boolean>(false)
  const [upperPlanningActions, setUpperPlanningActions] = useState<Array<{ label: string, action: PlanningCommands }>>([])
  const [lowerPlanningActions, setLowerPlanningActions] = useState<Array<{ label: string, action: PlanningCommands }>>([])
  const [statusVal, setStatusVal] = useState<string>('')
  const [speedVal, setSpeedVal] = useState<number>(0)
  const [conditionVal, setConditionVal] = useState<string>('')
  const [visibleVal, setVisibleVal] = useState<Array<string>>(manager ? manager.currentVisibleTo() : [])

  const [attributes, setAttributes] = useState<AttributeEditorData[]>([])
  const [attributeValues, setAttributeValues] = useState<AttributeValues>(manager ? manager.currentAttributeValues() : [])
  const [attributeEditorOpen, setAttributeEditorOpen] = useState<boolean>(false)

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans

  const canChangeState: boolean = manager ? manager.canChangeState() : false

  // initialise, from manager helper
  useEffect(() => {
    if (manager) {
      // visibility & condition
      updateIfNecessary('visible ', visibleVal, manager.currentVisibleTo(), setVisibleVal)
      updateIfNecessary('condition ', conditionVal, manager.currentCondition(), setConditionVal)

      // whether these plans have already been submitted
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

      // attributes
      updateIfNecessary('attribute types', attributes, collateEditorData(attributeValues, formData.attributes), setAttributes)

      // the command buttons
      updateIfNecessary('upper ', upperPlanningActions, manager.upperActionsFor(), setUpperPlanningActions)
      updateIfNecessary('lower ', lowerPlanningActions, manager.lowerActionsFor(stateIsMobile), setLowerPlanningActions)
    }
  }, [manager, stateIsMobile, conditionVal, attributeValues])

  const handleCommandLocal = (command: PlanningCommands): void => {
    if (manager) {
      manager.handleState(command)
    }
  }

  const conditionHandler = (e: any): void => {
    if (e && e.value !== undefined) {
      // original (RCB) way of presenting conditions
      manager && manager.setCurrentCondition(e.value)
      setConditionVal(e.value)
    } else if (e && e.target && e.target.value) {
      // updated (menu) way of presenting conditions
      manager && manager.setCurrentCondition(e.target.value)
      setConditionVal(e.target.value)
    } else {
      console.warn('Adjudicate form received unexpected condition', e)
    }
  }

  const visibleHandler = (data: Array<ForceData['uniqid']>): void => {
    setVisibleVal(data)
    manager && manager.setCurrentVisibleTo(data)
  }

  const updateIfNecessary = (_name: string, before: any, after: any, doUpdate: { (value: any): void }): void => { // deepscan-disable-line UNUSED_PARAM
    if (!deepCompare(before, after)) {
      // console.log('+ updating ', _name, before, after)
      doUpdate(after)
    } else {
      // console.log('- not updating', _name, before, after)
    }
  }

  /** update the state mobility flag */
  useEffect(() => {
    if (statusVal && manager) {
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

  const openEditModal = (): void => {
    setAttributeEditorOpen(true)
  }

  const closeModal = (): void => {
    setAttributeEditorOpen(false)
  }

  const updateData = (data: AttributeValues): void => {
    setAttributeValues(data)
  }

  return (
    <div className={styles.adjudicate}>
      <AttributeEditor isOpen={attributeEditorOpen} inAdjudication={true} onClose={closeModal} onSave={updateData} attributeTypes={manager && manager.getPlatformDetails().attributeTypes} data={attributes} />
      <TitleWithIcon
        forceColor={icon.forceColor}
        icon={icon.icon}
      >
        {manager && (manager.getContactId() + ' - ')}
        {manager && manager.formHeader}
        {manager &&
          <Badge label={manager.currentPlanningStatus()} />
        }
        {plansSubmittedVal &&
          <div className='sub-title'>(Form disabled, plans submitted)</div>
        }
      </TitleWithIcon>
      {conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <FormGroup title="Player Route" align="right">
          {!formDisabled && upperPlanningActions && upperPlanningActions.map((item) =>
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
            {statusValues.map((s) => (
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
      {attributes && attributes.length > 0 &&
        <FormGroup title="Attributes" titlePosition="absolute">
          <div className={styles.attributelist}>
            {attributes.map((item: AttributeEditorData): ReactElement => {
              const label = item.nameRead + item.valueRead
              return <Badge title={item.description} key={item.attrId} allCaps={false} label={label} />
            })}
            <span className={styles.editattributes}><Button onClick={openEditModal}>Edit</Button></span>
          </div>
        </FormGroup>
      }
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <Forces name="visibleTo" label="" labelPlacement={visibleToValues.length > 2 ? 'top' : 'start'} options={visibleToValues} value={visibleVal} onChange={visibleHandler} />
        </FormGroup>
        <FormGroup title="Condition" align="right">
          <Select
            className={clSelect}
            value={conditionVal}
            onChange={conditionHandler}
          >
            {conditionValues.map((s) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </Select>
        </FormGroup>
      </fieldset>
      <fieldset>
        <FormGroup title="Adjudication" align="right">
          {!formDisabled && lowerPlanningActions && lowerPlanningActions.map((item) =>
            <Button key={item.label} onClick={(): void => handleCommandLocal(item.action)}>{item.label}</Button>
          )}
        </FormGroup>
      </fieldset>
    </div>
  )
}

export default AdjudicateTurnForm
