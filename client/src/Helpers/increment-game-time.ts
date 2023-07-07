import moment, { Moment } from 'moment'

import { GameTurnLength, MonthTurns, TurnLengthType, MilliTurns } from 'src/custom-types'

/** move the game time forward
 * @param gameTime the current game time
 * @param turnLength the size to step forward
 */
const incrementGameTime = (gameTime: string, turnLength: GameTurnLength): number => {
  const asTime: Moment = moment(gameTime)
  if (typeof turnLength === 'number') {
    // turn length in legacy format, plain millis
    return asTime.add(turnLength, 'ms').valueOf()
  } else {
    const turnTimeType: TurnLengthType = turnLength as TurnLengthType
    switch (turnTimeType.unit) {
      case 'millis' : {
        const mTurn: MilliTurns = turnLength as MilliTurns
        return asTime.add(mTurn.millis, 'ms').valueOf()
      }
      case 'months' : {
        const mTurn: MonthTurns = turnLength as MonthTurns
        return asTime.add(mTurn.months, 'months').valueOf()
      }
    }
  }
  throw new Error('Unable to calculate turn lengths from:' + turnLength)
}
export default incrementGameTime
