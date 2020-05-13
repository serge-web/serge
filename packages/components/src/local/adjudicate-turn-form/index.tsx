import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import PlannedRoute from '../form-elements/planned-route'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import ForcePicker from '../form-elements/force-picker'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import helpers */
import { isNumber } from '@serge/helpers'

/* Render component */
export const AdjudicateTurnForm: React.FC<PropTypes> = ({ formHeader, formData, postBack }) => {
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
      postBack(formState)
    }
  }

  return (
    <Form type="adjudication" headerText={formHeader} >
      { plannedRouteStatusVal === 'accepted' && <span> Reviewed </span>}
      { conditionVal.toLowerCase() !== 'destroyed' && <fieldset>
        <PlannedRoute name="plannedRouteStatus" status={plannedRouteStatusVal} updateState={clickHandler} />
        {
          plannedRouteStatusVal === 'rejected' && <div>
            <RCB type="radio" label="Status" options={status} value={statusVal} updateState={changeHandler}/>
            { statusVal.toLowerCase() !== 'moored' && <RCB type="radio" label="Speed (kts)" name="speed" options={speed} value={speedVal} updateState={changeHandler}/> }
          </div>
        }
        {
          plannedRouteStatusVal !== 'rejected' && <>
            <div>Status: {statusVal}</div>
            <div>Speed (kts): {speedVal}</div>
          </>
        }
      </fieldset>
      }
      <fieldset>
        <ForcePicker label="Visible to" options={visibleTo} selected={visibleToVal} updateState={changeHandler}/>
        <hr />
        <RCB type="radio" label="Condition" options={condition} value={conditionVal} updateState={changeHandler}/>
      </fieldset>
      <Button onClick={submitForm}>Save</Button>
    </Form>
  )
}

export default AdjudicateTurnForm
