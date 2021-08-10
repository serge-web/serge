import { TurnFormats } from '@serge/config'

/** format the turn number, according to the specified turn format */
const formatTurn = (turn: number, format?: TurnFormats): string => {
  switch (format) {
    case TurnFormats.TurnPairs:
      return '' + Math.floor(turn / 2) + '.' + (turn % 2 ? 2 : 1)
    default:
      return '' + turn
  }
}
export default formatTurn
