import { SUBMIT_PLANS } from '@serge/config'
import { MessageSubmitPlans, PlannedRoute, RouteStatus, Route, RouteTurn, MessageForceLaydown } from '@serge/custom-types'

const collateForceLaydown = (routes: Array<Route>): MessageForceLaydown => {
  const results: Array<PlannedRoute> = routes.map((route: Route): PlannedRoute => {
    const res: RouteTurn[] = []
    route.planned.forEach((step: RouteTurn) => {
      const coords: string[] | undefined = step.route
      const status: RouteStatus = step.status.speedKts ? {
        state: step.status.state,
        speedKts: step.status.speedKts
      } : {
        state: step.status.state
      }
      const newStep: RouteTurn = coords !== undefined ? {
        turn: step.turn,
        route: coords,
        status: status
      } : {
        turn: step.turn,
        status: status
      }
      res.push(newStep)
    })
    const plannedRoute: PlannedRoute = {
      uniqid: route.uniqid,
      plannedTurns: res
    }
    return plannedRoute
  })
  const message: MessageSubmitPlans = {
    messageType: SUBMIT_PLANS,
    plannedRoutes: results
  }
  return message
}

export default collateForceLaydown
