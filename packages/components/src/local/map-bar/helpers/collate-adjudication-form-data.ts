import { SelectedAsset, AdjudicateTurnFormData, ColorOption, RouteStore, Route } from '@serge/custom-types'

import { kebabCase } from 'lodash'
import availableForces from './available-forces'
import { PlanningStates } from '@serge/config'
import { deepCompare } from '@serge/helpers'

const routeIsPlannedFor = (store: RouteStore): boolean => {
  const route:Route | undefined = store.selected 
  if(route) {
    const planned = route.planned
    const original = route.original
    return deepCompare(planned, original)
  } else {
    return false
  }
}

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collateAdjudicationFormData = (platforms: any, selectedAsset: SelectedAsset,
  forces: any, routes: RouteStore
): AdjudicateTurnFormData => {
  const currentPlatform = platforms && platforms.find((platform: any) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const availableStatus = currentPlatform && currentPlatform.states.find((s: any) => s.name === selectedAsset.status.state)
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)
  const routeIsPlanned: boolean = routeIsPlannedFor(routes)
  const formData: AdjudicateTurnFormData = {
    populate: {
      status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
      speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : [],
      visibleTo: availableForcesList,
      condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: any) => c) : []
    },
    values: {
      plannedRouteStatusVal: routeIsPlanned ? PlanningStates.Planned : PlanningStates.Pending,
      statusVal: availableStatus,
      speedVal: selectedAsset.status.speedKts,
      visibleToVal: selectedAsset.visibleTo,
      conditionVal: selectedAsset.condition
    }
  }
  return formData
}

export default collateAdjudicationFormData
