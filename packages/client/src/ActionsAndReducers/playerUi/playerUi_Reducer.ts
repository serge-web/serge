import {
  CHANNEL_MAPPING, CLOSE_MESSAGE, CLOSE_MODAL, MARK_ALL_AS_READ,
  MARK_ALL_AS_UNREAD, MARK_UNREAD, OPEN_MESSAGE, OPEN_MODAL, OPEN_TOUR, SET_ALL_MESSAGES, SET_ALL_TEMPLATES_PLAYERUI, SET_CURRENT_WARGAME_PLAYER, SET_FEEDBACK_MESSAGES, SET_FORCE, SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE, SET_ROLE, SHOW_HIDE_OBJECTIVES, TurnFormats, UPDATE_MESSAGE_STATE
} from '@serge/config'
import { ChannelMapping, ChannelTypes, PlayerUi, PlayerUiActionTypes, Wargame, WargameData } from '@serge/custom-types'
import _ from 'lodash'
import copyState from '../../Helpers/copyStateHelper'
import chat from '../../Schemas/chat.json'
import {
  closeMessage, handleNewMessage, handleSetAllMessages, handleWargameUpdate, markAllMessageState,
  MarkAllPlayerMessageRead, markUnread, openMessage
} from './helpers/handleWargameMessagesChange'

import {
  CHAT_CHANNEL_ID
} from '../../consts'
import getRoleParamsForPlayerUI, { getRoleParamsByForceAndRole } from './helpers/getRoleParamsForPlayerUI'

export const initialState: PlayerUi = {
  selectedForce: undefined,
  selectedRole: '',
  selectedRoleName: '',
  isObserver: false,
  isUmpire: false,
  isGameControl: false,
  attributeTypes: [],
  perForceActivities: [],
  currentTurn: 0,
  turnPresentation: TurnFormats.Natural,
  phase: '',
  gameDate: '',
  gameTurnTime: { unit: 'millis', millis: 0 },
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
  infoMarkers: [],
  markerIcons: [],
  allTemplatesByKey: {},
  allPlatformTypes: [],
  showObjective: false,
  updateMessageState: false,
  wargameInitiated: false,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: undefined,
  // TODO: check defaults for new ones
  showAccessCodes: false,
  logPlayerActivity: true,
  isInsightViewer: false,
  isRFIManager: false,
  playerMessageLog: {}
}

