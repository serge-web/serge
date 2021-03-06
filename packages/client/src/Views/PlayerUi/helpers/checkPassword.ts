import { Dispatch } from 'react'
import { ForceData, PlayerUiActionTypes, Role } from '@serge/custom-types'

import {
  setForce,
  setRole,
  startListening,
  setAllTemplates,
  failedLoginFeedbackMessage,
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

export default (
  pass: string,
  messageTypes: any,
  currentWargame: string,
  allForces: ForceData[],
  dispatch: Dispatch<PlayerUiActionTypes>
): boolean => {
  let role: Role | undefined = undefined
  const force = allForces.find(force => (
    force.roles.find(roleItem => {
      role = roleItem
      return roleItem.password === pass
    }) !== undefined
  ))

  if(allForces.length === 0) {
    console.error("Can't check password, forces data missing")
  }

  if (force === undefined || role === undefined) {
    failedLoginFeedbackMessage(currentWargame, pass);
    return false;
  }

  dispatch(setForce(force.uniqid));
  dispatch(setRole(role));
  dispatch(setAllTemplates(messageTypes.messages));
  startListening(currentWargame)(dispatch);
  return true;
};
