import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, Fragment } from 'react'
import styles from '../styles.module.scss'
import { ProppertiesPanelProps } from '../types/props'

const PropertiesPanel: React.FC<ProppertiesPanelProps> = ({ selectedProp, onPropertiesChange, onRemoveFilter }) => {
  return <Fragment>
    {
      Object.keys(selectedProp).map((key, kIdx) => {        
        const { value, choices } = selectedProp[key]
        return <div key={kIdx} className={styles.itemsBox}>
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
