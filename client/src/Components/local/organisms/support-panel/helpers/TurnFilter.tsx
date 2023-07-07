import { Chip, MenuItem, Select } from '@material-ui/core'
import { TurnPeriods } from 'src/custom-types'
import { incrementGameTime } from '@serge/helpers'
import React, { ChangeEvent, CSSProperties, useEffect, useState } from 'react'
import { shortDate } from '../../planning-messages-list/helpers/genData'
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

type LabelledTurn = {
  turn: number
  label: string
}

const TurnFilter: React.FC<TurnFilterProps> = ({ label, allPeriods, value, onChange }) => {
  const [labelledTurns, setLabelledTurns] = useState<LabelledTurn[]>([])

  useEffect(() => {
    if (allPeriods.length) {
      const turns = allPeriods.map((period):LabelledTurn => {
        const turnEnd = incrementGameTime(period.gameDate, period.gameTurnTime)
        return {
          turn: period.gameTurn,
          label: 'Turn ' + period.gameTurn + ': ' + shortDate(period.gameDate) + '-' + shortDate(turnEnd)
        }
      })
      setLabelledTurns(turns)
    }
  }, [allPeriods])

  const onLocalChange = (event: ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as number)
  }

  if (allPeriods) {
    return <div className={styles['turn-dropdown']}>
      <p>{label}</p>
      <Select value={value} style={style} onChange={onLocalChange}>
        <MenuItem style={style} value={SHOW_ALL_TURNS}>All turns</MenuItem>
        {labelledTurns.map(turn => <MenuItem key={turn.turn} style={style} value={turn.turn}>{turn.label}</MenuItem>)}
      </Select>
    </div>
  } else {
    return <Chip label={'Waiting for list of turns'} />
  }
}

export default TurnFilter
