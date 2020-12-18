import PlannedTurn from './planned-turn'

export default interface PlannedRoute {
  uniqid: string,
  plannedTurns: PlannedTurn[]
}
