import RouteStep from './route-step'

export default interface PlannedRoute {
  uniqid: string,
  plannedTurns: RouteStep[]
}
