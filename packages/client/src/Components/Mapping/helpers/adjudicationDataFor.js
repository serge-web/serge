import createPlanningRouteFor from './createPlanningRouteFor'

/** build up our working dataset for this asset */
export default function adjudicationDataFor (marker, /* element */ grid, /* function */ waypointCallback,
  /* boolean */ performingAdjudication, /* element */ context) {
  const asset = marker.asset
  const plannedTurns = asset.plannedTurns ? asset.plannedTurns : []
  const clonedTurns = JSON.parse(JSON.stringify(plannedTurns))
  return {
    marker: marker,
    asset: asset,
    history: asset.history,
    original: plannedTurns,
    current: clonedTurns,
    newState: null, // it's the presence of a 'newState' that indicates this asset is resolved
    original_perceptions: asset.perceptions,
    current_perceptions: JSON.parse(JSON.stringify(asset.perceptions)),
    original_condition: asset.condition,
    current_condition: JSON.parse(JSON.stringify(asset.condition)),
    lightRoutes: createPlanningRouteFor(clonedTurns, asset.history, asset, true, true, false,
      grid, context, waypointCallback, performingAdjudication)
  }
}