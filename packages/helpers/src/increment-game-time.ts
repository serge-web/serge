import moment, { Moment } from 'moment'

import { GameTurnLength, MonthTurns, YearTurns, TurnLengthType, MilliTurns } from '@serge/custom-types'

const incrementGameTime = (gameTime: string, turnTime: GameTurnLength): number => {
  const asTime: Moment = moment(gameTime)
  let res: Moment = asTime
  if (typeof turnTime === 'number') {
    res = asTime.add(turnTime, 'ms')
  } else {
    const turnTimeType: TurnLengthType = turnTime as TurnLengthType
    switch (turnTimeType.unit) {
      case 'millis' : {
        const mTurn: MilliTurns = turnTime as MilliTurns
        res = asTime.add(mTurn.millis, 'ms')
        break
      }
      case 'months' : {
        const mTurn: MonthTurns = turnTime as MonthTurns
        res = asTime.add(mTurn.months, 'months')
        break
      }
      case 'years' : {
        const mTurn: YearTurns = turnTime as YearTurns
        res = asTime.add(mTurn.years, 'years')
        break
      }
    }
  }
  return res.valueOf()
}
export default incrementGameTime
