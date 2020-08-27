import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const StatusBar: React.FC<PropTypes> = ({ onChange, wargame }) => {
  const [value, setValue] = useState(wargame.wargameTitle)

  const handeChange = (e: any): void => {
    setValue(e.target.value)
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  const showStatus = wargame.wargameInitiated || true

  return (
    <div className={cx(styles.main)}>
      <div className={cx(styles['input-box'], styles.item)}>
        <input
          className={styles.input}
          type='text'
          placeholder='Game Title'
          onChange={handeChange}
          value={value}
        />
      </div>
      {showStatus && <div className={cx(styles.status, styles.item)}>
        <FontAwesomeIcon icon={faHourglassStart} size="1x" /> Wargame in progress
      </div>}
      <div className={cx(styles['progress-box'], styles.item)}>
        <div className={styles.progress}>
          {Object.entries(wargame.data).map(entry => (<div key={entry[0]} className={cx(
            styles['progress-indicator'],
            wargame.currentTab === entry[0] && styles['progress-indicator-active'],
            entry[1].complete && styles['progress-indicator-complete']
          )} />))}
        </div>
      </div>
    </div>
  )
}

export default StatusBar
