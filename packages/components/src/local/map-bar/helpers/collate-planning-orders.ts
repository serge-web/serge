import { Route, RouteStep } from '@serge/custom-types'
import { padInteger } from '@serge/helpers'

interface PlannedRoute {
  uniqid: string
  destroyed: boolean
  plannedTurns: Array<RouteStep>
}

interface PlannedOrders {
  comment: string
  turn: number
  name: string
  plannedRoutes: Array<PlannedRoute>
}

const collatePlanningOrders = (routes: Array<Route>, playerForce: string, turnNumber: number): PlannedOrders => {
  const planningFor: number = turnNumber + 1
  const results: Array<PlannedRoute> = routes.map((route: Route): PlannedRoute => {
    const plannedTurns: Array<RouteStep> = []
    console.log('collating plans', route.name, route.planned)
    if (route.planned && route.planned.length > 0) {
      route.planned.forEach((step: RouteStep) => {
        // check the plans are in the future. Note: game logic
        // should prevent this problem arising in the future
        if (step.turn >= planningFor) {
          plannedTurns.push(step)
        }
      })
    }
    const thisRoute: PlannedRoute = {
      uniqid: route.uniqid,
      destroyed: route.destroyed,
      plannedTurns: plannedTurns
    }
    return thisRoute
  })

  const res: PlannedOrders = {
    comment: '',
    turn: turnNumber + 1,
    name: playerForce + ' Plans for T' + padInteger(turnNumber),
    plannedRoutes: results
  }
  return res
}

export default collatePlanningOrders
