import { capitalize } from 'lodash'
import React, { ChangeEvent, Fragment } from 'react'
import { Phase } from 'src/config'
import styles from '../styles.module.scss'
import { ProppertiesPanelProps } from '../types/props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const PropertiesPanel: React.FC<ProppertiesPanelProps> = ({ selectedProp, onPropertiesChange, onRemoveFilter }) => {
  return <Fragment>
    {
      Object.keys(selectedProp).map((key, kIdx) => {
        const value = selectedProp[key]
        switch (key) {
          case 'phase':
            return <div key={kIdx} className={styles.itemsBox}>
              <p>{key}:</p>
              <div>
                <select value={typeof value === 'string' ? value : undefined} onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
                  <option value={Phase.Planning}>{capitalize(Phase.Planning)}</option>
                  <option value={Phase.Adjudication}>{capitalize(Phase.Adjudication)}</option>
                </select>
              </div>
              {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
            </div>
          case 'size':
            return <div key={kIdx} className={styles.itemsBox}>
              <p>{key}:</p>
              <div>
                <select value={typeof value === 'string' ? value : undefined} onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
                  <option value='S'>Small</option>
                  <option value='M'>Medium</option>
                  <option value='L'>Large</option>
                </select>
              </div>
              {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
            </div>
          case 'important':
            return <div key={kIdx} className={styles.itemsBox}>
              <p>{key}:</p>
              <div>
                <select value={typeof value === 'string' ? value : undefined} onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </div>
              {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
            </div>
          default:
            return <div key={kIdx} className={styles.itemsBox}>
              <p>{key}:</p>
              <div>
                {!Array.isArray(value) && <input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onPropertiesChange(key, e.target.value)} />}
                {Array.isArray(value) && <select onChange={(e: ChangeEvent<HTMLSelectElement>) => onPropertiesChange(key, e.target.value)}>
                  {value.map(v => (<option key={v}>{v}</option>))}
                </select>}
              </div>
              {onRemoveFilter && <FontAwesomeIcon icon={faMinusCircle} className={styles.removeIcon} onClick={() => onRemoveFilter(key)}/>}
            </div>
        }
      })
    }
  </Fragment>
}

export default PropertiesPanel
