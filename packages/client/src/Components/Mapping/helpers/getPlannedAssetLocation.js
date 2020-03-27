import findLastRouteWithLocation from './findLastRouteLocation'
/** get the current location of this asset, either at the
 * end of the planned routes, or where it currently is
 */
export default function getPlannedAssetLocation (/* element */asset, /* element */ current, /* element */ grid,
  /* boolean */ performingAdjudication) {
  let cell
  if (performingAdjudication) {
    //  - we always start from current location
    cell = asset.position
  } else {
    // sort out where to put the planning marker
    cell = findLastRouteWithLocation(current, asset.position)
  }
  return grid.hexNamed(cell)
}
