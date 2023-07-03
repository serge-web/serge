import { faHourglassStart, faSave } from '@fortawesome/free-solid-svg-icons'
/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import TextInput from '../../atoms/text-input'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes from './types/props'

/* Render component */
export const StatusBar: React.FC<PropTypes> = ({
  onChange,
  onSave,
  wargame: initialWargame
}) => {
  const [wargame, setWargame] = useState(initialWargame)
  const [value, setValue] = useState(wargame.wargameTitle)
  const [dirty, setDirty] = useState(false)

  const handleChange = (target: { value: string }): void => {
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
          className="underline"
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
    </div>
  )
}

export default StatusBar
