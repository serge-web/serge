import { Button } from '@material-ui/core'
import { PERCEPTION_OF_CONTACT, UNKNOWN_TYPE } from 'src/config'
import { ForceData, ForceOption, MessagePerceptionOfContact, PerceivedType, PerceptionFormValues } from 'src/custom-types'
import React, { useContext, useEffect, useState } from 'react'
import AssetIcon from '../asset-icon'
import TextInput from '../atoms/text-input'
import Form from '../form'
import Forces from '../form-elements/forces'
import Selector from '../form-elements/selector'
/* Import Context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

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
  const unknownStr = UNKNOWN_TYPE
  typeStrings.push(unknownStr)

  const perceivedForce = perceivedForces.find((force: ForceOption) => force.id === formState.perceivedForceId || null)
  const perceivedForceName = perceivedForce ? perceivedForce.name : UNKNOWN_TYPE
  const perceivedForceId = perceivedForce && perceivedForce.id

  /** the forces from props has changed */
  useEffect(() => {
    if (formState.perceivedTypeId && formState.perceivedTypeId !== UNKNOWN_TYPE) {
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

  const forceHandler = (data: Array<ForceData['uniqid']>): void => {
    // ok. We need to find which is the new selection
    const newItem = data.find((id: string) => id !== formState.perceivedForceId)
    const force = perceivedForces.find((force: ForceOption) => force.id === newItem)
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
      mapPostBack(PERCEPTION_OF_CONTACT, payload, channelID)
    }
  }

  return <div>
    <Form type="perceived-as" headerText={perceivedNameVal || formHeader || ''} formHeaderClassName={styles['form-header']}>
      <div className={styles['asset-icon']}>
        <AssetIcon color={formState.perceivedForceColor} isSelected={false} imageSrc={formState.iconURL} />
      </div>
      <fieldset className={styles.fieldset}>
        <TextInput label="Perceived Name" name="perceivedName" value={perceivedNameVal} updateState={nameHandler} className={styles['input-container']} placeholder={'Enter name here'} />
        <Selector label="Percieved Type" name='perceivedType' options={typeStrings} selected={typeName} updateState={typeHandler} className={styles['input-container']} selectClassName={styles.select} />
        <Forces label="Perceived Force" name={'perceivedForce'} labelPlacement='top' options={perceivedForces} value={[perceivedForceId || '']} onChange={forceHandler} className={styles['input-container']} />
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </Form>
  </div>
}

export default PerceptionForm
