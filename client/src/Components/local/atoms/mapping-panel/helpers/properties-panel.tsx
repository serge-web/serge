import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, Fragment } from 'react'
import styles from '../styles.module.scss'
import { ProppertiesPanelProps } from '../types/props'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Checkbox, ListItemText } from '@material-ui/core'

const PropertiesPanel: React.FC<ProppertiesPanelProps> = ({ selectedProp, onPropertiesChange, onRemoveFilter, disableIdEdit }) => {
  return <Fragment>
    {
      Object.keys(selectedProp).map((key, kIdx) => {
        const { value, choices } = selectedProp[key]
  
        if ((key === 'lat')) {
          const latValue = selectedProp.lat.value
          const lngValue = selectedProp.lng.value
          return <div key={key + kIdx} className={styles.itemsBox}>
            <p>Lat/Lng:</p>
            <div className={styles.latLng}>
              <input style={{ width: '49%' }} value={latValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange('lat', e.target.value)} />
              <input style={{ width: '49%' }} value={lngValue} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange('lng', e.target.value)} />
            </div>
          </div>
        }

        if (key === 'lng') {
          return <Fragment key={key + kIdx}></Fragment>
        }

        // check if this is the id property (since we don't allow that to be edited)
        const isId = key === 'id'
       
        return <div key={key + kIdx} className={styles.itemsBox}>
          <p>{key}:</p>
          <div>
            {choices.length > 0
              ? <Select
                className={styles['multi-select']}
                value={Array.isArray(value) ? value : [value]}
                multiple={true} // do we need to dynamic this property?
                onChange={e => { onPropertiesChange(key, e.target.value as string) }}
                renderValue={(selected: unknown) => {
                  const selStr = selected as string[]
                  return selStr.join(', ')
                }}
              >
                {choices.map((o: string) => <MenuItem key={o} value={o} className={styles['menu-item']}>
                  <Checkbox name={o} checked={value.includes(o)} />
                  <ListItemText primary={o} />
                </MenuItem>)}
              </Select>
              : <input value={value} disabled={disableIdEdit && isId} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange(key, e.target.value)} />
            }
          </div>
          {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
        </div>
      })
    }
  </Fragment>
}

export default PropertiesPanel
