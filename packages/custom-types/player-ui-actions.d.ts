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

import {
  Wargame,
  Role,
  MessageFeedback,
  MessageChannel
} from '@serge/custom-types'

interface SetCurrentWargameAction {
  type: typeof SET_CURRENT_WARGAME_PLAYER,
  payload: Wargame
}
interface SetForceAction {
  type: typeof SET_FORCE,
  payload: string
}
interface SetRoleAction {
  type: typeof SET_ROLE,
  payload: Role
}
interface SetAllTemplatesAction {
  type: typeof SET_ALL_TEMPLATES_PLAYERUI,
  payload: Array<any>
}
interface ShowHideObjectivesAction {
  type: typeof SHOW_HIDE_OBJECTIVES
}
export interface SetWargameFeedbackAction {
  type: typeof SET_FEEDBACK_MESSAGES,
  payload: Array<MessageFeedback>
}
export interface SetLatestFeedbackMessageAction {
  type: typeof SET_LATEST_FEEDBACK_MESSAGE,
  payload: MessageFeedback
}
interface SetLatestWargameMessageAction {
  type: typeof SET_LATEST_WARGAME_MESSAGE,
  payload: MessageChannel
}
interface SetWargameMessagesAction {
  type: typeof SET_ALL_MESSAGES,
  payload: Array<MessageChannel>
}
interface OpenMessageAction {
  type: typeof OPEN_MESSAGE,
  payload: {
    channel: string,
    message: MessageChannel
  }
}
interface CloseMessageAction {
  type: typeof CLOSE_MESSAGE,
  payload: {
    channel: string,
    message: MessageChannel
  }
}
interface MarkAllAsReadAction {
  type: typeof MARK_ALL_AS_READ,
  payload: string
}
interface OpenTourAction {
  type: typeof OPEN_TOUR,
  payload: boolean
}
interface OpenModalAction {
  type: typeof OPEN_MODAL,
  payload: string
}
interface CloseModalAction {
  type: typeof CLOSE_MODAL
}

export type PlayerUiActionTypes = SetCurrentWargameAction |
                                  SetForceAction |
                                  SetRoleAction |
                                  SetAllTemplatesAction |
                                  ShowHideObjectivesAction |
                                  SetWargameFeedbackAction |
                                  SetLatestFeedbackMessageAction |
                                  SetLatestWargameMessageAction |
                                  SetWargameMessagesAction |
                                  OpenMessageAction |
                                  CloseMessageAction |
                                  MarkAllAsReadAction |
                                  OpenTourAction |
                                  OpenModalAction |
                                  CloseModalAction
