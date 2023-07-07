import { CHAT_MESSAGE, CREATE_EXPORT_ITEM, CUSTOM_MESSAGE, FEEDBACK_MESSAGE, INFO_MESSAGE, EXPORT_ITEM_MESSAGES, LOADER } from '@serge/config'
import flatten from 'flat'
import { ExportItemsUiActionTypes, ExportItem, Wargame, Message, MessageInfoType, ExportItemData } from 'src/custom-types'

interface ChannelTitles {
  [property: string]: string
}
interface FlatMessage {
  [property: string]: any
}
interface FlatMessages { 
  flatMsg: FlatMessage,
  objectKeys: string[] 
}

interface MessageTypes {
  [property: string]: boolean
}

interface ExportDataGroupedGetRowsAndFields { fields: string[], rows: string[][] }

export const createExportItem = (exportData: ExportItem): ExportItemsUiActionTypes => ({
  type: CREATE_EXPORT_ITEM,
  payload: exportData
})
export const showLoading = (): ExportItemsUiActionTypes => ({
  type: LOADER
})

const getInfoTypeMessagesFromWargameExportMessageList = (list: Message[]) => list.filter(({ messageType }) => messageType === INFO_MESSAGE)

// just for codeclimate Cognitive Complexity
const getChannelTitlesFromInfoTypeMessages = (messages: MessageInfoType[]): ChannelTitles => {
  const channelTitles: ChannelTitles = {}
  for (const { data } of messages) {
    for (const channel of data.channels.channels) {
      const { name, uniqid } = channel
      if (!channelTitles[uniqid]) channelTitles[uniqid] = name
    }
  }
  return channelTitles
}

export const createMessageExportItem = ({ currentWargame, exportMessagelist = [] }: Wargame) => {
  const infoTypeMessages: MessageInfoType[] = getInfoTypeMessagesFromWargameExportMessageList(exportMessagelist) as MessageInfoType[]
  
  const channelTitles: ChannelTitles = getChannelTitlesFromInfoTypeMessages(infoTypeMessages)
  const data: ExportItemData[] = exportDataGrouped(exportMessagelist, channelTitles)
  const title = `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`
  // note: we have made the `currentWargame` element of `wargame` optional.  But, following
  // call needs a string for wargame.  So, we offer empty string if missing
  return createExportItem({ type: EXPORT_ITEM_MESSAGES, title, wargame: currentWargame || '', data })
}

const keysSimplify = (row: FlatMessage): FlatMessage => {
  const newRow: FlatMessage = {}
  for (const key of Object.keys(row)) {
    const subkeys: string[] = key.split('.')
    // if (typeof mainKey === undefined) mainKey = ''
    const newKey = keysSimplifyGetNewKey(subkeys)
    newRow[newKey.join(' ')] = row[key]
  }
  return newRow
}

const keysSimplifyGetNewKey = (subkeys: string[]): string[] => {
  const newKey = []
  for (let i = 0; i < subkeys.length; i++) {
    if (subkeys[i].replace(/\s/g, '') !== '') {
      // note: this used to be the format string, but the keys were being duplicated
      // we also dropped the leading EXPORT_ITEM_MESSAGES key
      // newKey.push(`${subkeys[i - 1] || EXPORT_ITEM_MESSAGES}_${subkeys[i]}`)
      newKey.push(`${subkeys[i]}`)
    }
  }
  return newKey
}

const exportDataGrouped = (messages: Message[], channelTitles: ChannelTitles): ExportItemData[] => {
  const data: ExportItemData[] = []
  const messageTypes: MessageTypes = {}

  for (const message of messages) {
    let msgType: string = message.messageType
    if (message.messageType === CUSTOM_MESSAGE) {
      msgType += ' ' + message.details.messageType
    }
    if (msgType && !messageTypes[msgType]) {
      messageTypes[msgType] = true
      const rowsAndFields: ExportDataGroupedGetRowsAndFields = exportDataGroupedGetRowsAndFields(messages, message, channelTitles)
      const title = message.messageType === CUSTOM_MESSAGE ? 'CM ' + message.details.messageType : msgType
      // The max length of the sheet name is 31
      data.push({
        title: title.length > 31
          ? title.substring(0, 26) + '@' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4)
          : title,
        items: [
          rowsAndFields.fields.map(field => (field.toUpperCase())),
          ...rowsAndFields.rows
        ]
      })
    }
  }
  return data
}

const exportDataGroupedGetRowsAndFields = (messages: Message[], message: Message, channelTitles: ChannelTitles) :ExportDataGroupedGetRowsAndFields => {
  const messagesFiltered: Message[] = message.messageType === CUSTOM_MESSAGE 
    ? messages.filter(msg => msg.messageType === CUSTOM_MESSAGE && message.details.messageType === msg.details.messageType)
    : messages.filter(({ messageType }) => message.messageType === messageType)

  const fields: string[] = []
  const rows: string[][] = []

  const messagesWithChannelNames: FlatMessages[] = messagesFiltered.map(msg => {
    if (msg.messageType === CUSTOM_MESSAGE || msg.messageType === CHAT_MESSAGE || msg.messageType === FEEDBACK_MESSAGE) {
      if (msg.details.channel && channelTitles[msg.details.channel]) {
        msg.details.channel = channelTitles[msg.details.channel]
      }
    }
    const flatMsg: FlatMessage = keysSimplify(flatten<Message, FlatMessage>(msg))
    const objectKeys = Object.keys(flatMsg)
    for (const key of objectKeys) {
      // check if fields/titles have no current key then add
      if (!fields.includes(key)) fields.push(key)
    }
    return { flatMsg, objectKeys }
  })

  for (const { objectKeys, flatMsg } of messagesWithChannelNames) {
    const row: string[] = Array(fields.length).fill('')
    for (const key of objectKeys) {
      let value = flatMsg[key]
      if (value === null || typeof value === 'undefined') value = '-'
      else if (typeof value === 'object') value = JSON.stringify(value)
      // check position for field then add value to rigth position in row
      row[fields.indexOf(key)] = value.toString()
    }
    rows.push(row)
  }

  return { fields, rows }
}
