import React, { ChangeEvent, useState, useEffect } from 'react'
import cx from 'classnames'
import millisecondsToDDHHMMSS from './helpers/millisecondsToDDHHMMSS'
import millisecondsToHHMMSS from './helpers/millisecondsToHHMMSS'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Flatpickr from 'react-flatpickr'

/* Import proptypes */
import PropTypes, { WargameOverview } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import const */
import { NATURAL, TURN_PAIRS } from '@serge/config'

/* Import Components */
import MaskedInput from 'react-maskedinput'
import { Input, Checkbox, FormControlLabel } from '@material-ui/core'
import { usePrevious, isObjectEquivalent } from '@serge/helpers'
import Button from '../../atoms/button'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import TextInput from '../../atoms/text-input'
import FormGroup from '../../atoms/form-group-shadow'
import MenuItem from '@material-ui/core/MenuItem'

/* Render component */
export const SettingOverview: React.FC<PropTypes> = ({ overview: initialOverview, onSave, onChange, initiateWargame, wargameInitiated, ignoreFlatpickrSnapshot }) => {
  const [overview, setOverview] = useState<WargameOverview>(initialOverview)
  const [timeKey, setTimeKey] = useState({
    gameDate: 0,
    gameTurnTime: 0,
    realtimeTurnTime: 0,
    timeWarning: 0
  })
  const options = [NATURAL, TURN_PAIRS]

  const handleCreate = (buttonText?: string): void => {
    const updateTurnPresentation = { ...overview, turnPresentation: buttonText}
    setOverview(updateTurnPresentation)
    setDirty(updateTurnPresentation)
  }
  const handleMenuItemClick = (
    event: any
  ): void => {
    handleCreate(event.target.value || NATURAL)
  }

  const updateStartTime = (date: any): void => {
    const updates = { ...overview, gameDate: date[0].getTime() }
    setOverview(updates)
    setDirty(updates)
  }

  const prevOverview = usePrevious(overview)
  const updateGameTime = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target

    const checkZero = (/^0+$/).test(value.replace(/\s/g, ''))
    if (value.length === 0 || checkZero) {
      const prevData = { [name]: prevOverview ? prevOverview[name] : initialOverview[name] }
      // forcefully re-render with previous value
      setTimeKey({ ...timeKey, [name]: timeKey[name] + 1 })
      setOverview({ ...overview, ...prevData })
      return
    }
    if (value.indexOf('_') > -1) return
    const time: Array<number> = [parseInt(value.slice(0, 2)), parseInt(value.slice(3, 5)), parseInt(value.slice(6, 8)), parseInt(value.slice(9, 11))]
    const [days, hrs, mins, secs] = time
    let milliseconds: number = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000)

    if (name === 'timeWarning') {
      const [hrs, mins, secs] = time
      milliseconds = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000)
    }

    const updates = { ...overview, [name]: milliseconds }
    setOverview(updates)
    setDirty(updates)
  }

  const replacePrevTime = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    if (value.indexOf('_') === -1) return
    const prevData = { [name]: prevOverview ? prevOverview[name] : initialOverview[name] }
    // forcefully re-render with previous value
    setTimeKey({ ...timeKey, [name]: timeKey[name] + 1 })
    setOverview({ ...overview, ...prevData })
  }

  const updateGameDescription = (target: { value: string }): any => {
    const updates = {
      ...overview,
      gameDescription: target.value
    }
    setOverview(updates)
    setDirty(updates)
  }

  const updateAccessCodeVisibility = (): void => {
    const updates = { ...overview, showAccessCodes: !overview.showAccessCodes }
    setOverview(updates)
    setDirty(updates)
  }

  const setDirty = (updates: WargameOverview): void => {
    onChange && onChange({
      ...updates,
      dirty: true
    })
  }

  const onSaveOverview = (): void => {
    if (onSave) {
      onSave({
        ...overview,
        dirty: false
      })
    }
  }

  useEffect(() => {
    if (!isObjectEquivalent(prevOverview || {}, initialOverview)) {
      setOverview(initialOverview)
    }
  }, [initialOverview])

  /**
   * this component work perfectly, but
   * we have an issue with the snapshot testing: Flatpickr.setDate is not a fucntion
   * only occur when the value props exits in this component
   * this trick to avoid the react-test-renderer render the value prop on testing
   */
  const flatpickrValueProp: any = {}
  if (!ignoreFlatpickrSnapshot) {
    flatpickrValueProp.value = overview.gameDate
  }

  return <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.col}/>
      <div className={styles.actions}>
        <Button
          color="secondary"
          size="large"
          onClick={onSaveOverview}
          data-qa-type="submit"
        >
          Save Overview
        </Button>
      </div>
    </div>
    <div className={styles.row}>
      <div className={cx(styles.col, styles.section)}>
        <FormGroup placeholder="Game description & objectives">
          <TextInput
            multiline
            fullWidth
            variant="filled"
            rows={8}
            rowsMax={8}
            updateState={updateGameDescription}
            className={styles.textarea}
          />
        </FormGroup>
      </div>
      <div className={cx(styles.col, styles.section)}>
        <FormGroup>
          <div className={styles.group}>
            <label className={cx(styles.label, styles['label-first'])} htmlFor='gameDate'>
              Wargame start time (YYYY/MM/DD HH:MM)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              <Flatpickr
                key={timeKey.gameDate}
                name="gameDate"
                id="gameDate"
                data-enable-time
                className={styles.flatpickr}
                options={{ dateFormat: 'Y/m/d H:i' }}
                onChange={updateStartTime}
                {...flatpickrValueProp}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor='gameTurnTime'>
              Wargame turn time (DD HH MM SS)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              {<MaskedInput
                key={timeKey.gameTurnTime}
                mask="11 11 11 11"
                name="gameTurnTime"
                id="gameTurnTime"
                placeholder="DD HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToDDHHMMSS(overview.gameTurnTime)}
                onBlur={replacePrevTime}
              />}
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor='realtimeTurnTime'>
              Real time planning allowance (DD HH MM SS)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              <MaskedInput
                key={timeKey.realtimeTurnTime}
                mask="11 11 11 11"
                name="realtimeTurnTime"
                id="realtimeTurnTime"
                placeholder="DD HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToDDHHMMSS(overview.realtimeTurnTime)}
                onBlur={replacePrevTime}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor='realtimeTurnTime'>
              Time warning at (HH MM SS) remaining
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              <MaskedInput
                key={timeKey.timeWarning}
                mask="11 11 11"
                name="timeWarning"
                id="timeWarning"
                placeholder="HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToHHMMSS(overview.timeWarning)}
                onBlur={replacePrevTime}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label}>
              Turn Type
            </label>
            <div>
              <FormControl className={styles.formControl}>
                <Select
                  labelId="turn-type-select-label"
                  id="turn-type-select"
                  value={overview.turnPresentation ? overview.turnPresentation : NATURAL}
                  onChange={handleMenuItemClick}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className={styles.hidden}><Input/></div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={initialOverview.showAccessCodes}
                  onChange={updateAccessCodeVisibility}
                  value='1'
                  color='primary'
                />
              }
              label="Show Access codes"
            />
          </div>
          <div>
            <>{
              !wargameInitiated &&
              <Button onClick={(): void => {
                initiateWargame && initiateWargame()
              }}>Initiate Wargame</Button>
            }{
              wargameInitiated &&
              <p><FontAwesomeIcon icon={faCheck} size="2x" />&nbsp;Wargame initiated</p>
            }
            </>
          </div>
        </FormGroup>
      </div>
    </div>
  </div>
}

export default SettingOverview

export { WargameOverview } from '@serge/custom-types'
