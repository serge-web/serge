import RouteTurn from './route-turn'

export default interface PlannedRoute {
  readonly uniqid: string
  plannedTurns: RouteTurn[]
}
