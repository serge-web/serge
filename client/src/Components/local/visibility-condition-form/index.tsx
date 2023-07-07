import React, { useState } from 'react'

/* Import Types */
import { Button, MenuItem, Select } from '@material-ui/core'
import { ForceData, ForceOption, MessageVisibilityChanges, Visibility } from 'src/custom-types'
import { clSelect, FormGroup } from '../form-elements/form-group'
import TitleWithIcon from '../form-elements/title-with-icon'
import PropTypes from './types/props'

/* Import Stylesheet */
import { VISIBILITY_CHANGES } from '@serge/config'
import Forces from '../form-elements/forces'
import styles from './styles.module.scss'

/* Render component */
export const VisibilityAndConditionForm: React.FC<PropTypes> = ({ formData, icon, channelID, mapPostBack }) => {
  const [visibleTo, setVisibleTo] = useState<Array<ForceData['uniqid']>>(formData.visibleToForces)
  const [conditionVal, setConditionVal] = useState<string>(formData.selectedCondition)
  const forces: Array<ForceOption> = formData.availableForces
  const conditionValues: Array<string> = formData.condition

  const changeHandler = (data: Array<ForceData['uniqid']>): void => {
    setVisibleTo(data)
  }

  const submitForm = (): void => {
    if (mapPostBack !== undefined) {
      const originalVis: string[] = formData.visibleToForces

      // see if any forces have been hidden
      const hidden = originalVis.filter(item => !visibleTo.includes(item)).map((item: string): Visibility => {
        // get the force id for this name
        const force = forces.find((value: ForceOption) => value.name === item)
        return {
          by: (force && force.id) || '',
          newVis: false
        }
      })

      // or revealed
      const revealed = visibleTo.filter(item => !originalVis.includes(item)).map((item: string): Visibility => {
        // get the force id for this name
        const force = forces.find((value: ForceOption) => value.name === item)
        return {
          by: (force && force.id) || '',
          newVis: true
        }
      })
      const changes = hidden.concat(revealed)
      // TODO: the `res` payload value here currently contains force names. It should contain
      // force id's
      const message: MessageVisibilityChanges = {
        assetId: formData.assetId,
        messageType: VISIBILITY_CHANGES,
        visibility: changes
      }
      if (formData.selectedCondition !== conditionVal) {
        message.condition = conditionVal
      }
      mapPostBack(VISIBILITY_CHANGES, message, channelID)
    }
  }

  const conditionHandler = (e: any): void => {
    if (e && e.value !== undefined) {
      setConditionVal(e.value)
    } else if (e && e.target && e.target.value) {
      setConditionVal(e.target.value)
    } else {
      console.warn('Visibility form received unexpected condition', e)
    }
  }

  return <div>
    <div className={styles.visibility}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        icon={icon.icon}
      >
        {formData.contactId + ' -  ' + formData.name}
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <Forces name="visibleTo" label="" labelPlacement={forces.length > 2 ? 'top' : 'start'} options={forces} value={visibleTo} onChange={changeHandler} />
        </FormGroup>
        <FormGroup title="Condition" align="right">
          <Select
            className={clSelect}
            value={conditionVal}
            onChange={conditionHandler}
          >
            {conditionValues.map((s: any) => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </Select>
        </FormGroup>
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </div>
  </div>
}

export default VisibilityAndConditionForm
