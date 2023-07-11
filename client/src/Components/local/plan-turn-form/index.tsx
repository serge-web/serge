import React, { ReactElement, useEffect, useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { FormGroup, clSelect, clInput } from '../form-elements/form-group'
import Speed from '../form-elements/speed'
import Button from '../atoms/button'
import TitleWithIcon from '../form-elements/title-with-icon'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import { collateEditorData, isNumber } from 'src/Helpers'
import { AttributeEditorData, AttributeType, AttributeValue, AttributeValues, PlanTurnFormValues, Status } from 'src/custom-types'
import Badge from '../atoms/badge'
import AttributeEditor from '../attribute-editor'

/* Render component */
export const PlanTurnForm: React.FC<PropTypes> = ({
  formHeader, formData, canSubmitPlans, setHidePlanningForm,
  turnPlanned, icon, plansSubmitted, deleteEmptyTaskGroup
}) => {
  const [formState, setFormState] = useState<PlanTurnFormValues>(formData.values)
  const [attributes, setAttributes] = useState<AttributeEditorData[]>([])
  const [attributeValues, setAttributeValues] = useState<AttributeValues>(formData.values.attributes)
  const [attributeEditorIsOpen, setAttributeEditorIsOpen] = useState<boolean>(false)

  const { status, speed } = formData.populate
  const { statusVal, turnsVal, speedVal, condition } = formState

  const [speedInitialised, setSpeedInitialised] = useState<boolean>(false)

  // whether the player can edit any of the attributes
  const attributesAreEditable = canSubmitPlans && formData.populate.attributes && formData.populate.attributes.some((value: AttributeType) => value.editableByPlayer)

  const formDisabled: boolean = plansSubmitted || !canSubmitPlans

  // initialise, from manager helper
  useEffect(() => {
    // TODO: the following block is diagnostics, to handle intermittent issue
    // where an attribute type is missing
    attributeValues.forEach((value: AttributeValue) => {
      const aType = formData.populate.attributes.find((item: AttributeType) => value.attrId === item.attrId)
      if (!aType) {
        console.error('missing attribute for ', formHeader, ' attribute ', value.attrId, value.attrType, formData.populate.attributes)
      }
    })

    setAttributes(collateEditorData(attributeValues, formData.populate.attributes))
  }, [attributeValues, formData.populate])

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

  const attributesHandler = (attributes: AttributeValues): void => {
    setAttributeValues(attributes)
    setFormState(
      {
        ...formState,
        attributes: attributes
      }
    )
  }

  const validSpeedVal = speed.includes(speedVal) ? speedVal : speed[0]
  if (!speedInitialised) {
    setSpeedInitialised(true)
    speedHandler(validSpeedVal)
  }

  // Status has a different data model and requires it's own handler
  const statusHandler = (data: any): void => {
    // retrieve the new value
    const newState: string = data.target && data.target.value

    // find the status object for this state
    const selectedStatus = status.find((s: Status) => s.name === newState)

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

  const openEditModal = (): void => {
    setAttributeEditorIsOpen(true)
  }

  const closeModal = (): void => {
    setAttributeEditorIsOpen(false)
  }

  const updateData = (data: AttributeValues): void => {
    attributesHandler(data)
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
    <AttributeEditor isOpen={attributeEditorIsOpen} onClose={closeModal} onSave={updateData} attributeTypes={formData.populate.attributes} data={attributes} />
    <TitleWithIcon
      forceColor={icon.forceColor}
      icon={icon.icon}
    >
      {formHeader}
      {deleteEmptyTaskGroup &&
        <Button onClick={deleteEmptyTaskGroup}>Group Empty - <b>Delete</b></Button>
      }
      {plansSubmitted &&
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
        {status.map((s: Status) => (
          <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
        ))}
      </Select>
    </FormGroup>
    {statusVal.mobile
      ? speed.length > 0 &&
      <FormGroup title="Speed (kts)" titlePosition="absolute">
        <Speed
          value={validSpeedVal}
          options={speed}
          onClick={!formDisabled && speedHandler}
        />
      </FormGroup>
      : <FormGroup title="For">
        <Input className={clInput} disabled={formDisabled} name="turns" value={turnsVal} onChange={changeHandler} />
        <span className={styles.text}>turns</span>
      </FormGroup>
    }
    {attributes && attributes.length > 0 &&
      <FormGroup title="Attributes" titlePosition="absolute">
        <div className={styles.attributelist}>
          {attributes.map((item: AttributeEditorData): ReactElement => {
            const label = item.nameRead + item.valueRead
            return <Badge title={item.description} key={item.attrId} allCaps={false} label={label} />
          })}
          {attributesAreEditable &&
            <span className={styles.editattributes}><Button onClick={openEditModal}>Edit</Button></span>
          }
        </div>
      </FormGroup>
    }
    <FormGroup title="Condition">
      <span className={styles.text}>{condition}</span>
    </FormGroup>
    {!formDisabled &&
      <Button disabled={!saveEnabled} onClick={submitForm}>{statusVal.mobile ? 'Plan turn' : 'Next Turn'}</Button>
    }
  </div>
}

export default PlanTurnForm
