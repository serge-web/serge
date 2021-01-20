import { cloneDeep } from 'lodash'

import { Asset, ForceData, RouteTurn } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

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
    // store the planned route
    asset.plannedTurns = route.map((step: RouteTurn) => {
      // TODO: we probably don't need to do this conversion
      const res: RouteTurn = {
        turn: step.turn,
        status: step.status
      }
      if (step.route && step.route.length) {
        res.route = step.route
      }
      return res
    })
  }
  return newForces
}

export default storePlannedRoute
