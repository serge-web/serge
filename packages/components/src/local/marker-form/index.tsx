import { Button, TextField } from '@material-ui/core'
import { UPDATE_MARKER } from '@serge/config'
import { MapAnnotation, MessageUpdateMarker } from '@serge/custom-types'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
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
export const MarkerForm: React.FC<PropTypes> = ({ formData, updateMarker, closeForm }) => {
  const [formState, setFormState] = useState<MapAnnotation>(formData.value)

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null

  const { forces } = formData.populate

  const changeHandler = (formStateValue: any): void => {
    setFormState({ ...formState, ...formStateValue })
  }

  useEffect(() => {
    setFormState({ ...formData.value })
  }, [formData.value])

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
    const payload: MessageUpdateMarker = {
      messageType: UPDATE_MARKER,
      marker: formState
    }
    updateMarker(UPDATE_MARKER, payload)
  }

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, description: e.target.value })
  }

  const onRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, shadeRadius: Number(e.target.value) })
  }

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, label: e.target.value })
  }

  return <div className={styles.marker}>
    <div>
      <TitleWithIcon
        forceColor={formState.color}
        icon={formState.icon}
        onTitleChange={onTitleChange}
      >
        {formState.label}
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <div className={styles.description}>
          <TextField InputProps={{ disableUnderline: true }} fullWidth multiline rowsMax={2} placeholder={'Description'} value={formState.description} onInput={onDescriptionChange} />
        </div>
        <FormGroup title='Visible to' align='right'>
          <RCB name='visibleTo' type='checkbox' force={true} label='' compact={forces.length > 2} options={forces} value={formState.visibleTo} updateState={changeHandler} />
        </FormGroup>
        <FormGroup title='Radius' align='right'>
          <TextField type='number' className={styles.radius} InputProps={{ disableUnderline: true }} value={formState.shadeRadius || 0} onInput={onRadiusChange} />
        </FormGroup>
      </fieldset>
      <div className={styles['button-group']}>
        <Button onClick={closeForm} color='default' variant='contained' className={styles.button}>Canel</Button>
        <Button onClick={submitForm} color='primary' variant='contained' className={styles.button}>Save</Button>
      </div>
    </div>
  </div>
}

export default MarkerForm
