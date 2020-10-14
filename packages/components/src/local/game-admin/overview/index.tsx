import React, { ChangeEvent } from 'react'

import cx from 'classnames'
import millisecondsToDDHHMMSS from './helpers/millisecondsToDDHHMMSS'
import millisecondsToHHMMSS from './helpers/millisecondsToHHMMSS'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Button from '../../form-elements/button'
import FormGroup from '../../form-elements/form-group-shadow'
import MaskedInput from 'react-maskedinput'
import { Input, Checkbox, FormControlLabel } from '@material-ui/core';

/* Render component */
export const Overview: React.FC<PropTypes> = ({ overview, onSave, onChange }) => {

  const updateGameTime = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target

    if (value.length === 0) {
      onChange({ ...overview, gameTurnTime: 0})
      return
    }
    if (value.indexOf("_") > -1) return
    const time: Array<number> = [parseInt(value.slice(0, 2)), parseInt(value.slice(3, 5)), parseInt(value.slice(6, 8)), parseInt(value.slice(9, 11))]
    const [days, hrs, secs, mins] = time
    let milliseconds:number = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000) + (days * 24 * 60 * 60 * 1000)

    if (name === 'timeWarning') {
      const [hrs, secs, mins] = time
      milliseconds = (secs * 1000) + (mins * 60 * 1000) + (hrs * 60 * 60 * 1000)
    }

    onChange({ ...overview, [name]: milliseconds, dirty: true})
  };


  return <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.col}/>
      <div className={styles.actions}>
        <Button onClick={(): void => { if (onSave) onSave() }}>Save</Button>
      </div>
    </div>
    <div className={styles.row}>
      <div className={cx(styles.col, styles.section)}>
        <FormGroup placeholder="Game description & objectives">
          <textarea onChange={({ target }):void => {
            onChange({...overview, gameDescription: target.value })
          }} rows={8} className={styles.textarea} value={overview.gameDescription}/>
        </FormGroup>
      </div>
      <div className={cx(styles.col, styles.section)}>
        <FormGroup>
          <div className={styles.group}>
            <label className={cx(styles.label, styles['label-first'])} htmlFor='gameTurnTime'>
              Wargame turn time (DD HH MM SS)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              {<MaskedInput
                mask="11 11 11 11"
                name="gameTurnTime"
                id="gameTurnTime"
                placeholder="DD HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToDDHHMMSS(overview.gameTurnTime)}
              />}
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor='realtimeTurnTime'>
              Real time planning allowance (DD HH MM SS)
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              <MaskedInput
                mask="11 11 11 11"
                name="realtimeTurnTime"
                id="realtimeTurnTime"
                placeholder="DD HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToDDHHMMSS(overview.realtimeTurnTime)}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor='realtimeTurnTime'>
              Time warning at (HH MM SS) remaining
            </label>
            <div className='MuiInputBase-root MuiInput-root MuiInput-underline'>
              <MaskedInput
                mask="11 11 11"
                name="timeWarning"
                id="timeWarning"
                placeholder="HH MM SS"
                onChange={updateGameTime}
                className='MuiInputBase-input MuiInput-input'
                value={millisecondsToHHMMSS(overview.timeWarning)}
              />
            </div>
          </div>
          <div className={styles.hidden}><Input/></div>
          <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={overview.showAccessCodes}
                onChange={():void => {
                  onChange({...overview, showAccessCodes: !overview.showAccessCodes })
                }}
                value='1'
                color='primary'
              />
            }
            label="Show Access codes"
          />
          </div>
        </FormGroup>
      </div>
    </div>
  </div>
}

export default Overview
