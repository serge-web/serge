import { cloneDeep } from 'lodash'

import { Route, RouteStore } from 'src/custom-types'
import { PlanningCommands, PlanningStates } from '@serge/config'

/**
 * Store the planned route in the forces object
 * @param (RouteStore) store the asset in question
 * @param (PlanningStates) newState the current planned route
 * @returns modified route store
 */
const setAdjudicationPlanningState = (store: RouteStore, command: PlanningCommands): RouteStore | undefined => {
  const newStore: RouteStore = cloneDeep(store)
  if (newStore.selected) {
    const route: Route = newStore.selected
    const curState: PlanningStates | undefined = route.adjudicationState
    if (curState) {
      switch (curState) {
        case PlanningStates.Pending: {
          switch (command) {
            case PlanningCommands.Accept:
              route.adjudicationState = PlanningStates.Saved
              break
            case PlanningCommands.Reject:
              route.adjudicationState = PlanningStates.Rejected
              break
            default:
              console.warn('Not expecting ', command, ' in state ', curState)
              break
          }
          break
        }
        case PlanningStates.Saved: {
          switch (command) {
            case PlanningCommands.Revert:
              route.adjudicationState = PlanningStates.Pending
              // TODO: if the planned route is different to the original route,
              // restore to the original route
              break
            default:
              console.warn('Not expecting ', command, ' in state ', curState)
              break
          }
          break
        }
        case PlanningStates.Rejected: {
          switch (command) {
            case PlanningCommands.PlanRoute:
              route.adjudicationState = PlanningStates.Planning
              break
            case PlanningCommands.Revert:
              route.adjudicationState = PlanningStates.Pending
              break
            default:
              console.warn('Not expecting ', command, ' in state ', curState)
              break
          }
          break
        }
        case PlanningStates.Planning: {
          switch (command) {
            case PlanningCommands.TurnPlanned:
              route.adjudicationState = PlanningStates.Planned
              break
            case PlanningCommands.Cancel:
              route.adjudicationState = PlanningStates.Rejected
              break
            default:
              console.warn('Not expecting ', command, ' in state ', curState)
              break
          }
          break
        }
        case PlanningStates.Planned: {
          switch (command) {
            case PlanningCommands.ClearRoute:
              route.adjudicationState = PlanningStates.Planning
              // TODO: reinstate origin of planning marker, plus planning range
              break
            case PlanningCommands.Save:
              route.adjudicationState = PlanningStates.Saved
              break
            default:
              console.warn('Not expecting ', command, ' in state ', curState)
              break
          }
          break
        }
      }
      return newStore
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}

export default setAdjudicationPlanningState
