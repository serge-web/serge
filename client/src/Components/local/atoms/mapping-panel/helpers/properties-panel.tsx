/* eslint-disable complexity */
import React, { ChangeEvent, Fragment, useState } from 'react'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, ListItemText, MenuItem, Select } from '@material-ui/core'
import SIDCGenerator from '../../../molecules/sidc-generator'
import styles from '../styles.module.scss'
import { ProppertiesPanelProps, SelectedProps } from '../types/props'
import { PropertyType } from 'src/custom-types'

const componentFor = (
  key: string,
  prop: SelectedProps,
  propertyType: PropertyType,
  value: any,
  disableIdEdit: boolean,
  disabled: boolean,
  isId: boolean,
  onPropertiesChange: any
): React.ReactNode => {
  switch (propertyType.type) {
    case 'StringProperty': {
      if (propertyType.lines && propertyType.lines > 0) {
        return <textarea value={value} disabled={disabled || (disableIdEdit && isId)} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onPropertiesChange(key, e.target.value)} rows={propertyType.lines} />
      } else {
        return <input value={value} disabled={disabled || (disableIdEdit && isId)} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange(key, e.target.value)} />
      }
    }
    case 'EnumProperty': {
      return (
        <select disabled={disabled} value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
          {(propertyType.choices || []).map((o: string) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )
    }

    case 'NumberProperty': {
      return <input type='number' value={value} disabled={disabled || (disableIdEdit && isId)} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange(key, e.target.value)} />
    }
    default: {
      console.warn('Failed to generate component for ' + prop.type)
      return <></>
    }
  }
}

const PropertiesPanel: React.FC<ProppertiesPanelProps> = ({ selectedProp, onPropertiesChange, onRemoveFilter, checkSidc, disableIdEdit, rendererProps, multipleSelect, disabled = false, selectedRenderer }) => {
  const [isSIDCDialogOpen, setSIDCDialogOpen] = useState(false)

  const openSIDCGenerator = () => setSIDCDialogOpen(true)
  const closeSIDCGenerator = () => setSIDCDialogOpen(false)

  const renderSpecialPropertyComponent = (key: string, field: SelectedProps, prop: PropertyType, value: any, isId: boolean) => {
    // ok, create dedicated  component for this property
    const title = prop.description && prop.description.length > 0 ? prop.description : 'jimno'
    return (
      <div key={key} className={styles.itemsBox} title={title}>
        <p>{prop.label || key}:</p>
        <div>
          {componentFor(key, field, prop, value, disableIdEdit, disabled || field.disabled, isId, onPropertiesChange)}
        </div>
        {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)} />}
      </div>
    )
  }

  const renderDefaultPropertyComponent = (key: string, field: SelectedProps, value: any, isId: boolean) => (
    // nope, determine component to use by looking at the data
    <div key={key} className={styles.itemsBox}>
      <p>{selectedProp[key].label || key}:</p>
      <div className={styles.inputBox}>
        {
          field.choices.length > 0
            ? (
              <Select
                className={styles['multi-select']}
                value={Array.isArray(value) ? value : [value]}
                multiple={multipleSelect}
                onChange={(e) => {
                  onPropertiesChange(key, e.target.value as string)
                }}
                renderValue={(selected) => {
                  const selectedValues = selected as string[]
                  return selectedValues.join(', ')
                }}
              >
                {field.choices.map((option: string) => (
                  <MenuItem key={option} value={option} className={styles['menu-item']}>
                    <Checkbox name={option} checked={value.includes(option)} />
                    <ListItemText primary={option} />
                  </MenuItem>
                ))}
              </Select>
            )
            : (
              <input value={value} disabled={disableIdEdit && isId} onChange={(e) => onPropertiesChange(key, e.target.value)} />
            )
        }
        {key === 'sidc' && !disabled && (
          <>
            <button style={ { border: !checkSidc ? 'solid 2px red' : '' }} className={styles.sidcbtn} onClick={openSIDCGenerator}>
              Edit
            </button>
            {isSIDCDialogOpen && <SIDCGenerator onClose={closeSIDCGenerator} sidcValue={value} onSave={(value) => onPropertiesChange(key, value)} />}
          </>
        )}
      </div>
      {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)} />}
    </div>
  )

  return (
    <Fragment>
      {Object.keys(selectedProp).map((key, kIdx) => {
        const field = selectedProp[key]
        const { value } = field
        // now the remaining cases
        // check if this is the id property (since we don't allow that to be edited)
        const isId = key === 'id'
        // look for this id in the rendererProps. If present, use that to decide how to construct
        // the edit component (especially textarea when `lines` present).  If no reendererProps present
        // then use existing data-driven approach.

        // 1. if a `description` is provided, use that as a tooltip.
        // 2. if it's a StringProperty and `lines` is present, use a textarea
        // 3. if it's a StringProperty and empty, show `description` in grey default text (not sure what that UI
        //    practice is called)
        const prop: PropertyType | undefined = rendererProps?.find((p) => p.id === key && p.renderer === selectedRenderer)
        if (key === 'lat') {
          const latValue = selectedProp.lat.value
          const lngValue = selectedProp.lng.value
          return (
            // nope, determine component to use by looking at the data
            <div key={key + kIdx} className={styles.itemsBox}>
              <p>Lat/Lng:</p>
              <div className={styles.latLng}>
                <input type='number' style={{ width: '49%' }} value={latValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange('lat', e.target.value)} />
                <input type='number' style={{ width: '49%' }} value={lngValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange('lng', e.target.value)} />
              </div>
            </div>
          )
        }

        if (key === 'lng') {
          return <Fragment key={key + kIdx}></Fragment>
        }
        // do we have enough detail to do special formatting?
        return prop
          ? renderSpecialPropertyComponent(key, field, prop, value, isId)
          : renderDefaultPropertyComponent(key, field, value, isId)
      })}
    </Fragment>
  )
}

export default PropertiesPanel
