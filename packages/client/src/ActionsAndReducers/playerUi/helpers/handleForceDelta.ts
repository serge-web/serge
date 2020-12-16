import { MessageMap, ForceData } from '@serge/custom-types'

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
} from '@serge/config'
// TODO: change it to @serge/config

/** create a marker for the supplied set of details */
export default (message: MessageMap, allForces: ForceData[]): ForceData[] => {
  if (!message.messageType) {
    console.error('problem - we need message type in ', message)
  } else {
    console.log('Player reducer handling forceDelta:', message.messageType)
  }
  switch (message.messageType) {
    case FORCE_LAYDOWN:
      return handleForceLaydownChanges(message, allForces)
    case VISIBILIY_CHANGES:
      return handleVisibilityChanges(message, allForces)
    case PERCEPTION_OF_CONTACT:
      return handlePerceptionChange(message, allForces)
    case SUBMIT_PLANS:
      return handlePlansSubmittedChanges(message, allForces)
    case STATE_OF_WORLD:
      return handleStateOfWorldChanges(message, allForces)
    default:
      console.error(`failed to create player reducer handler for: ${message!.messageType}`)
      return allForces
  }
}
