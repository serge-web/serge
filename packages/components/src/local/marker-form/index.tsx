import { Button, TextField } from '@material-ui/core'
import { UPDATE_MARKER } from '@serge/config'
import { IconOption, MapAnnotation, MessageUpdateMarker } from '@serge/custom-types'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import FormGroup from '../form-elements/form-group'
import RCB from '../form-elements/rcb'
import Selector from '../form-elements/selector'
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
  const [iconName, setIconName] = useState<string>('')
  const [iconURL, setIconURL] = useState<string>(formState.iconId)

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null

  const { forces, icons } = formData.populate

  const iconNames: string[] = icons ? icons.map((p: IconOption): string => p.name) : []

  const changeHandler = (formStateValue: any): void => {
    setFormState({ ...formState, ...formStateValue })
  }

  useEffect(() => {
    setFormState({ ...formData.value })
  }, [formData.value])

  useEffect(() => {
    // get the id
    const selectedIcon = icons.find((p: IconOption) => p.uniqid === formState.iconId)
    const iconName = (selectedIcon && selectedIcon.name) || ''
    const iconURL = (selectedIcon && selectedIcon.icon) || ''
    setIconName(iconName)
    setIconURL(iconURL)
  }, [formState.iconId])

  const typeHandler = (data: string): void => {
    // get the id
    const selectedIcon = icons.find((p: IconOption) => p.name === data)
    setFormState(
      {
        ...formState,
        iconId: (selectedIcon && selectedIcon.uniqid) || ''
      }
    )
  }

  const toggleColorPicker = () => {
    console.warn('open color editor')
    // make some forced change
    setFormState({
      ...formState,
      color: '#0f3'
    })
  }

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
        icon={iconURL}
        onTitleChange={onTitleChange}
      >
        {formState.label}
      </TitleWithIcon>
      <fieldset className={styles.fieldset}>
        <div className={styles.description}>
          <TextField InputProps={{ disableUnderline: true }} fullWidth multiline rowsMax={2} placeholder={'Description'} value={formState.description} onInput={onDescriptionChange} />
        </div>
        <FormGroup title='icon type' align='right'>
          <Selector label="" name='iconType' options={iconNames} selected={iconName} updateState={typeHandler} className={styles['input-container']} selectClassName={styles.select} />
        </FormGroup>
        <FormGroup title='icon color' align='right'>
          <div className={styles['force-color']} style={{ background: formState.color }} onClick={toggleColorPicker} />
        </FormGroup>
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