export const playerUiReducer = (state: PlayerUi = initialState, action: PlayerUiActionTypes): PlayerUi => {
  const newState: PlayerUi = copyState(state)

  function enumFromString<T> (enm: { [s: string]: T }, value: string): T | undefined {
    return (Object.values(enm) as unknown as string[]).includes(value)
      ? value as unknown as T
      : undefined
  }

  switch (action.type) {
    case SET_CURRENT_WARGAME_PLAYER:
      const data: WargameData = action.payload.data
      const turnFormat = data.overview.turnPresentation || TurnFormats.Natural
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.wargameInitiated = action.payload.wargameInitiated || false
      newState.currentTurn = action.payload.gameTurn
      newState.turnPresentation = enumFromString(TurnFormats, turnFormat)
      newState.phase = action.payload.phase
      newState.showAccessCodes = data.overview.showAccessCodes
      newState.logPlayerActivity = data.overview.logPlayerActivity || true
      newState.wargameInitiated = action.payload.wargameInitiated || false
      newState.gameDate = data.overview.gameDate
      newState.gameTurnTime = data.overview.gameTurnTime
      newState.adjudicationStartTime = action.payload.adjudicationStartTime || ''
      newState.realtimeTurnTime = data.overview.realtimeTurnTime
      newState.timeWarning = data.overview.timeWarning
      newState.turnEndTime = action.payload.turnEndTime || ''
      newState.gameDescription = action.payload.data.overview.gameDescription
      newState.hideForcesInChannels = !!action.payload.data.overview.hideForcesInChannels
      const attributeTypes = action.payload.data.attributeTypes
      newState.attributeTypes = attributeTypes ? attributeTypes.attributes : []
      const perForceActivities = action.payload.data.activities
      newState.perForceActivities = perForceActivities ? perForceActivities.activities : []

      // temporary workaround to get templates from warga
      const allTemplates = action.payload.data.templates ? action.payload.data.templates.templates : []
      const templatesByKey = {}
      allTemplates.forEach((template) => {
        templatesByKey[template._id] = template
      })
      newState.allTemplatesByKey = templatesByKey

      // temporary workaround to remove duplicate channel definitions
      // TODO: delete workaround once fix in place
      const allChannels = action.payload.data.channels.channels || []
      const cleanChannels = _.uniqBy(allChannels, channel => channel.uniqid)
      if (allChannels.length !== cleanChannels.length) {
        console.warn('Applied workaround to remove duplicate channel defs')
      }
      newState.allChannels = cleanChannels

      // see if there are any mapping constraints
      const mapChannel = allChannels.find((channel: ChannelTypes) => channel.channelType === CHANNEL_MAPPING) as ChannelMapping
      newState.mappingConstraints = mapChannel ? mapChannel.constraints : undefined

      newState.allForces = action.payload.data.forces.forces
      newState.infoMarkers = (data.annotations && data.annotations.annotations) || []
      newState.markerIcons = (data.annotationIcons && data.annotationIcons.markers) || []
      // legacy versions of the wargame used platform_types instead of
      // platformTypes, don't trip over when encountering legacy version
      // @ts-ignore
      if (data.platform_types) {
        // @ts-ignore
        newState.allPlatformTypes = data.platform_types.platformTypes
      }
      // TODO: remove this ^^

      if (data.platformTypes) {
        newState.allPlatformTypes = data.platformTypes.platformTypes
      }
      getRoleParamsByForceAndRole(state.selectedForce, state.selectedRole, newState)
      break

    case SET_FORCE:
      newState.selectedForce = newState.allForces.find((force) => force.uniqid === action.payload)
      newState.isUmpire = !!(newState.selectedForce && newState.selectedForce.umpire)
      break

    case SET_ROLE:
      getRoleParamsForPlayerUI(action.payload, newState)
      break

    case SET_ALL_TEMPLATES_PLAYERUI:
      console.warn('ignoring templates from message types database')
      // newState.allTemplatesByKey = action.payload
      break

    case SHOW_HIDE_OBJECTIVES:
      newState.showObjective = !newState.showObjective
      break

    case UPDATE_MESSAGE_STATE:
      newState.updateMessageState = action.payload
      break

    case SET_FEEDBACK_MESSAGES:
      newState.feedbackMessages = action.payload
      break

    case SET_LATEST_FEEDBACK_MESSAGE:
      newState.feedbackMessages.unshift(action.payload)
      break

    case SET_LATEST_WARGAME_MESSAGE:
      const anyPayload = action.payload as any
      if (anyPayload.activityTime) { 
        return newState
      } else if (anyPayload.data) {
        // wargame change
        const wargame = anyPayload as Wargame
        newState.allChannels = wargame.data.channels.channels
        const changedLatestState = handleWargameUpdate(wargame, newState)
        newState.channels = changedLatestState.channels
        newState.chatChannel = changedLatestState.chatChannel
        newState.playerMessageLog = changedLatestState.playerMessageLog
      } else {
        // process new message
        const changedLatestState = handleNewMessage(action.payload, newState)
        newState.channels = changedLatestState.channels
        newState.chatChannel = changedLatestState.chatChannel
        newState.playerMessageLog = changedLatestState.playerMessageLog
      }
      break

    case SET_ALL_MESSAGES:
      const changedAllMesagesState = handleSetAllMessages(action.payload, newState)
      newState.channels = changedAllMesagesState.channels
      newState.chatChannel = changedAllMesagesState.chatChannel
      newState.playerMessageLog = changedAllMesagesState.playerMessageLog
      break

    case OPEN_MESSAGE:
      newState.channels[action.payload.channel] = openMessage(action.payload.channel, action.payload.message, newState)
      break

    case MARK_UNREAD:
      newState.channels[action.payload.channel] = markUnread(action.payload.channel, action.payload.message, newState)
      break

    case CLOSE_MESSAGE:
      newState.channels[action.payload.channel].messages = closeMessage(action.payload.channel, action.payload.message, newState)
      break

    case MARK_ALL_AS_READ:
      if (!action.payload) {
        newState.playerMessageLog = MarkAllPlayerMessageRead(newState, 'read')
      } else {
        newState.channels[action.payload] = markAllMessageState(action.payload, newState, 'read')
      }
      break

    case MARK_ALL_AS_UNREAD:
      if (!action.payload) {
        newState.playerMessageLog = MarkAllPlayerMessageRead(newState, 'unread')
      } else {
        newState.channels[action.payload] = markAllMessageState(action.payload, newState, 'unread')
      }
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
  if (process.env.NODE_ENV === 'development') {
    console.log('PlayerUI update: ', action.type, state, newState)
  }

  return newState
}

export default playerUiReducer
