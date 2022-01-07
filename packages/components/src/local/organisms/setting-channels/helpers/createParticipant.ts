import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData } from '@serge/custom-types'
import defaultParticipant from './defaultParticipant'
import rowToParticipantCustom from './rowToParticipantCustom'

export const generateSubscriptionId = (): string => Math.random().toString(36).substring(8)

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>): Participant => {
  return {
    ...rowToParticipantCustom(templatesOptions, forces, nextItems, defaultParticipant),
    subscriptionId: generateSubscriptionId()
  }
}
