import React, { useState } from 'react'

/* Import Types */
import PropTypes from './types/props'
import { Button } from '@material-ui/core'
import RCB from '../form-elements/rcb'
import { ColorOption } from '@serge/custom-types'
import TitleWithIcon from '../form-elements/title-with-icon'
import FormGroup from '../form-elements/form-group'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const VisibilityForm: React.FC<PropTypes> = ({ formData, icon, channelID, postBack }) => {
  const [visibleTo, setVisibleTo] = useState<Array<string>>(formData.values)
  const forces: Array<ColorOption> = formData.populate

  const changeHandler = (e: any): void => {
    setVisibleTo(e.value)
  }
  const submitForm = (): void => {
    if (postBack !== undefined) {
      console.log(visibleTo)
      const payload = {
        values: {
          visibleTo: visibleTo
        },
        assetId: formData.assetId
      }
      postBack('perception', payload, channelID)
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
