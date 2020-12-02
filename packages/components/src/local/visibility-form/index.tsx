import React, { useState }  from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
// import Selector from '../form-elements/selector'
 import RCB from '../form-elements/rcb'
// import TextInput from '../atoms/text-input'
 import { ColorOption } from '@serge/custom-types'
import TitleWithIcon from '../form-elements/title-with-icon'
import FormGroup from '../form-elements/form-group'

/* Import Stylesheet */
import styles from './styles.module.scss'
//  import cx from 'classnames'

/* Render component */
export const VisibilityForm: React.FC<PropTypes> = ({ formHeader, formData, icon, channelID, postBack }) => {
  const [visibleTo , setVisibleTo] = useState<Array<string>>(formData.values)
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
    <Form type="visibility" headerText={formHeader || 'Set visibility'} formHeaderClassName={styles['form-header']}>
    <TitleWithIcon
        forceColor={icon.forceColor}
        platformType={icon.platformType}
      >
        { formHeader }
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <RCB name="visibleTo" type="checkbox" force={true} label="" compact={true} options={forces} value={visibleTo} updateState={changeHandler} />
        </FormGroup>
      </fieldset> 
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default VisibilityForm
