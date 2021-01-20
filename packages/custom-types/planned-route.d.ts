import RouteTurn from './route-turn'

export default interface PlannedRoute {
  uniqid: string,
  plannedTurns: RouteTurn[]
}
