import PlannedTurnStatus from './planned-turn-status'
// TODO: re-name, so it can relate to planned or histoic data
interface PlannedTurn {
  /** when this turn happened */
  turn: number,
  /** the steps followed during the turn */
  route?: Array<string>,
  /** the status during the turn */
  status: PlannedTurnStatus
}

export default PlannedTurn
