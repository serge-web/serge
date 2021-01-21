import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import { ColorOption, MessageVisibilityChanges, Visibility } from '@serge/custom-types'
import TitleWithIcon from '../form-elements/title-with-icon'
import FormGroup from '../form-elements/form-group'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { VISIBILITY_CHANGES } from '@serge/config'

/* Render component */
export const VisibilityForm: React.FC<PropTypes> = ({ formData, icon, channelID, mapPostBack }) => {
  const [visibleTo, setVisibleTo] = useState<Array<string>>(formData.values)
  const forces: Array<ColorOption> = formData.populate

  const changeHandler = (e: any): void => {
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
          assetId: formData.assetId,
          by: item,
          newVis: false
        }
        res.push(vis)
      })
      // or revealed
      visibleTo.filter(item => !originalVis.includes(item)).forEach(item => {
        const vis: Visibility = {
          assetId: formData.assetId,
          by: item,
          newVis: true
        }
        res.push(vis)
      })
      const message: MessageVisibilityChanges = {
        messageType: VISIBILITY_CHANGES,
        visibility: res
      }
      mapPostBack(VISIBILITY_CHANGES, message, channelID)
    }
  }

  return <div>
    <div className={styles.visibility}>
      <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        { formData.name }
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <RCB name="visibleTo" type="checkbox" force={true} label="" compact={true} options={forces} value={visibleTo} updateState={changeHandler} />
        </FormGroup>
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </div>
  </div>
}

export default VisibilityForm
