import { ForceData } from '@serge/custom-types'
import { CoreParticipant } from '@serge/custom-types/participant'
import { Item, Option } from '../../../molecules/editable-row'
import { defaultParticipantCustom } from './defaultParticipant'
import rowToParticipantCustom from './rowToParticipantCustom'

export const generateSubscriptionId = (): string => Math.random().toString(36).substring(8)

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>): CoreParticipant => {
  return {
    ...rowToParticipantCustom(templatesOptions, forces, nextItems, defaultParticipantCustom),
    subscriptionId: generateSubscriptionId()
  }
}
