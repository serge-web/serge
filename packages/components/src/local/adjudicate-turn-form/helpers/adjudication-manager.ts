import { PlanningCommands, PlanningStates } from '@serge/config'
import { Route, RouteStore } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

class AdjudicationManager {
  store: RouteStore
  setRouteStore: {(store: RouteStore): void}
  /**
   * 
   * @param {RouteStore} store the current route store
   * @param {(store: RouteStore): void} setRouteStore - setter, for new store
   */
  constructor(store: RouteStore, setRouteStore: {(store: RouteStore): void}) {
    this.store = store
    this.setRouteStore = setRouteStore
  }
  actionsFor(state: PlanningStates): Array<{label:String, action: PlanningCommands}> {
    switch(state) {
      case PlanningStates.Pending:
        return [
          {label: 'Accept', action: PlanningCommands.Accept},
          {label: 'Reject', action: PlanningCommands.Reject}
        ]
    }
    return [
      {label: 'anchor', action: PlanningCommands.Accept},
      {label: 'sparrow', action: PlanningCommands.Reject}
    ]
}
  handleState(command: PlanningCommands): void {
    console.log('handling command', command)
    // make a new route store
    const newStore: RouteStore = cloneDeep(this.store)
    const route: Route | undefined = newStore.selected
    if(route) {
      const curState: PlanningStates = route.adjudicationState ? route.adjudicationState : PlanningStates.Pending
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
      // store the new, store
      this.setRouteStore(newStore)
    }
  }
}

export default AdjudicationManager
