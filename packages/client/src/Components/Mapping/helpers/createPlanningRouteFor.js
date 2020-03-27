import colorFor from './colorFor'
import routeLinesFor from './routeLinesFor'

export default function createPlanningRouteFor (/* array turns */ currentRoutes, /* array turns */ history,
  /* object */ asset, /* boolean */ lightweight, /* boolean */short, /* boolean */ highlight, /* element */ grid, /* element */ context,
  /* function */ waypointCallback, /* boolean */ performingAdjudication) {
  const hisLocation = grid.hexNamed(asset.position).centrePos

  // ok, special handling. we will only show the planned route for the next turn
  // if we're in adjucation mode
  let trimmedRoute = null
  if (performingAdjudication) {
    const justNextStep = currentRoutes && currentRoutes.length ? [currentRoutes[0]] : []
    trimmedRoute = short ? justNextStep : currentRoutes
    // if (history) {
    //   history = history.slice(-1)
    // }
  } else {
    trimmedRoute = currentRoutes
  }

  const forceColor = colorFor(asset.force)

  return routeLinesFor(trimmedRoute, history, hisLocation, asset.position, lightweight, grid, forceColor, waypointCallback, null, highlight, context)
}