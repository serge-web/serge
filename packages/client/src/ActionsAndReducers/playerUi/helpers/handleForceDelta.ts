import { 
  MessageMap, 
  ForceData, 
  MessageDetails, 
  MessageForceLaydown, 
  MessageVisibilityChanges, 
  MessagePerceptionOfContact, 
  MessageSubmitPlans, 
  MessageHostPlatform,
  MessageDeletePlatform,
  MessageStateOfWorld, 
  MessageCreateTaskGroup,
  MessageLeaveTaskGroup, 
  PlatformTypeData,
  MessageUpdateMarker,
  MapAnnotations} from '@serge/custom-types'

import { handleVisibilityAndConditionChanges } from '@serge/helpers'
import handlePerceptionChange from './handlePerceptionChanges'
import handleStateOfWorldChanges from './handleStateOfWorldChanges'
import handleForceLaydownChanges from './handleForceLaydownChanges'
import handlePlansSubmittedChanges from './handlePlansSubmittedChanges'
import handleCreateTaskGroup from './handleCreateTaskGroup'
import handleLeaveTaskGroup from './handleLeaveTaskGroup'
import handleHostPlatform from './handleHostPlatform'
import handleDeletePlatform from './handleDeletePlatform'
import {
  FORCE_LAYDOWN,
  VISIBILITY_CHANGES,
  PERCEPTION_OF_CONTACT,
  SUBMIT_PLANS,
  STATE_OF_WORLD,
  CREATE_TASK_GROUP,
  LEAVE_TASK_GROUP,
  HOST_PLATFORM,
  DELETE_PLATFORM
} from '@serge/config'
// TODO: change it to @serge/config

/** create a marker for the supplied set of details */
export default (message: MessageMap, details: MessageDetails, allForces: ForceData[], 
  platformTypes: PlatformTypeData[]): ForceData[] => {
  const msgType: string = details.messageType
  if (!msgType) {
    console.error('problem - we need message type in ', message)
  } else {
    console.log('Player reducer handling forceDelta:', msgType, message)
  }

  switch (msgType) {
    case FORCE_LAYDOWN:
      return handleForceLaydownChanges(message as MessageForceLaydown, allForces)
    case VISIBILITY_CHANGES:
      return handleVisibilityAndConditionChanges(message as MessageVisibilityChanges, allForces)
    case PERCEPTION_OF_CONTACT:
      return handlePerceptionChange(message as MessagePerceptionOfContact, allForces)
    case SUBMIT_PLANS:
      return handlePlansSubmittedChanges(message as MessageSubmitPlans, allForces)
    case STATE_OF_WORLD:
      throw new Error('State of world shouldn\'t be handled as force delta, since it handles markers, too')
    case CREATE_TASK_GROUP:
      return handleCreateTaskGroup(message as MessageCreateTaskGroup, allForces, platformTypes)
    case LEAVE_TASK_GROUP:
      return handleLeaveTaskGroup(message as MessageLeaveTaskGroup, allForces)
    case HOST_PLATFORM:
      return handleHostPlatform(message as MessageHostPlatform, allForces, platformTypes)
    case DELETE_PLATFORM:
      return handleDeletePlatform(message as MessageDeletePlatform, allForces)
      default:
      console.error(`failed to create player reducer handler for: ${message!.messageType}`)
      return allForces
  }
}
