import React, { useState, useContext, useEffect } from 'react'

/* Import Types */
import PropTypes from './types/props'
import Form from '../form'
import { Button } from '@material-ui/core'
import Selector from '../form-elements/selector'
import RCB from '../form-elements/rcb'
import TextInput from '../atoms/text-input'
import { ForceOption, MessagePerceptionOfContact, PerceivedType, PerceptionFormValues } from '@serge/custom-types'

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
  const { perceivedNameVal } = formState
  const typeStrings: string[] = perceivedTypes.map((p: PerceivedType): string => p.name)

  // add 'unknown' to the list of types
  const unknownStr = 'unknown'
  typeStrings.push(unknownStr)

  const perceivedForce = perceivedForces.find((force: ForceOption) => force.id === formState.perceivedForceId || null)
  const perceivedForceName = perceivedForce ? perceivedForce.name : 'Unknown'

  /** the forces from props has changed */
  useEffect(() => {
    if (formState.perceivedTypeId) {
      const typeDetails = perceivedTypes.find((p: PerceivedType) => p.uniqid === formState.perceivedTypeId)
      if (typeDetails) {
        if (typeName !== typeDetails.name) {
          setTypeName(typeDetails.name)
        }
      } else {
        throw new Error('failed to find platform type' + formState.perceivedTypeId)
      }
    } else {
      if (typeName !== unknownStr) {
        setTypeName(unknownStr)
      }
    }
  }, [formState])

  const nameHandler = (e: HTMLInputElement): void => {
    const { value } = e
    setFormState(
      {
        ...formState,
        perceivedNameVal: value
      }
    )
  }

  const forceHandler = (e: HTMLInputElement): void => {
    const { value } = e
    const force = perceivedForces.find((force: ForceOption) => force.name === value)
    setFormState(
      {
        ...formState,
        perceivedForceId: force && force.id ? force.id : undefined
      }
    )
  }

  const typeHandler = (data: string): void => {
    // get the id
    const typeDetails = perceivedTypes.find((p: PerceivedType) => p.name === data)
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
      const force = perceivedForces.find((force: ForceOption) => force.name === perceivedForceName)
      const payload: MessagePerceptionOfContact = {
        // generate force id from force name
        messageType: PERCEPTION_OF_CONTACT,
        perception: {
          by: playerForce,
          force: force && force.id ? force.id : undefined,
          typeId: formState.perceivedTypeId,
          name: formState.perceivedNameVal
        },
        assetId: formState.assetId
      }
      console.log('state', payload)
      mapPostBack(PERCEPTION_OF_CONTACT, payload, channelID)
    }
  }

  return <div>
    <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''} formHeaderClassName={styles['form-header']}>
      <div className={styles['asset-icon']}>
        <GetIcon color={formState.perceivedForceColor} isSelected={false} imageSrc={formState.iconURL} />
      </div>
      <fieldset className={styles.fieldset}>
        <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={nameHandler} className={styles['input-container']} placeholder={'Enter name here'} />
        <Selector label="Percieved Type" name='perceivedType' options={typeStrings} selected={typeName} updateState={typeHandler} className={styles['input-container']} selectClassName={styles.select} />
        <RCB type="radio" force={true} label="Perceived Force" name={'perceivedForce'} options={perceivedForces} value={perceivedForceName || ''} updateState={forceHandler} className={styles['input-container']} />
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default PerceptionForm
