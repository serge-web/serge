import { MenuItem, Select } from '@material-ui/core'
import React, { ChangeEvent, CSSProperties } from 'react'
import styles from '../styles.module.scss'

type TurnFilterProps = {
  /** control label */
  label: string
  /** the current turn number and (and the max value shown) */
  currentTurn: number
  /** handler - with the turn to display (or -1 for all) */
  onChange: (turn: number) => void
  /** selected turn value */
  value: number
}

export const SHOW_ALL_TURNS = -1
const style: CSSProperties = {
  fontSize: 14
}

const TurnFilter: React.FC<TurnFilterProps> = ({ label, currentTurn, value, onChange }) => {
  const onLocalChange = (event: ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as number)
  }

  return <div className={styles['turn-dropdown']}>
    <p>{label}</p>
    <Select value={value} style={style} onChange={onLocalChange}>
      <MenuItem style={style} value={SHOW_ALL_TURNS}>All turns</MenuItem>
      {Array.from(Array(currentTurn + 1).keys()).map(turn => <MenuItem key={turn} style={style} value={turn}>{`Turn ${turn}`}</MenuItem>)}
    </Select>
  </div>
}

export default TurnFilter
