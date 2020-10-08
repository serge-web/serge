import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'

/* Import components */
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, channelID, postBack, plansSubmitted }) => {
  const [formState, setFormState] = useState(formData.values)

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
    const { name, value } = data

    const selectedStatus = status.find((s: any) => s.name === value)

    updateState({
      name,
      value: selectedStatus
    })
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
    <Form type="adjudication" headerText={formHeader} >
      { plannedRouteStatusVal === 'accepted' && <span> Reviewed </span>}
      {/* Don't provide accept/reject state if platform destroyed, allow for all other states */}
      { conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <PlannedRoute name="plannedRouteStatus" status={plannedRouteStatusVal} updateState={clickHandler} />
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
            <div>Status: {statusVal.name}</div>
            <div>Speed (kts): {speedVal}</div>
          </>
        }
      </fieldset>
      }
      <fieldset>
        <RCB type="checkbox" force={true} label="Visible to" options={visibleTo} value={visibleToVal} updateState={changeHandler}/>
        <hr />
        <RCB type="radio" label="Condition" options={condition} value={conditionVal} updateState={changeHandler}/>
      </fieldset>
      <Button disabled={plansSubmitted} onClick={submitForm}>Save</Button>
    </Form>
  )
}

export default AdjudicateTurnForm
