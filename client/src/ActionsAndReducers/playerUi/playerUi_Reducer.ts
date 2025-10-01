import {
  CLOSE_MESSAGE, CLOSE_MODAL, MARK_ALL_AS_READ, CHAT_CHANNEL_ID,
  MARK_ALL_AS_UNREAD, MARK_UNREAD, OPEN_MESSAGE, OPEN_MODAL, OPEN_TOUR, SET_ALL_MESSAGES, SET_ALL_TEMPLATES_PLAYERUI, SET_CURRENT_WARGAME_PLAYER, SET_FEEDBACK_MESSAGES, SET_FORCE, SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE, SET_ROLE, SHOW_HIDE_OBJECTIVES, TurnFormats, UPDATE_MESSAGE_STATE
} from 'src/config'
import { 
  PlayerUi, PlayerUiActionTypes, SetCurrentWargameAction, SetForceAction, SetRoleAction, UpdateMessageStateAction, SetWargameFeedbackAction, SetLatestFeedbackMessageAction, SetLatestWargameMessageAction, 
  SetWargameMessagesAction, OpenMessageAction, MarkUnreacAction, CloseMessageAction, MarkAllAsReadAction, MarkAllASUnReadAction, OpenTourAction, OpenModalAction, SetAllTemplatesAction
} from 'src/custom-types'
import copyState from '../../Helpers/copyStateHelper'
import chat from '../../Schemas/chat.json'
import { closeMessage, markUnread, handleLatestWargameMessage, handleSetAllMessagesAction, openMessageAction, markAllMessagesAsRead, markAllMessagesAsUnread } from './helpers/handleWargameMessagesChange'
import getRoleParamsForPlayerUI from './helpers/getRoleParamsForPlayerUI'
import * as playerUIReducerHelpers from './helpers/wargamePlayerHandlers.ts'

export const initialState: PlayerUi = {
  selectedForce: undefined,
  selectedRole: '',
  selectedRoleName: '',
  isObserver: false,
  isUmpire: false,
  isGameControl: false,
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
  allTemplatesByKey: {},
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

type ActionHandler = (newState: PlayerUi, action: PlayerUiActionTypes, state: PlayerUi) => void;

// Define an object to map action types to their corresponding Handlers
// Each property in the actionHandlers object is a key-value pair where:
// - The key is the action type, obtained from ActionConstant.
// - The value is a function (handler) that takes the current state, the action, and a tab as parameters.
// functions is responsible for updating the state
const actionHandlers: Record<string, ActionHandler> = {
  [SET_CURRENT_WARGAME_PLAYER]: (newState, action, state) => playerUIReducerHelpers.handleCurrentWargamePlayer(
    newState,
    (action as SetCurrentWargameAction).payload, 
    state
  ),
  [SET_FORCE]: (newState, action) =>
    playerUIReducerHelpers.handleSetForce(
      newState,
      (action as SetForceAction).payload
    ),
  [SET_ROLE]: (newState, action) => getRoleParamsForPlayerUI((action as SetRoleAction).payload, newState),
  [SET_ALL_TEMPLATES_PLAYERUI]: (_newState, action) => {
    // note: Uncomment this line to update the 'allTemplatesByKey' in the state with the payload from the action
    // _newState.allTemplatesByKey = (action as SetAllTemplatesAction).payload

    console.warn('ignoring templates from message types database', (action as SetAllTemplatesAction).payload)
  },
  [SHOW_HIDE_OBJECTIVES]: newState => {
    newState.showObjective = !newState.showObjective
  },
  [UPDATE_MESSAGE_STATE]: (newState, action) => {
    newState.updateMessageState = (action as UpdateMessageStateAction).payload
  },
  [SET_FEEDBACK_MESSAGES]: (newState, action) => {
    newState.feedbackMessages = (action as SetWargameFeedbackAction).payload
  },
  [SET_LATEST_FEEDBACK_MESSAGE]: (newState, action) => {
    newState.feedbackMessages.push(
      (action as SetLatestFeedbackMessageAction).payload
    )
  },
  [SET_LATEST_WARGAME_MESSAGE]: (newState, action) => handleLatestWargameMessage((action as SetLatestWargameMessageAction).payload, newState),
  [SET_ALL_MESSAGES]: (newState, action) => handleSetAllMessagesAction((action as SetWargameMessagesAction).payload, newState),
  [OPEN_MESSAGE]: (newState, action) => openMessageAction((action as OpenMessageAction).payload, newState),
  [MARK_UNREAD]: (newState, action) => {
    const payload = (action as MarkUnreacAction).payload 
    newState.channels[payload.channel] = markUnread(payload.channel, payload.message, newState)
  },
  [CLOSE_MESSAGE]: (newState, action) => {
    const payload = (action as CloseMessageAction).payload 
    newState.channels[payload.channel].messages = closeMessage(payload.channel, payload.message, newState)
  },
  [MARK_ALL_AS_READ]: (newState, action) => markAllMessagesAsRead((action as MarkAllAsReadAction).payload, newState),
  [MARK_ALL_AS_UNREAD]: (newState, action) => markAllMessagesAsUnread((action as MarkAllASUnReadAction).payload, newState),
  [OPEN_TOUR]: (newState, action) => {
    newState.tourIsOpen = (action as OpenTourAction).payload
  },
  [OPEN_MODAL]: (newState, action) => {
    newState.modalOpened = (action as OpenModalAction).payload
  },
  [CLOSE_MODAL]: newState => {
    newState.modalOpened = undefined
  }
}

export const playerUiReducer = (state: PlayerUi = initialState, action: PlayerUiActionTypes): PlayerUi => {
  const newState: PlayerUi = copyState(state)

  const handler = actionHandlers[action.type]

  if (handler) {
    handler(newState, action, state)
  }

  playerUIReducerHelpers.logUpdate(newState, action.type, state)
  return newState
}

export default playerUiReducer
