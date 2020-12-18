import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import ProgressIndicator from '../../atoms/progress-indicator'
import TextInput from '../../atoms/text-input'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart, faSave } from '@fortawesome/free-solid-svg-icons'

/* Render component */
export const StatusBar: React.FC<PropTypes> = ({
  onChange,
  onSave,
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
  const [dirty, setDirty] = useState(false)

  const handleChange = (target: {value: string}): void => {
    setDirty(true)
    setValue(target.value)
    if (typeof onChange === 'function') {
      onChange(target.value)
    }
  }

  const handleSave = (): void => {
    setDirty(false)
    if (typeof onSave === 'function') {
      onSave(value)
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
    setWargame(initialWargame)
    setValue(initialWargame.wargameTitle)
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
        {
          dirty
            ? <FontAwesomeIcon className={styles['save-icon']} icon={faSave} size="2x" onClick={handleSave} />
            : null
        }
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
