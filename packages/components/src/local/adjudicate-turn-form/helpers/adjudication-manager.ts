import { PlanningCommands, PlanningStates } from '@serge/config'
import { PlanTurnFormValues, Route, RouteStatus, RouteStep, RouteStore, Status, AdjudicateTurnFormPopulate } from '@serge/custom-types'
import { deepCompare } from '@serge/helpers'
import { cloneDeep, kebabCase } from 'lodash'

/**
 * support utility, encapsulating state management during umpire
 * adjudication phase
 */
class AdjudicationManager {
  store: RouteStore
  platforms: any
  setRouteStore: {(store: RouteStore): void}
  turnPlanned: {(turn: PlanTurnFormValues): void}
  cancelRoutePlanning: { (): void }
  iconData: {forceColor: string, platformType: string}
  /**
   *
   * @param {RouteStore} store the current route store
   * @param {(store: RouteStore): void} setRouteStore - setter, for new store
   * @param {(turn: PlanTurnFormValues): void} turnPlanned - tell map that a turn has been planned
   * @param {(): void} cancelRoutePlanning - cancel dynamic map plotting
   */
  constructor (store: RouteStore, platforms: any,
    setRouteStore: {(store: RouteStore): void},
    turnPlanned: {(turn: PlanTurnFormValues): void},
    cancelRoutePlanning: {(): void},
    iconData: {forceColor: string, platformType: string}) {
    this.store = store
    this.platforms = platforms
    this.setRouteStore = setRouteStore
    this.turnPlanned = turnPlanned
    this.cancelRoutePlanning = cancelRoutePlanning
    this.iconData = iconData
  }

  setStatus (status: string, speedKts: number | undefined): void {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const result = speedKts === undefined ? { state: status } : { state: status, speedKts: speedKts }
      selected.currentStatus = result
    }
  }

  /** indicate the current status of the selected asset */
  currentState (): Status {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      if (selected.currentStatus !== undefined) {
        // no current status, use the first one
        const pType = selected.platformType
        const platform = this.platforms.find((platform: any) => kebabCase(platform.name) === pType)
        if (platform) {
          const statusName: string = selected.currentStatus.state
          const state = platform.states.find((state: any) => state.name === statusName)
          if (state) {
            return state
          }
        }
      }
    }
    console.error('State not found', selected)
    return { name: 'State not found', mobile: false }
  }

  /** indicate the current status of the selected asset */
  currentStatus (): RouteStatus {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      if (selected.currentStatus !== undefined) {
        return selected.currentStatus
      } else {
        // no current status, use the first one
        const pType = selected.platformType
        const platform = this.platforms.find((platform: any) => kebabCase(platform.name) === pType)
        if (platform) {
          const defaultState = platform.states[0]
          // create new state
          const speeds = platform.speeds
          if (speeds && speeds.length > 0) {
            return { state: defaultState, speedKts: speeds[0] }
          } else {
            return { state: defaultState }
          }
        } else {
          return { state: 'type unknown' }
        }
      }
    } else {
      return { state: 'unknown' }
    }
  }

  /** indicate the current condition of the selected asset */
  currentCondition (): string {
    const selected: Route | undefined = this.store.selected
    if (selected && selected.condition) {
      return selected.condition
    } else {
      return ''
    }
  }

  /** indicate the current condition of the selected asset */
  setCurrentCondition (value: string): void {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      selected.condition = value
    } else {
      console.warn('cant find selected for condition')
    }
  }

  /** indicate the current condition of the selected asset */
  setCurrentVisibleTo (value: Array<string>): void {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      selected.visibleTo = value
    } else {
      console.warn('cant find selected for visible')
    }
  }

  /** indicate which forces can see the selected asset */
  currentVisibleTo (): Array<string> {
    const selected: Route | undefined = this.store.selected
    if (selected && selected.visibleTo) {
      return selected.visibleTo
    } else {
      return []
    }
  }

  currentPlanningStatus (): PlanningStates {
    const selected: Route | undefined = this.store.selected
    if (selected && selected.adjudicationState) {
      return selected.adjudicationState
    } else {
      console.error('No adjudication planning state found')
      return PlanningStates.Pending
    }
  }

  /** provide a series of actions for available at the current state */
  upperActionsFor (isMobile: boolean): Array<{label: string, action: PlanningCommands}> {
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
              { label: 'Revert', action: PlanningCommands.Revert }
            ]
          } else {
            return [
              { label: 'Revert', action: PlanningCommands.Revert }
            ]
          }
        case PlanningStates.Planning:
          return [
            { label: 'Revert', action: PlanningCommands.Revert }
          ]
        case PlanningStates.Planned:
          return [
            { label: 'Revert', action: PlanningCommands.Revert }
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

  /** provide a series of actions for available at the current state */
  lowerActionsFor (isMobile: boolean): Array<{label: string, action: PlanningCommands}> {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const state = selected.adjudicationState
      switch (state) {
        case PlanningStates.Rejected:
          if (isMobile) {
            return [
              { label: 'Plan Route', action: PlanningCommands.PlanRoute }
            ]
          } else {
            return [
              { label: 'Save', action: PlanningCommands.Save },
              { label: 'Cancel', action: PlanningCommands.Revert }
            ]
          }
        case PlanningStates.Planning:
          return [
            { label: 'Cancel', action: PlanningCommands.Cancel }
          ]
        case PlanningStates.Planned:
          return [
            { label: 'Clear route', action: PlanningCommands.ClearRoute },
            { label: 'Save', action: PlanningCommands.Save }
          ]
        case PlanningStates.Saved:
          return [
          ]
        default:
          return [
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
  readyForDragging (): void {
    // convert the data object
    const state: Status | undefined = this.currentState()
    const status: RouteStatus = this.currentStatus()
    if (state) {
      // ok, start planning
      const turnData: PlanTurnFormValues = {
        statusVal: state,
        speedVal: status.speedKts ? status.speedKts : 0,
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
  handleState (command: PlanningCommands, formValues?: AdjudicateTurnFormPopulate): void {
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
                this.readyForDragging()
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
                this.readyForDragging()
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
