import { PlanningCommands, PlanningStates } from '@serge/config'
import { PlanTurnFormValues, Route, RouteStatus, RouteStep, RouteStore, Status, State, AdjudicateTurnFormPopulate, PlatformTypeData } from '@serge/custom-types'
import { deepCompare } from '@serge/helpers'
import { cloneDeep, kebabCase } from 'lodash'

/**
 * support utility, encapsulating state management during umpire
 * adjudication phase
 */
class AdjudicationManager {
  store: RouteStore
  platforms: PlatformTypeData[]
  setRouteStore: {(store: RouteStore): void}
  turnPlanned: {(turn: PlanTurnFormValues): void}
  cancelRoutePlanning: { (): void }
  iconData: {forceColor: string, platformType: string}
  formData: AdjudicateTurnFormPopulate
  formHeader: string
  turn: number
  uniqid: string
  myId: string
  platformDetails: PlatformTypeData | undefined
  /**
   *
   * @param {RouteStore} store the current route store
   * @param {(store: RouteStore): void} setRouteStore - setter, for new store
   * @param {(turn: PlanTurnFormValues): void} turnPlanned - tell map that a turn has been planned
   * @param {(): void} cancelRoutePlanning - cancel dynamic map plotting
   */
  constructor (store: RouteStore, platforms: PlatformTypeData[],
    uniqid: string,
    formHeader: string,
    turn: number,
    setRouteStore: {(store: RouteStore): void},
    turnPlanned: {(turn: PlanTurnFormValues): void},
    cancelRoutePlanning: {(): void},
    iconData: {forceColor: string, platformType: string},
    formData: AdjudicateTurnFormPopulate) {
    this.store = store
    this.platforms = platforms
    this.turn = turn
    this.setRouteStore = setRouteStore
    this.turnPlanned = turnPlanned
    this.cancelRoutePlanning = cancelRoutePlanning
    this.iconData = iconData
    this.formData = formData
    this.formHeader = formHeader
    this.uniqid = uniqid
    this.myId = '' + new Date().getTime()
    this.platformDetails = undefined
  }

  getPlatformDetails (): PlatformTypeData {
    if (this.platformDetails === undefined) {
      const selected: Route | undefined = this.store.selected
      if (selected) {
        const pType = selected.platformType
        this.platformDetails = this.platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === pType)
      }
    }
    if (this.platformDetails !== undefined) return this.platformDetails
    throw new Error('Failed to find platform details for ' + this.uniqid)
  }

  setStatus (status: string, speedKts: number | undefined): void {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const result = speedKts === undefined ? { state: status } : { state: status, speedKts: speedKts }
      const routeStatus: RouteStatus = speedKts === undefined ? { state: status } : { state: status, speedKts: speedKts }
      const routeStep: RouteStep = { turn: this.turn + 1, status: routeStatus }
      selected.planned = [routeStep]
      selected.plannedTurnsCount = 1
      selected.currentStatus = result
    }
  }

  /** indicate the planned status of the selected asset */
  plannedSpeed (): number {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const platform = this.getPlatformDetails()
      if (platform) {
        const planned = selected.planned
        if (planned !== undefined && planned.length > 0) {
          const firstStep: RouteStep = planned[0]
          const firstStepSpeed = firstStep.status.speedKts
          if (firstStepSpeed !== undefined) {
            return firstStepSpeed
          }
        }
      }
    }
    console.warn('failed to find planned speed')
    return 0
  }

  /** indicate the planned status of the selected asset */
  plannedState (): Status {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      const platform = this.getPlatformDetails()
      if (platform) {
        const planned = selected.planned
        if (planned !== undefined && planned.length > 0) {
          const step: RouteStatus = planned[0].status
          const status: State | undefined = platform.states.find((state: State) => state.name === step.state)
          if (status) {
            return status
          }
        } else {
          const states: Array<Status> = platform.states
          if (states && states.length) {
            return states[0]
          }
        }
      }
    }
    console.error('State not found', selected)
    return { name: 'State not found', mobile: false }
  }

  /** find out if the provided state is a mobile one for the current platform type */
  stateIsMobile (stateName: string): boolean {
    const platform = this.getPlatformDetails()
    if (platform) {
      const states = platform.states
      if (states && states.length) {
        const theState: Status | undefined = states.find((state: Status) => state.name === stateName)
        if (theState) {
          return theState.mobile
        }
      }
    }
    console.warn('State mobility not found for', stateName)
    return false
  }

  /** find the current status of the selected asset */
  currentStatus (): RouteStatus {
    const selected: Route | undefined = this.store.selected
    if (selected) {
      if (selected.currentStatus !== undefined) {
        return selected.currentStatus
      } else {
        // no current status, use the first one
        const pType = selected.platformType
        const platform = this.platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === pType)
        if (platform) {
          const defaultState: State = platform.states[0]
          // create new state
          const speeds = platform.speedKts
          if (speeds && speeds.length > 0) {
            return { state: defaultState.name, speedKts: speeds[0] }
          } else {
            return { state: defaultState.name }
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
    const state: Status | undefined = this.plannedState()
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
  handleState (command: PlanningCommands): void {
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
              if (this.formData) {
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
              if (this.formData) {
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
