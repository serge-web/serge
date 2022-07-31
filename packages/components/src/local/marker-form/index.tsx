import { faFill, faTrash } from '@fortawesome/free-solid-svg-icons'
/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, TextField } from '@material-ui/core'
import { Confirm } from '@serge/components'
import { DELETE_MARKER, UPDATE_MARKER } from '@serge/config'
import { IconOption, MapAnnotation } from '@serge/custom-types'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Forces from '../form-elements/forces'
import FormGroup from '../form-elements/form-group'
import Selector from '../form-elements/selector'
import TitleWithIcon from '../form-elements/title-with-icon'
/* Import Context */
import { MapContext } from '../mapping'
import ColorPicker from './color-picker'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const MarkerForm: React.FC<PropTypes> = ({ formData, updateMarker, closeForm }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [formState, setFormState] = useState<MapAnnotation>(formData.value)
  const [anchorElm, setAnchorElm] = useState<HTMLElement | null>(null)
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null

  const { forces, icons = [], iconURL } = formData.populate

  if (!icons.length) {
    console.warn('marker form - marker icons missing:', icons)
  }

  const changeHandler = (formStateValue: any): void => {
    setFormState({ ...formState, ...formStateValue })
  }

  useEffect(() => {
    setFormState(formData.value)
  }, [formData.value.uniqid])

  const typeHandler = (data: string): void => {
    // get the id
    const selectedIcon = icons.find((p: IconOption) => p.uniqid === data)
    setFormState(
      {
        ...formState,
        iconId: (selectedIcon && selectedIcon.uniqid) || ''
      }
    )
  }

  const toggleColorPicker = (e: React.MouseEvent<HTMLDivElement>): void => {
    setAnchorElm(e.currentTarget)
  }

  const submitForm = (): void => {
    updateMarker(UPDATE_MARKER, formState)
  }

  const deleteMarkerHandler = (): void => {
    updateMarker(DELETE_MARKER, formState)
  }

  const toggleDeleteMarker = (): void => setOpen(!isOpen)

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, description: e.target.value })
  }

  const onRadiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, shadeRadius: Number(e.target.value) })
  }

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, label: e.target.value })
  }

  const closeColorPicker = (): void => setAnchorElm(null)

  const changeIconColor = (color: string): void => {
    setFormState({
      ...formState,
      color
    })
    closeColorPicker()
  }

  return <div className={styles.marker}>
    <Confirm
      isOpen={isOpen}
      message='Are you sure you wish to delete this marker?'
      onCancel={toggleDeleteMarker}
      onConfirm={deleteMarkerHandler}
    />
    <ColorPicker anchorElm={anchorElm} onClose={closeColorPicker} switchColor={changeIconColor} />
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
        <Selector label="" name='iconType' options={icons} selected={formState.iconId} updateState={typeHandler} className={styles['input-container']} selectClassName={styles.select} />
      </FormGroup>
      <FormGroup title='icon color' align='right'>
        <div className={styles['icon-color']} onClick={toggleColorPicker}>
          <FontAwesomeIcon icon={faFill} />
          <div className={styles['color-indicator']} style={{ backgroundColor: formState.color }}></div>
        </div>
        <div className={styles['force-color']} style={{ background: formState.color }} onClick={toggleColorPicker} />
      </FormGroup>
      <FormGroup title='Visible to' align='right'>
        <Forces name='visibleTo' label='' labelPlacement={forces.length > 2 ? 'bottom' : 'end'} options={forces} value={formState.visibleTo} onChange={changeHandler} />
      </FormGroup>
      <FormGroup title='Radius' align='right'>
        <TextField type='number' className={styles.radius} InputProps={{ disableUnderline: true }} value={formState.shadeRadius || 0} onInput={onRadiusChange} />
      </FormGroup>
    </fieldset>
    <div className={styles['button-group']}>
      <div onClick={toggleDeleteMarker} className={styles['delete-marker-btn']}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <Button onClick={closeForm} color='default' variant='contained' className={styles.button}>Cancel</Button>
      <Button onClick={submitForm} color='primary' variant='contained' className={styles.button}>Save</Button>
    </div>
  </div>
}

export default MarkerForm
