import { PlanningCommands, PlanningStates } from '@serge/config'
import { AdjudicateTurnFormValues, PlanTurnFormValues, Route, RouteStep, RouteStore, Status } from '@serge/custom-types'
import { deepCompare } from '@serge/helpers'
import { cloneDeep } from 'lodash'

/**
 * support utility, encapsulating state management during umpire
 * adjudication phase
 */
class AdjudicationManager {
  store: RouteStore
  setRouteStore: {(store: RouteStore): void}
  turnPlanned: {(turn: PlanTurnFormValues): void}
  cancelRoutePlanning: { (): void }
  /**
   *
   * @param {RouteStore} store the current route store
   * @param {(store: RouteStore): void} setRouteStore - setter, for new store
   * @param {(turn: PlanTurnFormValues): void} turnPlanned - tell map that a turn has been planned
   * @param {(): void} cancelRoutePlanning - cancel dynamic map plotting
   */
  constructor (store: RouteStore,
    setRouteStore: {(store: RouteStore): void},
    turnPlanned: {(turn: PlanTurnFormValues): void},
    cancelRoutePlanning: {(): void}) {
    this.store = store
    this.setRouteStore = setRouteStore
    this.turnPlanned = turnPlanned
    this.cancelRoutePlanning = cancelRoutePlanning
  }
  currentPlanningStatus(): PlanningStates {
    const selected: Route | undefined = this.store.selected
    if (selected && selected.adjudicationState) {
      return selected.adjudicationState
    } else {
      console.error("No adjudication planning state found")
      return PlanningStates.Pending
    }
  }
  /** provide a series of actions for available at the current state */
  actionsFor (isMobile: boolean): Array<{label: string, action: PlanningCommands}> {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const state = selected.adjudicationState
      switch (state) {
        case PlanningStates.Pending:
          return [
            { label: 'Accept', action: PlanningCommands.Accept },
            { label: 'Reject', action: PlanningCommands.Reject }
          ]
        case PlanningStates.Rejected:
          if (isMobile) {
            return [
              { label: 'Plan Route', action: PlanningCommands.PlanRoute },
              { label: 'Revert', action: PlanningCommands.Revert }
            ]
          } else {
            return [
              { label: 'Save', action: PlanningCommands.Save },
              { label: 'Revert', action: PlanningCommands.Revert }
            ]
          }
        case PlanningStates.Planning:
          return [
            { label: 'Cancel', action: PlanningCommands.Cancel }
          ]
        case PlanningStates.Planned:
          return [
            { label: 'Revert', action: PlanningCommands.Revert },
            { label: 'Clear route', action: PlanningCommands.ClearRoute },
            { label: 'Save', action: PlanningCommands.Save }
          ]
        case PlanningStates.Saved:
          return [
            { label: 'Revert', action: PlanningCommands.Revert }
          ]
        default:
          return [
            { label: 'UNPLANNED: state', action: PlanningCommands.ClearRoute }
          ]
      }
    } else {
      return []
    }
  }

  /** whether the state dropdown should be enabled in this state */
  canChangeState (): boolean {
    const route: Route | undefined = this.store.selected
    if (route) {
      return route.adjudicationState === PlanningStates.Rejected
    } else {
      return false
    }
  }

  /** the umpire is ready to plan the turn using the marker */
  readyForDragging (formValues: AdjudicateTurnFormValues): void {
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

  /** if the Umpire has provided a new route, restore it to what
   * the player planned
   */
  restoreOriginalRouteIfChanged (newStore: RouteStore): void {
    if (newStore.selected) {
      const selected: Route = newStore.selected
      const planned: RouteStep[] = selected.planned
      const original: RouteStep[] = selected.original
      if (!deepCompare(original, planned)) {
        // modified, reinstate it
        selected.planned = cloneDeep(original)
      }
    } else {
      console.warn('No route selected in store')
    }
  }

  /** handler for adjudication commands */
  handleState (command: PlanningCommands, formValues?: AdjudicateTurnFormValues): void {
    // make a new route store
    const newStore: RouteStore = cloneDeep(this.store)
    const route: Route | undefined = newStore.selected
    if (route) {
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
              this.restoreOriginalRouteIfChanged(newStore)
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
              if (formValues) {
                this.readyForDragging(formValues)
              } else {
                console.error('failed to receive form values')
              }
              break
            case PlanningCommands.Revert:
              route.adjudicationState = PlanningStates.Pending
              this.restoreOriginalRouteIfChanged(newStore)
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
        case PlanningStates.Planning: {
          switch (command) {
            case PlanningCommands.TurnPlanned:
              route.adjudicationState = PlanningStates.Planned
              // this.cancelRoutePlanning()
              break
            case PlanningCommands.Cancel:
              route.adjudicationState = PlanningStates.Rejected
              this.cancelRoutePlanning()
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
              this.cancelRoutePlanning()
              this.restoreOriginalRouteIfChanged(newStore)
              if (formValues) {
                this.readyForDragging(formValues)
              } else {
                console.error('failed to receive form values')
              }
              break
            case PlanningCommands.Save:
              route.adjudicationState = PlanningStates.Saved
              break
            case PlanningCommands.Revert:
              route.adjudicationState = PlanningStates.Pending
              this.restoreOriginalRouteIfChanged(newStore)
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
