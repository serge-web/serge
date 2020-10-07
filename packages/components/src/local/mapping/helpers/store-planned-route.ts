import { cloneDeep } from 'lodash'

import { RouteStep } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

/**
 * Store the planned route in the forces object
 * @param (string) uniqid the asset in question
 * @param (RouteStep[]) route the current planned route
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const storePlannedRoute = (uniqid: string, route: RouteStep[], forces: any): any => {
  const newForces: any = cloneDeep(forces)

  // find the asset
  const asset = findAsset(newForces, uniqid)

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

  return newForces
}

export default storePlannedRoute
