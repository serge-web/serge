import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_MAPPING } from '@serge/config'
import { ForceData } from '@serge/custom-types'
import { CoreParticipant } from '@serge/custom-types/participant'
import { Item, Option } from '../../../molecules/editable-row'
import { defaultParticipantChat, defaultParticipantCollab, defaultParticipantCustom, defaultParticipantMapping } from './defaultParticipant'
import rowToParticipantChat from './rowToParticipantChat'
import rowToParticipantCollab from './rowToParticipantCollab'
import rowToParticipantCustom from './rowToParticipantCustom'
import rowToParticipantMapping from './rowToParticipantMapping'

export const generateSubscriptionId = (): string => Math.random().toString(36).substring(8)

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, channelType: string): CoreParticipant => {
  let newPart: CoreParticipant
  switch (channelType) {
    case CHANNEL_CUSTOM:
      newPart = rowToParticipantCustom(templatesOptions, forces, nextItems, defaultParticipantCustom)
      break
    case CHANNEL_CHAT:
      newPart = rowToParticipantChat(forces, nextItems, defaultParticipantChat)
      break
    case CHANNEL_COLLAB:
      newPart = rowToParticipantCollab(forces, nextItems, defaultParticipantCollab)
      break
    case CHANNEL_MAPPING:
      newPart = rowToParticipantMapping(forces, nextItems, defaultParticipantMapping)
      break
    default:
      console.warn('Warning - channel type not handled', channelType)
      newPart = rowToParticipantChat(forces, nextItems, defaultParticipantChat)
  }
  return {
    ...newPart,
    subscriptionId: generateSubscriptionId()
  }
}
