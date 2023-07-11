import { cloneDeep } from 'lodash'

import { Asset, ForceData, RouteTurn } from 'src/custom-types'
import { findAsset } from 'src/Helpers'

/**
 * Store the planned route in the forces object
 * @param (string) uniqid the asset in question
 * @param (RouteTurn[]) route the current planned route
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const storePlannedRoute = (uniqid: string, route: RouteTurn[], forces: ForceData[]): ForceData[] => {
  const newForces: ForceData[] = cloneDeep(forces)

  // find the asset
  const asset: Asset | undefined = findAsset(newForces, uniqid)

  if (asset) {
    // store copy of planned route
    asset.plannedTurns = route.slice()
  }
  return newForces
}

export default storePlannedRoute
