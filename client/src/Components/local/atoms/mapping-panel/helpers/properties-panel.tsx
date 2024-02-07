import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, Fragment } from 'react'
import styles from '../styles.module.scss'
import { ProppertiesPanelProps } from '../types/props'

const PropertiesPanel: React.FC<ProppertiesPanelProps> = ({ selectedProp, onPropertiesChange, onRemoveFilter }) => {
  return <Fragment>
    {
      Object.keys(selectedProp).map((key, kIdx) => {
        // do not allow to edit id field
        if (key === 'id' && !onRemoveFilter) {
          return null
        }
        
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
       
        return <div key={key + kIdx} className={styles.itemsBox}>
          <p>{key}:</p>
          <div>
            {choices.length > 0
              ? <select value={value} onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
                {choices.map((o: string) => (<option key={o} value={o}>{o}</option>))}
              </select>
              : <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange(key, e.target.value)} />
            }
          </div>
          {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
        </div>
      })
    }
  </Fragment>
}

export default PropertiesPanel
