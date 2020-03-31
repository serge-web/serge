import findPlatformTypeFor from './findPlatformTypeFor'
import createPlanningRouteFor from './createPlanningRouteFor'

/** create a storage object for this object */
export default function planningDataFor (/* marker */ marker, /* array platform types */ platformTypes, /* element */ grid,
  /* function */ waypointCallback, /* boolean */ performingAdjudication, /* element */ context) {
  const asset = marker.asset
  const plannedTurns = asset.plannedTurns ? asset.plannedTurns : []
  const clonedTurns = JSON.parse(JSON.stringify(plannedTurns))
  return {
    marker: marker,
    asset: marker.asset,
    // clone the planned routes, in case we wish to reset it
    original: plannedTurns,
    current: clonedTurns,
    platformType: findPlatformTypeFor(platformTypes, asset.platformType),
    lightRoutes: createPlanningRouteFor(clonedTurns, asset.history, asset, true, false, false, grid,
      context, waypointCallback, performingAdjudication)
  }
}