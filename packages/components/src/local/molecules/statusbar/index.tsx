import React, { useState } from 'react'
import cx from 'classnames'
import ProgressIndicator from '../../atoms/progress-indicator'

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

  const handleChange = (e: any): void => {
    setValue(e.target.value)
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  const progressList = Object.entries(wargame.data).map(entry => ({
    active: wargame.currentTab === entry[0],
    complete: entry[1].complete
  }))

  return (
    <div className={cx(styles.main)}>
      <div className={cx(styles['input-box'], styles.item)}>
        <input
          className={styles.input}
          type='text'
          placeholder='Game Title'
          onChange={handleChange}
          value={value}
        />
      </div>
      {wargame.wargameInitiated && <div className={cx(styles.status, styles.item)}>
        <FontAwesomeIcon icon={faHourglassStart} size="1x" /> Wargame in progress
      </div>}
      <div className={styles.item}>
        <ProgressIndicator list={progressList} />
      </div>
    </div>
  )
}

export default StatusBar
