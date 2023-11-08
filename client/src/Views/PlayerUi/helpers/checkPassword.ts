import { Dispatch } from 'react'
import { ForceData, MessageTypes, PlayerUiActionTypes, Role } from 'src/custom-types'

import {
  setForce,
  setRole,
  startListening,
  setAllTemplates,
  failedLoginFeedbackMessage
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

export default (
  pass: string,
  messageTypes: MessageTypes,
  currentWargame: string,
  allForces: ForceData[],
  turnNumber: number,
  dispatch: Dispatch<PlayerUiActionTypes>
): boolean => {
  let role: Role | undefined
  const force = allForces.find(force => (
    force.roles.find(roleItem => {
      role = roleItem
      return roleItem.roleId === pass
    }) !== undefined
  ))

  if (allForces.length === 0) {
    console.error('Can\'t check password, forces data missing')
  }

  if (force === undefined || role === undefined) {
    failedLoginFeedbackMessage(currentWargame, pass, turnNumber)
    return false
  }

  dispatch(setForce(force.uniqid))
  dispatch(setRole(role))
  dispatch(setAllTemplates(messageTypes.templatesByKey))
  startListening(currentWargame)(dispatch)
  return true
}
