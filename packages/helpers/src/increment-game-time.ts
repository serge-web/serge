import moment, { Moment } from 'moment'

import { GameTurnLength, MilliTurns, MonthTurns, TurnLengthType } from '@serge/custom-types'

/** move the game time forward
 * @param gameTime the current game time
 * @param turnLength the size to step forward
 */
const incrementGameTime = (gameTime: string, turnLength: GameTurnLength): string => {
  const asTime: Moment = moment.utc(gameTime)
  if (typeof turnLength === 'number') {
    // turn length in legacy format, plain millis
    return asTime.add(turnLength, 'ms').toISOString()
  } else {
    const turnTimeType: TurnLengthType = turnLength as TurnLengthType
    switch (turnTimeType.unit) {
      case 'millis' : {
        const mTurn: MilliTurns = turnLength as MilliTurns
        return asTime.add(mTurn.millis, 'ms').toISOString()
      }
      case 'months' : {
        const mTurn: MonthTurns = turnLength as MonthTurns
        return asTime.add(mTurn.months, 'months').toISOString()
      }
    }
  }
  throw new Error('Unable to calculate turn lengths from:' + turnLength)
}
export default incrementGameTime
