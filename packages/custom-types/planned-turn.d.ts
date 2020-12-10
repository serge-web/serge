import PlannedTurnStatus from './planned-turn-status'

interface PlannedTurn {
  route: string[],
  status: PlannedTurnStatus,
  turn: number
}

export default PlannedTurn
