import {
  SET_CURRENT_WARGAME_PLAYER,
  // SET_FORCE,
  // SET_ROLE,
  // SET_ALL_TEMPLATES_PLAYERUI,
  // SHOW_HIDE_OBJECTIVES,
  // SET_FEEDBACK_MESSAGES,
  SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE,
  // SET_ALL_MESSAGES,
  // OPEN_MESSAGE,
  // CLOSE_MESSAGE,
  // MARK_ALL_AS_READ,
  // OPEN_TOUR,
  // OPEN_MODAL,
  // CLOSE_MODAL
} from '@serge/config'

import {
  Wargame,
  // Role,
  // Message,
  // MessageDetails,
  MessageFeedback,
  MessageChannel,
  PlayerUiActionTypes
} from '@serge/custom-types'

export const setCurrentWargame = (wargame: Wargame): PlayerUiActionTypes => ({
  type: SET_CURRENT_WARGAME_PLAYER,
  payload: wargame
})

export const setLatestWargameMessage = (message: MessageChannel): PlayerUiActionTypes => ({
  type: SET_LATEST_WARGAME_MESSAGE,
  payload: message
})

export const setLatestFeedbackMessage = (message: MessageFeedback): PlayerUiActionTypes => ({
  type: SET_LATEST_FEEDBACK_MESSAGE,
  payload: message
})
