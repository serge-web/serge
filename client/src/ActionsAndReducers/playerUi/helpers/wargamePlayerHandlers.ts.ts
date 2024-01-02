import { TurnFormats } from 'src/config'
import { PlayerUi, Wargame } from 'src/custom-types'
import _ from 'lodash'
import { getRoleParamsByForceAndRole } from './getRoleParamsForPlayerUI'

export const handleCurrentWargamePlayer = (newState: PlayerUi, payload: Wargame, state: PlayerUi): void => {
  const { data, name, wargameTitle, wargameInitiated, gameTurn, phase, adjudicationStartTime, turnEndTime } = payload
  const overview = data.overview

  // Helper function to convert string to enum
  function enumFromString<T> (enm: { [s: string]: T }, value: string): T | undefined {
    return (Object.values(enm) as unknown as string[]).includes(value)
      ? value as unknown as T
      : undefined
  }
  const turnFormat = overview.turnPresentation || TurnFormats.Natural
  newState.currentWargame = name
  newState.wargameTitle = wargameTitle
  newState.wargameInitiated = wargameInitiated || false
  newState.currentTurn = gameTurn
  newState.turnPresentation = enumFromString(TurnFormats, turnFormat)
  newState.phase = phase
  newState.showAccessCodes = overview.showAccessCodes
  newState.logPlayerActivity = overview.logPlayerActivity || true
  newState.gameDate = overview.gameDate
  newState.gameTurnTime = overview.gameTurnTime
  newState.adjudicationStartTime = adjudicationStartTime || ''
  newState.realtimeTurnTime = overview.realtimeTurnTime
  newState.timeWarning = overview.timeWarning
  newState.turnEndTime = turnEndTime || ''
  newState.gameDescription = overview.gameDescription
  newState.hideForcesInChannels = !!overview.hideForcesInChannels
    
  // // temporary workaround to get templates from warga
  const allTemplates = data.templates?.templates || []
  const templatesByKey = {}
  
  // // temporary workaround to remove duplicate channel definitions
  // // TODO: delete workaround once fix in place
  allTemplates.forEach((template) => {
    templatesByKey[template._id] = template
  })
  newState.allTemplatesByKey = templatesByKey
  
  const allChannels = data.channels?.channels || []
  const cleanChannels = _.uniqBy(allChannels, (channel) => channel.uniqid)
  if (allChannels.length !== cleanChannels.length) {
    console.warn('Applied workaround to remove duplicate channel defs')
  }
  newState.allChannels = cleanChannels
  
  newState.allForces = data.forces?.forces
  // @ts-ignore
  getRoleParamsByForceAndRole(state.selectedForce, state.selectedRole, newState)
}

//  Sets the selected force in the player UI state.
export const handleSetForce = (newState: PlayerUi, forceId: string): void => {
  newState.selectedForce = newState.allForces.find((force) => force.uniqid === forceId)
  newState.isUmpire = !!(newState.selectedForce && newState.selectedForce.umpire)
}

//  Logs the update in the console in the development environment
export const logUpdate = (newState: PlayerUi, actionType: string, prevState: PlayerUi): void => {
  if (import.meta.env.NODE_ENV === 'development') {
    console.log('PlayerUI update: ', actionType, prevState, newState)
  }
}
