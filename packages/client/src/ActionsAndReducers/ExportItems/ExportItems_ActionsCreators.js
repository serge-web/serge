import ActionConstant from '../ActionConstants'
import flatten from 'flat'

export const createExportItem = (exportData) => ({
  type: ActionConstant.CREATE_EXPORT_ITEM,
  payload: exportData
})

const getInfoTypeMessagesFromWargameExportMessageList = list => list.filter(({ infoType, data }) => (
  infoType && data && data.channels && Array.isArray(data.channels.channels)
))

// just for codeclimate Cognitive Complexity
const addChannelTitle = ({ uniqid, name }, channelTitles) => {
  if (!channelTitles[uniqid]) channelTitles[uniqid] = name
  return channelTitles
}

const getChannelTitlesFromInfoTypeMessages = messages => {
  let channelTitles = {}
  for (const { data } of messages) {
    for (const channel of data.channels.channels) {
      channelTitles = addChannelTitle(channel, channelTitles)
    }
  }
  return channelTitles
}

export const createMessageExportItem = ({ currentWargame, exportMessagelist }) => {
  const infoTypeMessages = getInfoTypeMessagesFromWargameExportMessageList(exportMessagelist)
  const channelTitles = getChannelTitlesFromInfoTypeMessages(infoTypeMessages)
  // add game turn to message items
  let key = 0
  exportMessagelist.map(message => {
    if (message._id === infoTypeMessages[key]._id) key++
    else if (message.details) message.details.gameTurn = infoTypeMessages[key].gameTurn
    return message
  })
  const data = exportDataGrouped(exportMessagelist, channelTitles)
  const title = `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`
  return createExportItem({ type: 'messages', title, wargame: currentWargame, data })
}

const messageFilterByType = type => {
  return msg => msg.details && msg.details.messageType === type
}

const keysSimplyfy = row => {
  const newRow = {}

  for (const key of Object.keys(row)) {
    const subkeys = key.split('.')
    let mainKey = subkeys[subkeys.length - 1]
    if (!isNaN(mainKey)) mainKey = ''
    const newKey = keysSimplyfyGetNewKey(key, subkeys, mainKey)
    newRow[newKey.join(' ')] = row[key]
  }

  return newRow
}

const keysSimplyfyGetNewKey = (key, subkeys, mainKey) => {
  const newKey = []
  for (var i = 0; i < subkeys.length; i++) {
    if (!isNaN(subkeys[i])) {
      newKey.push(`${subkeys[i - 1] || 'messages'}_${subkeys[i]}`)
    }
  }
  if (mainKey) {
    newKey.push(mainKey)
  }
  return newKey
}

const exportDataGrouped = (messages, channelTitles) => {
  const data = []
  const messageTypes = {}

  for (const message of messages) {
    if (message.details && message.details.messageType && !messageTypes[message.details.messageType]) {
      messageTypes[message.details.messageType] = true
      const rowsAndFields = exportDataGroupedGetRowsAndFields(messages, message, channelTitles)
      data.push({
        title: message.details.messageType,
        items: [
          rowsAndFields.fields.map(field => (field.toUpperCase())),
          ...rowsAndFields.rows
        ]
      })
    }
  }
  return data
}

const exportDataGroupedGetRowsAndFields = (messages, message, channelTitles) => {
  const messagesFiltered = messages.filter(messageFilterByType(message.details.messageType))

  const fields = []
  const rows = []

  for (const msg of messagesFiltered) {
    if (msg.details && msg.details.channel && channelTitles[msg.details.channel]) {
      msg.details.channel = channelTitles[msg.details.channel]
    }
    const row = exportDataGroupedGetRow(msg, fields)
    rows.push(row)
  }

  return { fields, rows }
}

const exportDataGroupedGetRow = (msg, fields) => {
  const flatMsg = keysSimplyfy(flatten(msg))
  const row = Array(fields.length).fill('')

  for (const key of Object.keys(flatMsg)) {
    // check if fields/titles have no current key then add
    if (!fields.includes(key)) fields.push(key)
    // check position for field then add value to rigth position in row
    row[fields.indexOf(key)] = flatMsg[key]
  }

  return row
}
