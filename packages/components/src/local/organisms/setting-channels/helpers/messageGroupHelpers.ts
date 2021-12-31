import { ChannelCollab, ChannelData } from '@serge/custom-types'
import { Option } from 'src/local/molecules/editable-row'
import { MessageGroupType } from './genMessageCollabEdit'

export const getSelectedValue = (type: string, channelData?: ChannelData): string[] => {
  const collabChannel = channelData as unknown as ChannelCollab

  switch (type) {
    case MessageGroupType.MESSAGE_TEMPLATE:
      return [collabChannel.newMessageTemplate._id]

    case MessageGroupType.RESPONSE_TEMPLATE:
      if (!collabChannel.responseTemplate) return []
      return [collabChannel.responseTemplate._id]

    case MessageGroupType.DOCUMENT_STATUS:
      return [collabChannel.initialState]

    case MessageGroupType.REQUEST_CHANGES:
      return collabChannel.requestChangesVerbs

    case MessageGroupType.APPROVE:
      return collabChannel.approveVerbs

    case MessageGroupType.RELEASE:
      return collabChannel.releaseVerbs

    default:
      return []
  }
}

export const getSelectedOptions = (type: string, channelData?: ChannelData): Option[] => {
  const collabChannel = channelData as unknown as ChannelCollab

  switch (type) {
    case MessageGroupType.REQUEST_CHANGES:
      return collabChannel.requestChangesVerbs.map(verb => ({ name: verb, uniqid: verb }))

    case MessageGroupType.APPROVE:
      return collabChannel.approveVerbs.map(verb => ({ name: verb, uniqid: verb }))

    case MessageGroupType.RELEASE:
      return collabChannel.releaseVerbs.map(verb => ({ name: verb, uniqid: verb }))

    default:
      return []
  }
}
