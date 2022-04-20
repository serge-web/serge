import { Button } from '@material-ui/core'
import { MapAnnotation } from '@serge/custom-types'
import React, { useContext, useState } from 'react'
import FormGroup from '../form-elements/form-group'
import RCB from '../form-elements/rcb'
import TitleWithIcon from '../form-elements/title-with-icon'
/* Import Context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const MarkerForm: React.FC<PropTypes> = ({ formData, mapPostBack }) => {
  const [formState, setFormState] = useState<MapAnnotation>(formData.value)

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null

  const { forces } = formData.populate

  const changeHandler = (e: any): void => {
    setFormState(formState)
    console.log('marker form', e)
    //  setVisibleTo(e.value)
  }

  // /** the forces from props has changed */
  // useEffect(() => {
  //   if (formState.perceivedTypeId && formState.perceivedTypeId !== UNKNOWN_TYPE) {
  //     const typeDetails = perceivedTypes.find((p: PerceivedType) => p.uniqid === formState.perceivedTypeId)
  //     if (typeDetails) {
  //       if (typeName !== typeDetails.name) {
  //         setTypeName(typeDetails.name)
  //       }
  //     } else {
  //       throw new Error('failed to find platform type' + formState.perceivedTypeId)
  //     }
  //   } else {
  //     if (typeName !== unknownStr) {
  //       setTypeName(unknownStr)
  //     }
  //   }
  // }, [formState])

  // const nameHandler = (e: HTMLInputElement): void => {
  //   const { value } = e
  //   setFormState(
  //     {
  //       ...formState,
  //       perceivedNameVal: value
  //     }
  //   )
  // }

  // const forceHandler = (e: HTMLInputElement): void => {
  //   const { value } = e
  //   const force = perceivedForces.find((force: ForceOption) => force.name === value)
  //   setFormState(
  //     {
  //       ...formState,
  //       perceivedForceId: force && force.id ? force.id : undefined
  //     }
  //   )
  // }

  // const typeHandler = (data: string): void => {
  //   // get the id
  //   const typeDetails = perceivedTypes.find((p: PerceivedType) => p.name === data)
  //   const typeId = data === unknownStr ? undefined : typeDetails && typeDetails.uniqid
  //   setFormState(
  //     {
  //       ...formState,
  //       perceivedTypeId: typeId
  //     }
  //   )
  //   setTypeName(data)
  // }

  const submitForm = (): void => {
    if (mapPostBack !== undefined) {
      // const force = perceivedForces.find((force: ForceOption) => force.name === perceivedForceName)
      // const payload: MessagePerceptionOfContact = {
      //   // generate force id from force name
      //   messageType: PERCEPTION_OF_CONTACT,
      //   perception: {
      //     by: playerForce,
      //     force: force && force.id ? force.id : undefined,
      //     typeId: formState.perceivedTypeId,
      //     name: formState.perceivedNameVal
      //   },
      //   assetId: formState.assetId
      // }
      // console.log('state', payload)
      // mapPostBack(PERCEPTION_OF_CONTACT, payload, channelID)
    }
  }

  return <div className={styles.marker}>
    <div>
      <TitleWithIcon
        forceColor={formState.color}
        icon={formState.icon}
      >
        { formData.value.label }
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <FormGroup title="Visible to" align="right">
          <RCB name="visibleTo" type="checkbox" force={true} label="" compact={forces.length > 2} options={forces} value={formState.visibleTo} updateState={changeHandler} />
        </FormGroup>
      </fieldset>
      <Button onClick={submitForm} className={styles.button}>Save</Button>
    </div>
  </div>
}

export default MarkerForm
