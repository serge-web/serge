import React, { useState, useContext } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Selector from '../form-elements/selector'
import RCB from '../form-elements/rcb'
import TextInput from '../atoms/text-input'
import { MessagePerceptionOfContact, PerceivedType, PerceptionFormValues } from '@serge/custom-types'

/* Import Context */
import { MapContext } from '../mapping'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { PERCEPTION_OF_CONTACT } from '@serge/config'
import { GetIcon } from '../asset-icon'

/* Render component */
export const PerceptionForm: React.FC<PropTypes> = ({ formHeader, formData, channelID, mapPostBack }) => {
  const [formState, setFormState] = useState<PerceptionFormValues>(formData.values)

  const [typeName, setTypeName] = useState<string>('')

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { playerForce } = props

  const { perceivedForces, perceivedTypes } = formData.populate
  const { perceivedNameVal, perceivedForceVal, perceivedTypeId } = formState
  const typeStrings: string[] = perceivedTypes.map((p: PerceivedType): string => p.name)

  const unknownStr = 'unknown'
  typeStrings.push(unknownStr)

  if(formState) {
    const typeDetails = perceivedTypes.find((p: PerceivedType) => {p.uniqid === formState.perceivedTypeId})
    if (typeDetails) {
      setTypeName(typeDetails.name)
    }
  }

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
    // get the id
    const typeDetails = perceivedTypes.find((p: PerceivedType) => {p.name === data})
    const typeId = data === unknownStr ? undefined : typeDetails && typeDetails.uniqid
    setFormState(
      {
        ...formState,
        perceivedTypeId: typeId
      }
    )
    setTypeName(data) 
  }

  const submitForm = (): void => {
    if (mapPostBack !== undefined) {
      const payload: MessagePerceptionOfContact = {
        messageType: PERCEPTION_OF_CONTACT,
        perception: {
          by: playerForce,
          force: formState.perceivedForceVal,
          typeId: formState.perceivedTypeId,
          name: formState.perceivedNameVal
        },
        assetId: formState.assetId
      }
      mapPostBack(PERCEPTION_OF_CONTACT, payload, channelID)
    }
  }

  console.log('perception', formState.iconURL, perceivedTypeId, perceivedTypes)

  return <div>
    <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''} formHeaderClassName={styles['form-header']}>
      <div className={styles['asset-icon']}>
        <GetIcon icType={typeName} color={formState.perceivedForceVal} isSelected={false} imageSrc={formState.iconURL} />
      </div>
      <fieldset className={styles.fieldset}>
        <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={changeHandler} className={styles['input-container']} placeholder={'Enter name here'} />
        <Selector label="Percieved Type" name='perceivedType' options={typeStrings} selected={typeName} updateState={selectHandler} className={styles['input-container']} selectClassName={styles.select} />
        <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForces} value={perceivedForceVal} updateState={changeHandler} className={styles['input-container']} />
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default PerceptionForm
