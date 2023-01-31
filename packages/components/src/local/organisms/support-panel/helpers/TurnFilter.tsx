import { Chip, MenuItem, Select } from '@material-ui/core'
import { TurnPeriods } from '@serge/custom-types'
import React, { ChangeEvent, CSSProperties } from 'react'
import styles from '../styles.module.scss'

type TurnFilterProps = {
  /** control label */
  label: string
  /** handler - with the turn to display (or -1 for all) */
  onChange: (turn: number) => void
  /** selected turn value */
  value: number
  /** list of turns in this game */
  allPeriods: TurnPeriods
}

export const SHOW_ALL_TURNS = -1
const style: CSSProperties = {
  fontSize: 14
}

const TurnFilter: React.FC<TurnFilterProps> = ({ label, allPeriods, value, onChange }) => {
  const onLocalChange = (event: ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as number)
  }

  if (allPeriods) {
    return <div className={styles['turn-dropdown']}>
      <p>{label}</p>
      <Select value={value} style={style} onChange={onLocalChange}>
        <MenuItem style={style} value={SHOW_ALL_TURNS}>All turns</MenuItem>
        {allPeriods.map(turn => <MenuItem key={turn.gameTurn} style={style} value={turn.gameTurn}>{`Turn ${turn.gameTurn}`}</MenuItem>)}
      </Select>
    </div>
  } else {
    return <Chip label={'Waiting for list of turns'} />
  }
}

export default TurnFilter
