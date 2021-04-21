import { MessageMap, ForceData, MessageDetails, MessageForceLaydown, MessageVisibilityChanges, MessagePerceptionOfContact, MessageSubmitPlans, MessageStateOfWorld } from '@serge/custom-types'

import { handleVisibilityAndConditionChanges } from '@serge/helpers'
import handlePerceptionChange from './handlePerceptionChanges'
import handleStateOfWorldChanges from './handleStateOfWorldChanges'
import handleForceLaydownChanges from './handleForceLaydownChanges'
import handlePlansSubmittedChanges from './handlePlansSubmittedChanges'
import {
  FORCE_LAYDOWN,
  VISIBILITY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD
} from '@serge/config'
// TODO: change it to @serge/config

/** create a marker for the supplied set of details */
export default (message: MessageMap, details: MessageDetails, allForces: ForceData[]): ForceData[] => {
  const msgType: string = details.messageType
  if (!msgType) {
    console.error('problem - we need message type in ', message)
  } else {
    console.log('Player reducer handling forceDelta:', msgType, message)
  }

  switch (msgType) {
    case FORCE_LAYDOWN:
      return handleForceLaydownChanges(<MessageForceLaydown>message, allForces)
    case VISIBILITY_CHANGES:
      return handleVisibilityAndConditionChanges(<MessageVisibilityChanges>message, allForces)
    case PERCEPTION_OF_CONTACT:
      return handlePerceptionChange(<MessagePerceptionOfContact>message, allForces)
    case SUBMIT_PLANS:
      return handlePlansSubmittedChanges(<MessageSubmitPlans>message, allForces)
    case STATE_OF_WORLD:
      return handleStateOfWorldChanges(<MessageStateOfWorld>message, allForces)
    default:
      console.error(`failed to create player reducer handler for: ${message?.messageType}`)
      return allForces
  }
}
