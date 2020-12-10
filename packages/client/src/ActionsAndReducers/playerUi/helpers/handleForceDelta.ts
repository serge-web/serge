import { Message, ForceData } from '@serge/custom-types'

import handleVisibilityChanges from './handleVisibilityChanges'
import handlePerceptionChange from './handlePerceptionChanges'
import handleStateOfWorldChanges from './handleStateOfWorldChanges'
import handleForceLaydownChanges from './handleForceLaydownChanges'
import handlePlansSubmittedChanges from './handlePlansSubmittedChanges'
import {
  FORCE_LAYDOWN,
  VISIBILIY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD
} from '../../../consts'

/** create a marker for the supplied set of details */
export default (message: Message, allForces: ForceData[]): ForceData[] => {
  const msgType = message.details.messageType
  if (!msgType) {
    console.error('problem - we need message type in ', message)
  } else {
    console.log('Player reducer handling forceDelta:', msgType)
  }
  switch (msgType) {
    case FORCE_LAYDOWN:
      // @ts-ignore
      return handleForceLaydownChanges(message, allForces)
    case VISIBILIY_CHANGES:
      // @ts-ignore
      return handleVisibilityChanges(message, allForces)
    case PERCEPTION_OF_CONTACT:
      // @ts-ignore
      return handlePerceptionChange(message, allForces)
    case SUBMIT_PLANS:
      return handlePlansSubmittedChanges(message, allForces)
    case STATE_OF_WORLD:
      return handleStateOfWorldChanges(message, allForces)
    default:
      console.error('failed to create player reducer handler for:' + msgType)
      return allForces
  }
}
