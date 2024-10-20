import { InitialStates } from 'src/config'
import { ChannelCollab, ChannelTypes, ParticipantTemplate } from 'src/custom-types'
import { Option } from '../../../molecules/editable-row'
import { Action, MessageGroupType, MessagesValues } from './genMessageCollabEdit'
import uniqBy from 'lodash/uniqBy'

export const getSelectedValue = (type: string, channelData?: ChannelTypes): string[] => {
  const collabChannel = channelData as unknown as ChannelCollab
  const {
    newMessageTemplate = { _id: '' },
    responseTemplate = { _id: '' },
    initialState,
    requestChangesVerbs,
    approveVerbs,
    releaseVerbs,
    additonalData
  } = collabChannel

  switch (type) {
    case MessageGroupType.MESSAGE_TEMPLATE:
      return [newMessageTemplate._id]

    case MessageGroupType.RESPONSE_TEMPLATE:
      if (!collabChannel.responseTemplate) return []
      return [responseTemplate._id]

    case MessageGroupType.DOCUMENT_STATUS:
      return [initialState]

    case MessageGroupType.REQUEST_CHANGES:
      return requestChangesVerbs

    case MessageGroupType.APPROVE:
      return approveVerbs

    case MessageGroupType.RELEASE:
      return releaseVerbs

    case MessageGroupType.ADDITIONAL_DATA:
      return additonalData || []

    default:
      return []
  }
}

export const getSelectedOptions = (type: string, messageLocal: MessagesValues, channelData?: ChannelTypes): Option[] => {
  const collabChannel = channelData as unknown as ChannelCollab
  const {
    requestChangesVerbs = [],
    approveVerbs = [],
    releaseVerbs = []
  } = collabChannel

  const {
    requestChanges = [],
    approve = [],
    release = []
  } = messageLocal

  switch (type) {
    case MessageGroupType.REQUEST_CHANGES:
      return uniqBy([...requestChangesVerbs.map(verb => ({ name: verb, uniqid: verb })), { name: requestChanges.length ? requestChanges[0] : '', uniqid: requestChanges.length ? requestChanges[0] : '' }], 'uniqid')

    case MessageGroupType.APPROVE:
      return uniqBy([...approveVerbs.map(verb => ({ name: verb, uniqid: verb })), { name: approve.length ? approve[0] : '', uniqid: approve.length ? approve[0] : '' }], 'uniqid')

    case MessageGroupType.RELEASE:
      return uniqBy([...releaseVerbs.map(verb => ({ name: verb, uniqid: verb })), { name: release.length ? release[0] : '', uniqid: release.length ? release[0] : '' }], 'uniqid')

    default:
      return []
  }
}

export const getMessagesValues = (selectedChannel?: ChannelCollab): MessagesValues => {
  return {
    messageTemplate: getSelectedValue(MessageGroupType.MESSAGE_TEMPLATE, selectedChannel),
    responseTemplate: getSelectedValue(MessageGroupType.RESPONSE_TEMPLATE, selectedChannel),
    documentStatus: getSelectedValue(MessageGroupType.DOCUMENT_STATUS, selectedChannel),
    requestChanges: getSelectedValue(MessageGroupType.REQUEST_CHANGES, selectedChannel),
    approve: getSelectedValue(MessageGroupType.APPROVE, selectedChannel),
    release: getSelectedValue(MessageGroupType.RELEASE, selectedChannel),
    additionalData: getSelectedValue(MessageGroupType.ADDITIONAL_DATA, selectedChannel)
  }
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

const getInitialState = (state: string): InitialStates => {
  if (state === InitialStates.PENDING_REVIEW) return InitialStates.PENDING_REVIEW
  return InitialStates.UNALLOCATED
}

export const integrateWithLocalChanges = (options: Option[], channelData: ChannelTypes, messageUpdates: MessagesValues): ChannelCollab => {
  const nextChannel: ChannelCollab = ({ ...channelData }) as unknown as ChannelCollab

  const msgTpl = filterInByUniqId(messageUpdates, options, 'messageTemplate')
  nextChannel.newMessageTemplate = msgTpl._id ? msgTpl : undefined

  const resTpl = filterInByUniqId(messageUpdates, options, 'responseTemplate')
  nextChannel.responseTemplate = resTpl._id ? resTpl : undefined

  nextChannel.initialState = getInitialState(messageUpdates.documentStatus[0])
  nextChannel.requestChangesVerbs = messageUpdates.requestChanges
  nextChannel.approveVerbs = messageUpdates.approve
  nextChannel.releaseVerbs = messageUpdates.release
  nextChannel.additonalData = messageUpdates.additionalData

  return nextChannel
}

const handleDeleteAction = (nextMessageLocal: MessagesValues, value: string[], action: Action, property: MessageKey): any => {
  return action === 'delete' ? filterOutByUniqId(nextMessageLocal, value, property) : value
}
export const onMessageValuesChanged = (messageLocal: MessagesValues, value: string[], action: Action, type: string): MessagesValues => {
  const nextMessageLocal: MessagesValues = { ...messageLocal }
  
  switch (type) {
    case MessageGroupType.MESSAGE_TEMPLATE:
      nextMessageLocal.messageTemplate = handleDeleteAction(nextMessageLocal, value, action, 'messageTemplate')
      break

    case MessageGroupType.RESPONSE_TEMPLATE:
      nextMessageLocal.responseTemplate = handleDeleteAction(nextMessageLocal, value, action, 'responseTemplate')
      break

    case MessageGroupType.DOCUMENT_STATUS:
      nextMessageLocal.documentStatus = value
      break

    case MessageGroupType.REQUEST_CHANGES:
      nextMessageLocal.requestChanges = handleDeleteAction(nextMessageLocal, value, action, 'requestChanges')
      break

    case MessageGroupType.APPROVE:
      nextMessageLocal.approve = handleDeleteAction(nextMessageLocal, value, action, 'approve')
      break

    case MessageGroupType.RELEASE:
      nextMessageLocal.release = handleDeleteAction(nextMessageLocal, value, action, 'release')
      break

    case MessageGroupType.ADDITIONAL_DATA:
      nextMessageLocal.additionalData = value
      break

    default:
      return nextMessageLocal
  }
  
  return nextMessageLocal
}
