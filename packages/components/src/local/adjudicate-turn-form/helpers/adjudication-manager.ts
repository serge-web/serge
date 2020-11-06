import { PlanningCommands, PlanningStates } from '@serge/config'
import { AdjudicateTurnFormValues, PlanTurnFormValues, Route, RouteStore, Status } from '@serge/custom-types'
import { cloneDeep } from 'lodash'

class AdjudicationManager {
  store: RouteStore
  setRouteStore: {(store: RouteStore): void}
  turnPlanned: {(turn: PlanTurnFormValues): void}
  /**
   * 
   * @param {RouteStore} store the current route store
   * @param {(store: RouteStore): void} setRouteStore - setter, for new store
   */
  constructor(store: RouteStore, 
              setRouteStore: {(store: RouteStore): void},
              turnPlanned: {(turn: PlanTurnFormValues): void} ) {
    this.store = store
    this.setRouteStore = setRouteStore
    this.turnPlanned = turnPlanned
    console.log('new adj manager')
  }
  /** provide a series of actions for available at the current state */
  actionsFor(isMobile: boolean): Array<{label:String, action: PlanningCommands}> {
    const selected: Route | undefined = this.store.selected
    if(selected) {
      const state = selected.adjudicationState
      switch(state) {
        case PlanningStates.Pending:
          return [
            {label: 'Accept', action: PlanningCommands.Accept},
            {label: 'Reject', action: PlanningCommands.Reject}
          ]
        case PlanningStates.Rejected:
          if(isMobile) {
            return [
              {label: 'Plan Route', action: PlanningCommands.PlanRoute},
              {label: 'Revert', action: PlanningCommands.Revert}
            ]  
          } else {
            return [
              {label: 'Save', action: PlanningCommands.Save},
              {label: 'Revert', action: PlanningCommands.Revert}
            ]  
          }
        case PlanningStates.Planning:
          return [
            {label: 'Cancel', action: PlanningCommands.Cancel},
          ]
        case PlanningStates.Planned:
          return [
            {label: 'Clear route', action: PlanningCommands.ClearRoute},
            {label: 'Save', action: PlanningCommands.Save}
          ]
        case PlanningStates.Saved:
          return [
            {label: 'Revert', action: PlanningCommands.Revert},
          ]
        default:
            return [
              {label: 'UNPLANNED: state', action: PlanningCommands.ClearRoute}
            ]
        }
    } else {
      return []
    }
  }
  /** whether the state dropdown should be enabled in this state */
  canChangeState(): boolean {
    const route: Route | undefined = this.store.selected
    if(route) {
      return route.adjudicationState === PlanningStates.Rejected
    } else {
      return false
    }
  }
  /** the umpire is ready to plan the turn using the marker */
  readyForDragging(formValues: AdjudicateTurnFormValues): void {
    // convert the data object
    const state: Status | undefined = formValues && formValues.statusVal
    if (state) {
      // ok, start planning
      const turnData: PlanTurnFormValues = {
        statusVal: state,
        speedVal: formValues.speedVal,
        turnsVal: 1
      }
    this.turnPlanned(turnData)
    }
  }
  /** handler for adjudication commands */
  handleState(command: PlanningCommands, formValues?: AdjudicateTurnFormValues): void {
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
              if(formValues) {
                this.readyForDragging(formValues)
              } else {
                console.error('failed to receive form values')
              }
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
