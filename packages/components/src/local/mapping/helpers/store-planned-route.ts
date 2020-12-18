import { cloneDeep } from 'lodash'

import { Asset, ForceData, RouteStep } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

/**
 * Store the planned route in the forces object
 * @param (string) uniqid the asset in question
 * @param (RouteStep[]) route the current planned route
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const storePlannedRoute = (uniqid: string, route: RouteStep[], forces: ForceData[]): any => {
  const newForces: ForceData[] = cloneDeep(forces)

  // find the asset
  const asset: Asset | undefined = findAsset(newForces, uniqid)

  if(asset) {
    // store the planned route
    asset.plannedTurns = route.map((step: RouteStep) => {
      const res: any = {
        turn: step.turn,
        status: step.status
      }
      if (step.coords && step.coords.length) {
        res.route = step.coords
      }
      return res
    })
  }
  return newForces
}

export default storePlannedRoute
