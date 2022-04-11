import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { Button, Select, MenuItem } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import { ColorOption, MessageVisibilityChanges, Visibility } from '@serge/custom-types'
import TitleWithIcon from '../form-elements/title-with-icon'
import { FormGroup, clSelect } from '../form-elements/form-group'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { VISIBILITY_CHANGES } from '@serge/config'

/* Render component */
export const VisibilityAndConditionForm: React.FC<PropTypes> = ({ formData, icon, channelID, mapPostBack }) => {
  const [visibleTo, setVisibleTo] = useState<Array<string>>(formData.values)
  const [conditionVal, setConditionVal] = useState<string>(formData.selectedCondition)
  const forces: Array<ColorOption> = formData.populate
  const conditionValues: Array<string> = formData.condition

  const changeHandler = (e: any): void => {
    console.log('change vis', e.value)
    setVisibleTo(e.value)
  }
  const submitForm = (): void => {
    if (mapPostBack !== undefined) {
      const originalVis: string[] = formData.values
      // collate list of visibility changes
      const res: Visibility[] = []
      // see if any forces have been hidden
      originalVis.filter(item => !visibleTo.includes(item)).forEach(item => {
        const vis: Visibility = {
          by: item,
          newVis: false
        }
        res.push(vis)
      })
      // or revealed
      visibleTo.filter(item => !originalVis.includes(item)).forEach(item => {
        const vis: Visibility = {
          by: item,
          newVis: true
        }
        res.push(vis)
      })
      // TODO: the `res` payload value here currently contains force names. It should contain
      // force id's
      const message: MessageVisibilityChanges = {
        assetId: formData.assetId,
        messageType: VISIBILITY_CHANGES,
        visibility: res
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
        { formData.contactId + ' -  ' + formData.name }
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <RCB name="visibleTo" type="checkbox" force={true} label="" compact={forces.length > 2} options={forces} value={visibleTo} updateState={changeHandler} />
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
