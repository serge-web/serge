import { cloneDeep } from 'lodash'

import { RouteStep, RouteStore } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'
import { PlanningStates } from '@serge/config'

/**
 * Store the planned route in the forces object
 * @param (RouteStore) store the asset in question
 * @param (PlanningStates) newState the current planned route
 * @returns modified route store
 */
const setAdjudicationPlanningState = (store: RouteStore, newState: PlanningStates): RouteStore | undefined => {
  if(store.selected) {
    const curState: PlanningStates | undefined = store.selected.adjudicationState
    const newStore: any = cloneDeep(store)
    switch(newState) {
      case PlanningStates.Pending: {
        switch(curState) {
          case undefined:
            // just loaded, do nothing
            break 
          case PlanningStates.Rejected: 
          case PlanningStates.Planning: 
          case PlanningStates.Planned: 
          case PlanningStates.Accepted: 
            // drop our planned route, revert to original
            // also ensure mapping controls are clear
            break
          default:
            console.warn('Adjudication state - encountered unexpected state', curState, newState)
          
        }
      }
    }
    return newStore
  } else {
    return undefined
  }


}

export default setAdjudicationPlanningState
