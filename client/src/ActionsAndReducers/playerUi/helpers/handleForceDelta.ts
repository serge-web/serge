import {
  ForceData, InteractionDetails, MessageAdjudicationOutcomes, MessageCreateTaskGroup, MessageDeletePlatform, MessageDetails,
  MessageForceLaydown, MessageHostPlatform, MessageLeaveTaskGroup, MessageMap, MessagePerceptionOfContact,
  MessageSubmitPlans, MessageVisibilityChanges, PlatformTypeData
} from 'src/custom-types'

import {
  ADJUDICATION_OUTCOMES, CREATE_TASK_GROUP, DELETE_PLATFORM, FORCE_LAYDOWN, HOST_PLATFORM, LEAVE_TASK_GROUP, PERCEPTION_OF_CONTACT, STATE_OF_WORLD, SUBMIT_PLANS, UMPIRE_LAYDOWN, VISIBILITY_CHANGES
} from 'src/config'
import { handleVisibilityAndConditionChanges } from 'src/Helpers'
import handleAdjudicationOutcomes from './handleAdjudicationOutcomes'
import handleCreateTaskGroup from './handleCreateTaskGroup'
import handleDeletePlatform from './handleDeletePlatform'
import handleForceLaydownChanges from './handleForceLaydownChanges'
import handleHostPlatform from './handleHostPlatform'
import handleLeaveTaskGroup from './handleLeaveTaskGroup'
import handlePerceptionChange from './handlePerceptionChanges'
import handlePlansSubmittedChanges from './handlePlansSubmittedChanges'
// TODO: change it to src/config

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
    case UMPIRE_LAYDOWN:
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
    case ADJUDICATION_OUTCOMES:
      return handleAdjudicationOutcomes(details.interaction as InteractionDetails, message as MessageAdjudicationOutcomes, allForces)
    default:
      console.error(`failed to create player reducer handler for: ${message!.messageType}`)
      return allForces
  }
}
