import turnNameFor from './turnNameFor'

export default function collatePlanningOrders (/* array */routes, /* int */ turnNumber) {
  const firstAsset = routes.find(route => route.asset != null).asset
  const detail = []
  const planningFor = turnNumber + 1
  routes.forEach(route => {
    const thisRoute = {}
    thisRoute.uniqid = route.marker.asset.uniqid
    const plannedTurns = []
    if (route.current && route.current.length > 0) {
      route.current.forEach(step => {
        // check the plans are in the future. Note: game logic
        // should prevent this problem arising in the future
        if (step.turn >= planningFor) {
          const thisStep = {}
          thisStep.turn = step.turn
          thisStep.status = step.status
          if (step.route && step.route.length > 0) {
            thisStep.route = step.route.slice() // take copy of array, just in case
          }
          plannedTurns.push(thisStep)
        }
      })
    }
    thisRoute.plannedTurns = plannedTurns

    detail.push(thisRoute)
  })
  const res = {}
  res.comment = ''
  res.turn = this.turnNumber + 1
  res.name = firstAsset.force + ' Plans for ' + turnNameFor(res.turn)
  res.force = firstAsset.force
  res.plannedRoutes = detail
  return res
}
