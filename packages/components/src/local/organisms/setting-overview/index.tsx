import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox, FormControlLabel, Input } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
/* Import const */
import { TurnFormats } from '@serge/config'
import { isObjectEquivalent, usePrevious } from '@serge/helpers'
import cx from 'classnames'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Flatpickr from 'react-flatpickr'
/* Import Components */
import MaskedInput from 'react-maskedinput'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import TextInput from '../../atoms/text-input'
import MoreInfo from '../../molecules/more-info'
import millisecondsToDDHHMMSS from './helpers/millisecondsToDDHHMMSS'
import millisecondsToHHMMSS from './helpers/millisecondsToHHMMSS'
import { fromMasked, toMasked } from './helpers/turnTimeToYYMMDDHHMMSS'

/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes, { WargameOverview } from './types/props'

/* Render component */
export const SettingOverview: React.FC<PropTypes> = ({
  overview: initialOverview, onSave, onChange,
  initiateWargame, wargameInitiated, ignoreFlatpickrSnapshot
}) => {
  const [overview, setOverview] = useState<WargameOverview>(initialOverview)
  const [timeKey, setTimeKey] = useState({
    gameDate: 0,
    gameTurnTime: { unit: 'millis', millis: 72000 },
    realtimeTurnTime: 0,
    timeWarning: 0
  })
  const options = [TurnFormats.Natural, TurnFormats.TurnPairNumbers, TurnFormats.TurnPairLetters]

  const handleCreate = (buttonText?: TurnFormats): void => {
    const updateTurnPresentation = { ...overview, turnPresentation: buttonText }
    setOverview(updateTurnPresentation)
    setDirty(updateTurnPresentation)
  }
  const handleMenuItemClick = (
    event: any
  ): void => {
    handleCreate(event.target.value || TurnFormats.Natural)
  }

  const updateStartTime = (date: any): void => {
    const updates = { ...overview, gameDate: date[0].getTime() }
    setOverview(updates)
    setDirty(updates)
  }

  const updateTurnLength = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    const val = fromMasked(value)
    // was code able to parse string?
    if (val) {
      const updates = { ...overview, gameTurnTime: val }
      setOverview(updates)
      setDirty(updates)
    } else {
      // nope, reinstate previous value
      const prevData = { gameTurnTime: prevOverview ? prevOverview.gameTurnTime : initialOverview.gameTurnTime }
      // forcefully re-render with previous value
      setTimeKey({ ...timeKey, gameTurnTime: prevData.gameTurnTime })
      setOverview({ ...overview, ...prevData })
    }
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

  const updateHideForcesVisibility = (): void => {
    const updates = { ...overview, hideForcesInChannels: !overview.hideForcesInChannels }
    setOverview(updates)
    setDirty(updates)
  }

  const updateAccessCodeVisibility = (): void => {
    const updates = { ...overview, showAccessCodes: !overview.showAccessCodes }
    setOverview(updates)
    setDirty(updates)
  }

  const updatePlayerForcesVisibility = (): void => {
    const updates = { ...overview, logPlayerActivity: !overview.logPlayerActivity }
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
  if (!ignoreFlatpickrSnapshot && overview.gameDate) {
    flatpickrValueProp.value = overview.gameDate
  }

  return <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.col} />
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
            value={overview.gameDescription}
            variant="filled"
            minRows={8}
            maxRows={8}
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
              Wargame turn time<br />(YY MM DD HH MM SS)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              {<MaskedInput
                key={timeKey.gameTurnTime.unit}
                mask="11 11 11 11 11 11"
                name="gameTurnTime"
                id="gameTurnTime"
                placeholder="YY MM DD HH MM SS"
                onChange={updateTurnLength}
                className='MuiInputBase-input MuiInput-input'
                value={toMasked(overview.gameTurnTime)}
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
              <FormControl className={styles.formcontrol}>
                <Select
                  labelId="turn-type-select-label"
                  id="turn-type-select"
                  value={overview.turnPresentation ? overview.turnPresentation : TurnFormats.Natural}
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

          <div className={styles.hidden}><Input /></div>
          <div>
            <MoreInfo description='Show clickable lists of roles per force, allowing login without use of per-role passcodes'><FormControlLabel
              control={
                <Checkbox
                  checked={initialOverview.showAccessCodes}
                  onChange={updateAccessCodeVisibility}
                  value='1'
                  color='primary'
                />
              }
              label="Show Access codes"
            /></MoreInfo>
            <MoreInfo description='Hide icons for which forces are in a channel, allowing one force to "snoop" on another'><FormControlLabel
              control={
                <Checkbox
                  checked={!!initialOverview.hideForcesInChannels}
                  onChange={updateHideForcesVisibility}
                  value='1'
                  color='primary'
                />
              }
              label="Hide force icons in channels"
            /></MoreInfo>
            <MoreInfo description='Alow forces with Umpire flag to see player logs in wargames, they can see lastest actions of players'><FormControlLabel
              control={
                <Checkbox
                  checked={initialOverview.logPlayerActivity}
                  onChange={updatePlayerForcesVisibility}
                  value='1'
                  color='primary'
                />
              }
              label="Log player activity to database"
            /></MoreInfo>
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
