import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { usePrevious } from '@serge/helpers'
import ProgressIndicator from '../../atoms/progress-indicator'
import TextInput from '../../atoms/text-input'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const StatusBar: React.FC<PropTypes> = ({
  onChange,
  wargame: initialWargame,
  tabsOrder = [
    'overview',
    'platform_types',
    'forces',
    'channels'
  ]
}) => {
  const [wargame, setWargame] = useState(initialWargame)
  const [value, setValue] = useState(wargame.wargameTitle)
  const prevWargame = usePrevious(wargame)

  const handleChange = (target: {value: string}): void => {
    setValue(target.value)
    if (typeof onChange === 'function') {
      onChange(target.value)
    }
  }

  const wargameData = Object.entries(wargame.data)
  const progressList = [...tabsOrder].map((tab, index) => {
    const tabEntry = wargameData.find(entry => entry[0] === tab)
    return tabEntry ? {
      active: wargame.currentTab ? wargame.currentTab === tabEntry[0] : index === 0,
      complete: tabEntry[1].complete
    } : {}
  }).filter(item => Object.keys(item).length)

  useEffect(() => {
    if (!prevWargame && Object.keys(initialWargame).length > 0) {
      setWargame(initialWargame)
    }
  }, [initialWargame])

  return (
    <div className={cx(styles.main)}>
      <div className={cx(styles['input-box'], styles.item)}>
        <TextInput
          customColor="transparent"
          titleInput={true}
          value={value}
          updateState={handleChange}
        />
      </div>
      {
        wargame.wargameInitiated && (
          <div className={cx(styles.status, styles.item)}>
            <FontAwesomeIcon icon={faHourglassStart} size="1x" /> Wargame in progress
          </div>
        )
      }
      <div className={styles.item}>
        <ProgressIndicator list={progressList} />
      </div>
    </div>
  )
}

export default StatusBar
