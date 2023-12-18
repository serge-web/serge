import {
  SET_CURRENT_WARGAME_PLAYER,
  SET_FORCE,
  SET_ROLE,
  SET_ALL_TEMPLATES_PLAYERUI,
  SHOW_HIDE_OBJECTIVES,
  UPDATE_MESSAGE_STATE,
  SET_FEEDBACK_MESSAGES,
  SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  MARK_UNREAD,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ,
  OPEN_TOUR,
  OPEN_MODAL,
  CLOSE_MODAL,
  MARK_ALL_AS_UNREAD
} from 'src/config'

import {
  Wargame,
  Role,
  MessageFeedback,
  MessageChannel,
  MessageCustom,
  MessageInfoType,
  ChatMessage
} from '.'
import { Dispatch } from 'react'
import { TemplateBodysByKey } from './message-types'
export type PlayerUiDispatch = Dispatch<PlayerUiActionTypes>

interface SetCurrentWargameAction {
  type: typeof SET_CURRENT_WARGAME_PLAYER
  payload: Wargame
}

interface SetForceAction {
  type: typeof SET_FORCE
  payload: string
}
interface SetRoleAction {
  type: typeof SET_ROLE
  payload: Role
}
interface SetAllTemplatesAction {
  type: typeof SET_ALL_TEMPLATES_PLAYERUI
  payload: TemplateBodysByKey
}
interface ShowHideObjectivesAction {
  type: typeof SHOW_HIDE_OBJECTIVES
}
interface UpdateMessageStateAction {
  type: typeof UPDATE_MESSAGE_STATE
  payload: boolean
}
export interface SetWargameFeedbackAction {
  type: typeof SET_FEEDBACK_MESSAGES
  payload: Array<MessageFeedback>
}
export interface SetLatestFeedbackMessageAction {
  type: typeof SET_LATEST_FEEDBACK_MESSAGE
  payload: MessageFeedback
}
export interface SetLatestWargameMessageAction {
  type: typeof SET_LATEST_WARGAME_MESSAGE
  payload: MessageChannel
}
interface SetWargameMessagesAction {
  type: typeof SET_ALL_MESSAGES
  payload: Array<MessageCustom | MessageInfoType>
}
export interface OpenMessageAction {
  type: typeof OPEN_MESSAGE
  payload: {
    channel: string
    message: MessageChannel
  }
}
export interface MarkUnreacAction {
  type: typeof MARK_UNREAD
  payload: {
    channel: string
    message: MessageChannel | ChatMessage
  }
}
export interface CloseMessageAction {
  type: typeof CLOSE_MESSAGE
  payload: {
    channel: string
    message: MessageChannel
  }
}
export interface MarkAllAsReadAction {
  type: typeof MARK_ALL_AS_READ
  payload: string
}

export interface MarkAllASUnReadAction {
  type: typeof MARK_ALL_AS_UNREAD
  payload: string
}
interface OpenTourAction {
  type: typeof OPEN_TOUR
  payload: boolean
}
interface OpenModalAction {
  type: typeof OPEN_MODAL
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
  UpdateMessageStateAction |
  SetWargameFeedbackAction |
  SetLatestFeedbackMessageAction |
  SetLatestWargameMessageAction |
  SetWargameMessagesAction |
  OpenMessageAction |
  MarkUnreacAction |
  CloseMessageAction |
  MarkAllAsReadAction |
  MarkAllASUnReadAction |
  OpenTourAction |
  OpenModalAction |
  CloseModalAction 
