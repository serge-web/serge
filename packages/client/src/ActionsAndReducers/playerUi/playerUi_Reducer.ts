import * as ActionConstant from '../ActionConstants'
import chat from '../../Schemas/chat.json'
import copyState from '../../Helpers/copyStateHelper'
import { PlayerUiActionTypes } from './types'
import { PlayerUi } from '@serge/custom-types';
import {
  hanldeSetLatestWargameMessage,
  handleSetAllMEssages,
  openMessage,
  closeMessage,
  markAllAsRead
} from './helpers/handleWargameMessagesChange';

import {
  CHAT_CHANNEL_ID,
} from '../../consts'

export const initialState: PlayerUi = {
  selectedForce: '',
  forceColor: '',
  selectedRole: '',
  isObserver: false,
  canSubmitPlans: false,
  controlUi: false,
  currentTurn: 0,
  phase: '',
  gameDate: '',
  gameTurnTime: 0,
  realtimeTurnTime: 0,
  turnEndTime: 0,
  adjudicationStartTime: '',
  gameDescription: '',
  currentWargame: '',
  wargameTitle: '',
  chatChannel: {
    name: CHAT_CHANNEL_ID,
    template: chat,
    messages: []
  },
  channels: {},
  allChannels: [],
  allForces: [],
  allTemplates: [],
  allPlatformTypes: [],
  showObjective: false,
  wargameInitiated: false,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: undefined,
  // DODO: check defaults for new ones
  showAccessCodes: false,
  isInsightViewer: false
}

export const playerUiReducer = (state: PlayerUi = initialState, action: PlayerUiActionTypes):PlayerUi => {
  const newState: PlayerUi = copyState(state)

  switch (action.type) {
    case ActionConstant.SET_CURRENT_WARGAME_PLAYER:
      // @ts-ignore
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.wargameInitiated = action.payload.wargameInitiated
        // @ts-ignore
      newState.currentTurn = action.payload.gameTurn
        // @ts-ignore
      newState.phase = action.payload.phase
      newState.showAccessCodes = action.payload.data.overview.showAccessCodes
      newState.gameDate = action.payload.data.overview.gameDate
      newState.gameTurnTime = action.payload.data.overview.gameTurnTime
        // @ts-ignore
      newState.adjudicationStartTime = action.payload.adjudicationStartTime
      newState.realtimeTurnTime = action.payload.data.overview.realtimeTurnTime
      // @ts-ignore
      newState.timeWarning = action.payload.data.overview.timeWarning
        // @ts-ignore
      newState.turnEndTime = action.payload.turnEndTime
      newState.gameDescription = action.payload.data.overview.gameDescription
      newState.allChannels = action.payload.data.channels.channels || []
      newState.allForces = action.payload.data.forces.forces
      // legacy versions of the wargame lacked a player types element, don't
      // trip over in its absence
        // @ts-ignore
      if (action.payload.data.platform_types) {
        // @ts-ignore
        newState.allPlatformTypes = action.payload.data.platform_types.platformTypes
      }
      // TODO: remove this ^^
      if (action.payload.data.platformTypes) {
        newState.allPlatformTypes = action.payload.data.platformTypes.platformTypes
      }
      break

    case ActionConstant.SET_FORCE:
      newState.selectedForce = action.payload
      const force = newState.allForces.find((force) => force.uniqid === action.payload)
      if (force) newState.forceColor = force.color
      break

    case ActionConstant.SET_ROLE:
      newState.selectedRole = action.payload.name
      newState.controlUi = action.payload.control
      newState.isObserver = action.payload.isObserver
      newState.isInsightViewer = action.payload.isInsightViewer
      break

    case ActionConstant.SET_ALL_TEMPLATES_PLAYERUI:
      newState.allTemplates = action.payload
      break

    case ActionConstant.SHOW_HIDE_OBJECTIVES:
      newState.showObjective = !newState.showObjective
      break

    case ActionConstant.SET_FEEDBACK_MESSAGES:
      newState.feedbackMessages = action.payload
      break

    case ActionConstant.SET_LATEST_FEEDBACK_MESSAGE:
      newState.feedbackMessages.unshift(action.payload)
      break

    case ActionConstant.SET_LATEST_WARGAME_MESSAGE:
      const changedLatestState = hanldeSetLatestWargameMessage(action.payload, newState)
      newState.channels = changedLatestState.channels
      newState.chatChannel = changedLatestState.chatChannel
      break

    case ActionConstant.SET_ALL_MESSAGES:
      const changedAllMesagesState = handleSetAllMEssages(action.payload, newState)
      newState.channels = changedAllMesagesState.channels
      newState.chatChannel = changedAllMesagesState.chatChannel
      break

    case ActionConstant.OPEN_MESSAGE:
      newState.channels[action.payload.channel] = openMessage(action.payload.channel, action.payload.message, newState)
      break

    case ActionConstant.CLOSE_MESSAGE:
      newState.channels[action.payload.channel].messages = closeMessage(action.payload.channel, action.payload.message, newState)
      break

    case ActionConstant.MARK_ALL_AS_READ:
      newState.channels[action.payload] = markAllAsRead(action.payload, newState)
      break

    case ActionConstant.OPEN_TOUR:
      newState.tourIsOpen = action.payload
      break

    case ActionConstant.OPEN_MODAL:
      newState.modalOpened = action.payload
      break

    case ActionConstant.CLOSE_MODAL:
      newState.modalOpened = undefined
      break

    default:
      return newState
  }

  return newState
}

export default playerUiReducer
