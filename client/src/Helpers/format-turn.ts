import { TurnFormats } from 'src/config'

/** format the turn number, according to the specified turn format */
const formatTurn = (turn: number, format?: TurnFormats): string => {
  switch (format) {
    case TurnFormats.TurnPairNumbers:
      return '' + Math.floor(turn / 2) + '.' + (turn % 2 ? 2 : 1)
    case TurnFormats.TurnPairLetters:
      return '' + Math.floor(turn / 2) + '.' + (turn % 2 ? 'b' : 'a')
    default:
      return '' + turn
  }
}
export default formatTurn
