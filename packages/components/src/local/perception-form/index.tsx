import React, { useState, useContext } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Selector from '../form-elements/selector'
import RCB from '../form-elements/rcb'
import TextInput from '../atoms/text-input'
import { MessagePerceptionOfContact, PerceptionFormValues } from '@serge/custom-types'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { PERCEPTION_OF_CONTACT } from '@serge/config'
import { GetIcon } from '../asset-icon'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, channelID, mapPostBack }) => {
  const [formState, setFormState] = useState<PerceptionFormValues>(formData.values)
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { playerForce } = props

  const { perceivedForce, perceivedType } = formData.populate
  const { perceivedNameVal, perceivedForceVal, perceivedTypeVal } = formState

  const changeHandler = (e: any): void => {
    const { name, value } = e
    setFormState(
      {
        ...formState,
        [`${name}Val`]: value
      }
    )
  }

  const selectHandler = (data: string): void => {
    setFormState(
      {
        ...formState,
        perceivedTypeVal: data
      }
    )
  }

  const submitForm = (): void => {
    if (mapPostBack !== undefined) {
      const payload: MessagePerceptionOfContact = {
        messageType: PERCEPTION_OF_CONTACT,
        perception: {
          by: playerForce,
          force: formState.perceivedForceVal,
          type: formState.perceivedTypeVal,
          name: formState.perceivedNameVal
        },
        assetId: formState.assetId
      }
      mapPostBack(PERCEPTION_OF_CONTACT, payload, channelID)
    }
  }

  console.log('image in perceptiojn', formState.iconURL)

  return <div>
    <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''} formHeaderClassName={styles['form-header']}>
      <div className={styles['asset-icon']}>
          <GetIcon icType={formState.perceivedTypeVal} color={formState.perceivedForceVal} isSelected={false} imageSrc={formState.iconURL} />
      </div>
      {/* <span className={cx(styles['asset-icon'], styles[`platform-type-${type}`], force ? styles[force] : '')} /> */}
      <fieldset className={styles.fieldset}>
        <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={changeHandler} className={styles['input-container']} placeholder={'Enter name here'} />
        <Selector label="Percieved Type" name='perceivedType' options={perceivedType} selected={perceivedTypeVal} updateState={selectHandler} className={styles['input-container']} selectClassName={styles.select} />
        <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForce} value={perceivedForceVal} updateState={changeHandler} className={styles['input-container']} />
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default PerceptionForm
