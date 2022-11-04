import { MenuItem, Select } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from '../styles.module.scss'

type TurnOrderProps = {
  label: string
  /** the current turn number and (and the max value shown) */
  currentTurn: number
  /** value currently selected */
  value?: string
  /** handler - with the turn to display (or -1 for all) */
  onChange: (turn: number) => void
}

export const SHOW_ALL_TURNS = -1

const TurnFilter: React.FC<TurnOrderProps> = ({ label, value, currentTurn, onChange }) => {

  const [options, setOptions] =  useState<string[]>([])
  const [localValue, setLocalValue] = useState<string>('')

  const ALL_TURNS = 'All turns'

  useEffect(() => {
    setLocalValue(value || options[0])
  }, [value])

  useEffect(() => {
    const optionsArr = [ALL_TURNS]
    for (let i=0;i<=currentTurn; i++) {
      optionsArr.push('Turn ' + i)
    }
    setOptions(optionsArr)
    setLocalValue(optionsArr[0])
  }, [currentTurn])

  if (!options.length) {
    return <></>
  }

  const onLocalChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string
    if (selectedValue === ALL_TURNS) {
      onChange(SHOW_ALL_TURNS)
    } else {
      const parts = selectedValue.split(' ')
      const turnVal = parseInt(parts[1])
      onChange(turnVal)
    }
    setLocalValue(selectedValue)
  }

  return <div className={styles['turn-dropdown']}>
    <p>{label}</p>
    <Select value={localValue} style={{ fontSize: 14 }} onChange={onLocalChange}>
      {options.map(item => <MenuItem key={item} style={{ fontSize: 14 }} value={item}>{item}</MenuItem>)}
    </Select>
  </div>
}

export default TurnFilter