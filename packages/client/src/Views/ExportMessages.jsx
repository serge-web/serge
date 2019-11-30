import React from 'react'
import { connect } from 'react-redux'
import flatten from 'flat'
import { createExportItem } from '../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators'
import ExcelExport from '../Components/ExcelExport'
import ExportItem from '../Components/ExportItem'
import ExportView from './ExportView'

const ExportMessages = ({ wargame, exportItems, savExportItem }) => {
  // generate export item for current wargame
  const createExportItem = () => {
    const infoTypeMessages = wargame.exportMessagelist.filter(({ infoType, data }) => (
      infoType && data && data.channels && Array.isArray(data.channels.channels)
    ))

    // add game turn to message items
    let key = 0
    wargame.exportMessagelist.map(message => {
      if (message._id === infoTypeMessages[key]._id) key++
      else if (message.details) message.details.gameTurn = infoTypeMessages[key].gameTurn
      return message
    })

    const channelTitles = {}

    for (const { data } of infoTypeMessages) {
      for (const { uniqid, name } of data.channels.channels) {
        if (channelTitles[uniqid]) continue
        channelTitles[uniqid] = name
      }
    }

    savExportItem({
      wargame: wargame.currentWargame,
      data: exportDataGrouped(wargame.exportMessagelist, channelTitles)
    })
  }

  const messageFilterByType = type => {
    return msg => msg.details && msg.details.messageType === type
  }

  const keysSimplyfy = row => {
    const newRow = {}

    for (const key of Object.keys(row)) {
      const subkeys = key.split('.')
      let mainKey = subkeys[subkeys.length - 1]
      const newKey = []

      if (!isNaN(mainKey)) mainKey = ''

      for (var i = 0; i < subkeys.length; i++) {
        if (!isNaN(subkeys[i])) {
          newKey.push(`${subkeys[i - 1] || 'messages'}_${subkeys[i]}`)
        }
      }

      if (mainKey) {
        newKey.push(mainKey)
      }

      newRow[newKey.join(' ')] = row[key]
    }

    return newRow
  }

  const exportDataGrouped = (messages, channelTitles) => {
    const data = []
    const messageTypes = {}

    for (const message of messages) {
      if (message.details && message.details.messageType && !messageTypes[message.details.messageType]) {
        messageTypes[message.details.messageType] = true

        const messagesFiltered = messages.filter(messageFilterByType(message.details.messageType))

        const fields = []
        const rows = []

        for (const msg of messagesFiltered) {
          if (msg.details && msg.details.channel && channelTitles[msg.details.channel]) {
            msg.details.channel = channelTitles[msg.details.channel]
          }

          const flatMsg = keysSimplyfy(flatten(msg))
          const row = Array(fields.length).fill('')

          for (const key of Object.keys(flatMsg)) {
            // check if fields/titles have no current key then add
            if (!fields.includes(key)) fields.push(key)
            // check position for field then add value to rigth position in row
            row[fields.indexOf(key)] = flatMsg[key]
          }
          rows.push(row)
        }

        data.push({
          title: message.details.messageType,
          items: [
            fields.map(field => (field.toUpperCase())),
            ...rows
          ]
        })
      }
    }

    return data
  }

  return (
    <ExportView>
      <h2>Export messages</h2>
      <span className="link link--noIcon" onClick={createExportItem}>Create Export</span>
      <ul>
        {exportItems.map((item, key) => (
          <ExportItem item={item} key={key}>
            <ExcelExport exp={item} index={key}/>
          </ExportItem>
        ))}
      </ul>
    </ExportView>
  )
}

const mapDispatchToProps = dispatch => ({
  savExportItem: data => {
    dispatch(createExportItem({
      type: 'messages',
      title: `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`,
      ...data
    }))
  }
})

const mapStateToProps = ({ wargame, exportItems }) => ({
  wargame, exportItems: exportItems.filter(item => item.type === 'messages')
})

export default connect(mapStateToProps, mapDispatchToProps)(ExportMessages)
