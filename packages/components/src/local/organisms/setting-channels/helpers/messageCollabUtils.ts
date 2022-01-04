import { CHANNEL_COLLAB } from '@serge/config'
import { ChannelCollab, ChannelData, ParticipantTemplate } from '@serge/custom-types'
import { Option } from 'src/local/molecules/editable-row'
import { Action, MessageGroupType, MessagesValues } from './genMessageCollabEdit'

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

export const getMessagesValues = (isCollab: boolean, selectedChannel?: ChannelData): MessagesValues => {
  return {
    messageTemplate: isCollab ? getSelectedValue(MessageGroupType.MESSAGE_TEMPLATE, selectedChannel) : [],
    responseTemplate: isCollab ? getSelectedValue(MessageGroupType.RESPONSE_TEMPLATE, selectedChannel) : [],
    documentStatus: isCollab ? getSelectedValue(MessageGroupType.DOCUMENT_STATUS, selectedChannel) : [],
    requestChanges: isCollab ? getSelectedValue(MessageGroupType.REQUEST_CHANGES, selectedChannel) : [],
    approve: isCollab ? getSelectedValue(MessageGroupType.APPROVE, selectedChannel) : [],
    release: isCollab ? getSelectedValue(MessageGroupType.RELEASE, selectedChannel) : [],
    additionalData: isCollab ? getSelectedValue(MessageGroupType.ADDITIONAL_DATA, selectedChannel) : []
  }
}

export const isCollabChannel = (channelData?: ChannelData): boolean => {
  if (!channelData) return false
  return 'channelType' in channelData && (channelData as unknown as ChannelCollab).channelType === CHANNEL_COLLAB
}

export type MessageKey = 'messageTemplate' | 'responseTemplate' | 'documentStatus' | 'requestChanges' | 'approve' | 'release' | 'additionalData'

const filterOutByUniqId = (nextMsgValue: MessagesValues, value: string[], key: MessageKey): MessagesValues => {
  const nextVal = nextMsgValue[key].filter(uniqid => !value.includes(uniqid))
  nextMsgValue[key] = nextVal
  return nextMsgValue
}

const filterInByUniqId = (messageUpdates: MessagesValues, options: Option[], key: MessageKey): ParticipantTemplate => {
  const nextId = messageUpdates[key][0]
  const { uniqid = '', name = '' } = options.find(opt => opt.uniqid === nextId) || {}
  return { _id: uniqid, title: name }
}

export const integrateWithLocalChanges = (options: Option[], channelData: ChannelData, messageUpdates: MessagesValues): ChannelData => {
  const nextChannel: ChannelCollab = ({ ...channelData }) as unknown as ChannelCollab

  const msgTpl = filterInByUniqId(messageUpdates, options, 'messageTemplate')
  nextChannel.newMessageTemplate = msgTpl

  const resTpl = filterInByUniqId(messageUpdates, options, 'responseTemplate')
  nextChannel.responseTemplate = resTpl

  return nextChannel as unknown as ChannelData
}

export const onMessageValuesChanged = (messageLocal: MessagesValues, value: string[], action: Action, type: string): MessagesValues => {
  const nextMessageLocal: MessagesValues = { ...messageLocal }

  switch (type) {
    case MessageGroupType.MESSAGE_TEMPLATE:
      if (action === 'delete') {
        return filterOutByUniqId(nextMessageLocal, value, 'messageTemplate')
      }
      nextMessageLocal.messageTemplate = value
      return nextMessageLocal

    case MessageGroupType.RESPONSE_TEMPLATE:
      if (action === 'delete') {
        return filterOutByUniqId(nextMessageLocal, value, 'responseTemplate')
      }
      nextMessageLocal.responseTemplate = value
      return nextMessageLocal

    case MessageGroupType.DOCUMENT_STATUS:
      nextMessageLocal.documentStatus = value
      return nextMessageLocal

    case MessageGroupType.REQUEST_CHANGES:
      if (action === 'delete') {
        return filterOutByUniqId(nextMessageLocal, value, 'requestChanges')
      }
      nextMessageLocal.requestChanges = value
      return nextMessageLocal

    case MessageGroupType.APPROVE:
      if (action === 'delete') {
        return filterOutByUniqId(nextMessageLocal, value, 'approve')
      }
      nextMessageLocal.approve = value
      return nextMessageLocal

    case MessageGroupType.RELEASE:
      if (action === 'delete') {
        return filterOutByUniqId(nextMessageLocal, value, 'release')
      }
      nextMessageLocal.release = value
      return nextMessageLocal

    case MessageGroupType.ADDITIONAL_DATA:
      nextMessageLocal.additionalData = value
      return nextMessageLocal

    default:
      return nextMessageLocal
  }
}
