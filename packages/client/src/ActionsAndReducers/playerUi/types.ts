import * as ActionConstant from '../ActionConstants'
import { Wargame, Role, PlayerUiMessageTypes, Message, PlayerDbMessageTypes } from '@serge/custom-types'

interface SetCurrentWargameAction {
  type: typeof ActionConstant.SET_CURRENT_WARGAME_PLAYER,
  payload: Wargame
}
interface SetForceAction {
  type: typeof ActionConstant.SET_FORCE,
  payload: string
}
interface SetRoleAction {
  type: typeof ActionConstant.SET_ROLE,
  payload: Role
}
interface SetAllTemplatesAction {
  type: typeof ActionConstant.SET_ALL_TEMPLATES_PLAYERUI,
  payload: Array<any>
}
interface ShowHideObjectivesAction {
  type: typeof ActionConstant.SHOW_HIDE_OBJECTIVES
}
interface SetWargameFeedbackAction {
  type: typeof ActionConstant.SET_FEEDBACK_MESSAGES,
  payload: Array<PlayerUiMessageTypes>
}
interface SetLatestFeedbackMessageAction {
  type: typeof ActionConstant.SET_LATEST_FEEDBACK_MESSAGE,
  payload: PlayerUiMessageTypes
}
interface SetLatestWargameMessageAction {
  type: typeof ActionConstant.SET_LATEST_WARGAME_MESSAGE,
  payload: PlayerUiMessageTypes
}
interface SetWargameMessagesAction {
  type: typeof ActionConstant.SET_ALL_MESSAGES,
  payload: Array<PlayerDbMessageTypes>
}
interface OpenMessageAction {
  type: typeof ActionConstant.OPEN_MESSAGE,
  payload: {
    channel: string,
    message: Message
  }
}
interface CloseMessageAction {
  type: typeof ActionConstant.CLOSE_MESSAGE,
  payload: {
    channel: string,
    message: Message
  }
}
interface MarkAllAsReadAction {
  type: typeof ActionConstant.MARK_ALL_AS_READ,
  payload: string
}
interface OpenTourAction {
  type: typeof ActionConstant.OPEN_TOUR,
  payload: boolean
}
interface OpenModalAction {
  type: typeof ActionConstant.OPEN_MODAL,
  payload: string
}
interface CloseModalAction {
  type: typeof ActionConstant.CLOSE_MODAL
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
