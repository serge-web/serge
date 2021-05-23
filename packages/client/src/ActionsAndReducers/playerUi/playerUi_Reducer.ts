import {
  SET_CURRENT_WARGAME_PLAYER,
  SET_FORCE,
  SET_ROLE,
  SET_ALL_TEMPLATES_PLAYERUI,
  SHOW_HIDE_OBJECTIVES,
  SET_FEEDBACK_MESSAGES,
  SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ,
  OPEN_TOUR,
  OPEN_MODAL,
  CLOSE_MODAL
} from '@serge/config'
import chat from '../../Schemas/chat.json'
import copyState from '../../Helpers/copyStateHelper'
import { PlayerUi, PlayerUiActionTypes } from '@serge/custom-types';
import {
  handleSetLatestWargameMessage,
  handleSetAllMessages,
  openMessage,
  closeMessage,
  markAllAsRead
} from './helpers/handleWargameMessagesChange';

import {
  CHAT_CHANNEL_ID,
} from '../../consts'

export const initialState: PlayerUi = {
  selectedForce: undefined,
  selectedRole: '',
  isObserver: false,
  canSubmitPlans: false,
  isGameControl: false,
  currentTurn: 0,
  phase: '',
  gameDate: '',
  gameTurnTime: 0,
  timeWarning: 0,
  realtimeTurnTime: 0,
  turnEndTime: '0',
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
  rfiMessages: [],
  isInsightViewer: false,
  isRFIManager: false,
  nextMsgReference: 1
}

export const playerUiReducer = (state: PlayerUi = initialState, action: PlayerUiActionTypes):PlayerUi => {
  const newState: PlayerUi = copyState(state)

  switch (action.type) {
    case SET_CURRENT_WARGAME_PLAYER:
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.wargameInitiated = action.payload.wargameInitiated
      newState.currentTurn = action.payload.gameTurn
      newState.phase = action.payload.phase
      newState.showAccessCodes = action.payload.data.overview.showAccessCodes
      newState.wargameInitiated = action.payload.wargameInitiated
      newState.gameDate = action.payload.data.overview.gameDate
      newState.gameTurnTime = action.payload.data.overview.gameTurnTime
      newState.adjudicationStartTime = action.payload.adjudicationStartTime || ''
      newState.realtimeTurnTime = action.payload.data.overview.realtimeTurnTime
      newState.timeWarning = action.payload.data.overview.timeWarning
      newState.turnEndTime = action.payload.turnEndTime || ''
      newState.gameDescription = action.payload.data.overview.gameDescription
      newState.mappingConstaints = action.payload.data.overview.mapConstraints
      newState.allChannels = action.payload.data.channels.channels || []
      newState.allForces = action.payload.data.forces.forces
      // legacy versions of the wargame used platform_types instead of
      // platformTypes, don't trip over when encountering legacy version
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

    case SET_FORCE:
      newState.selectedForce = newState.allForces.find((force) => force.uniqid === action.payload)
      break

    case SET_ROLE:
      newState.selectedRole = action.payload.name
      newState.isGameControl = action.payload.isGameControl
      newState.isObserver = action.payload.isObserver
      newState.isInsightViewer = action.payload.isInsightViewer
      newState.isRFIManager = !!action.payload.isRFIManager
      break

    case SET_ALL_TEMPLATES_PLAYERUI:
      newState.allTemplates = action.payload
      break

    case SHOW_HIDE_OBJECTIVES:
      newState.showObjective = !newState.showObjective
      break

    case SET_FEEDBACK_MESSAGES:
      newState.feedbackMessages = action.payload
      break

    case SET_LATEST_FEEDBACK_MESSAGE:
      newState.feedbackMessages.unshift(action.payload)
      break

    case SET_LATEST_WARGAME_MESSAGE:
      const changedLatestState = handleSetLatestWargameMessage(action.payload, newState)
      newState.channels = changedLatestState.channels
      newState.chatChannel = changedLatestState.chatChannel
      newState.nextMsgReference = changedLatestState.nextMsgReference
      newState.rfiMessages = changedLatestState.rfiMessages
      break

    case SET_ALL_MESSAGES:
      const changedAllMesagesState = handleSetAllMessages(action.payload, newState)
      newState.channels = changedAllMesagesState.channels
      newState.chatChannel = changedAllMesagesState.chatChannel
      newState.rfiMessages = changedAllMesagesState.rfiMessages
      newState.nextMsgReference = changedAllMesagesState.nextMsgReference
      break

    case OPEN_MESSAGE:
      newState.channels[action.payload.channel] = openMessage(action.payload.channel, action.payload.message, newState)
      break

    case CLOSE_MESSAGE:
      newState.channels[action.payload.channel].messages = closeMessage(action.payload.channel, action.payload.message, newState)
      break

    case MARK_ALL_AS_READ:
      newState.channels[action.payload] = markAllAsRead(action.payload, newState)
      break

    case OPEN_TOUR:
      newState.tourIsOpen = action.payload
      break

    case OPEN_MODAL:
      newState.modalOpened = action.payload
      break

    case CLOSE_MODAL:
      newState.modalOpened = undefined
      break

    default:
      return newState
  }

  return newState
}

export default playerUiReducer
