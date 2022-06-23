import handleChannelUpdates, { handleNewMessageData } from '../handle-channel-updates'
import { forces, InfoMessagesMock, GameMessagesMock, MessageTemplatesMock, GameChannels2, MessageTemplatesMockByKey } from '@serge/mocks'
import deepCopy from '../deep-copy'
import { INFO_MESSAGE_CLIPPED, CHAT_CHANNEL_ID, CUSTOM_MESSAGE, PARTICIPANT_CUSTOM, CHANNEL_CUSTOM } from '@serge/config'
import { Role, MessageChannel, PlayerUiChatChannel, ForceData, ChannelTypes, PlayerMessageLog, PlayerUiChannels, ChannelUI, MessageInfoTypeClipped, SetWargameMessage, ChannelCustom } from '@serge/custom-types'
import { getParticipantStates } from '../participant-states'

const whiteGC: Role = forces[0].roles[0]
const adminMessages: MessageChannel[] = GameMessagesMock
const chatTemplate = MessageTemplatesMock.find((template: any) => template.name === 'Chat') || { a: 'chat' }
const chatChannel: PlayerUiChatChannel = { name: CHAT_CHANNEL_ID, template: chatTemplate, messages: adminMessages }
const allForces: ForceData[] = forces
const whiteForce: ForceData = allForces[0]
const blueForce: ForceData = allForces[1]
const redForce: ForceData = allForces[2]
const allChannels: ChannelTypes[] = GameChannels2
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates = MessageTemplatesMockByKey
const playerMessageLog: PlayerMessageLog = {}

console.log('working', !!whiteGC, !!whiteForce, !!redForce, !!adminMessages, INFO_MESSAGE_CLIPPED && CUSTOM_MESSAGE && PARTICIPANT_CUSTOM && CHANNEL_CUSTOM)

const getUIChannels = (allChannels: ChannelTypes[], forceId: string, isObserver: boolean): PlayerUiChannels => {
  const channels: PlayerUiChannels = {}

  allChannels.forEach((channel: ChannelTypes) => {
    const {
      isParticipant,
      observing,
      templates
    } = getParticipantStates(channel, forceId, selectedRole, isObserver, MessageTemplatesMockByKey)

    if (isObserver || isParticipant) {
      // TODO: define type for force Icons
      const forceIcons: any[] = []
      const forceColors: string[] = []
      for (const { forceUniqid } of channel.participants) {
        const force = allForces.find((force) => force.uniqid === forceUniqid)
        forceIcons.push((force && force.iconURL) || force?.icon)
        forceColors.push((force && force.color) || '#FFF')
      }

      // grow the existing channel definition to include the new UI-focussed entries
      const messages: MessageChannel[] = []
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates: templates,
        forceIcons,
        forceColors,
        messages,
        unreadMessageCount: 5,
        observing: observing,
        cData: channel
      }
      channels[channel.uniqid] = newChannel
    }
  })
  return channels
}

describe('handle channel update for info message', () => {
  it('deletes channels that have been deleted', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
    const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

    const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // ok. now a channel
    const copyChannels: ChannelTypes[] = deepCopy(allChannels)
    const shortChannels = copyChannels.filter((channel: ChannelTypes) => channel.uniqid !== 'channel-k53ti36p')

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(shortChannels, 'some_id', 4, res.channels, chatChannel, blueForce,
      selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(4)
  })
    it('deletes channels were no longer a member of', () => {
      const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
      const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

      const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

      expect(res).toBeTruthy()
      expect(Object.keys(res.channels).length).toEqual(5)

      // ok. now remove us from a channel
      const copyChannels: ChannelTypes[] = deepCopy(allChannels)
      copyChannels[0].participants[2].roles = [whiteGC.roleId]

      // regenerate channels
      const res2: SetWargameMessage = handleChannelUpdates(copyChannels, 'some_id', 4, res.channels, chatChannel, blueForce,
        selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

      expect(res2).toBeTruthy()
      expect(Object.keys(res2.channels).length).toEqual(4)
    })
  })

  it('updates observer status', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
    const isObserver = true

    // change channel so we're not a member
    const limWhiteRoles: ChannelTypes[] = deepCopy(allChannels)
    limWhiteRoles[0].participants[0].roles = [whiteGC.roleId]

    const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

    const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // we're no longer an observer
    const notObserver = false

    // regenerate channels, now we're not an observer
    const res2: SetWargameMessage = handleChannelUpdates(limWhiteRoles, 'some_id', 4, res.channels,  chatChannel, whiteForce,
      selectedRole, notObserver, allTemplates, allForces, playerMessageLog)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(3)
  })

    it('keeps us in channels were just an observer for', () => {
      const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
      const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

      const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

      expect(res).toBeTruthy()
      expect(Object.keys(res.channels).length).toEqual(5)

      // ok. now remove us from a channel
      const copyChannels: ChannelTypes[] = deepCopy(allChannels)
      copyChannels[0].participants[2].roles = [whiteGC.roleId]

      // regenerate channels
      const res2: SetWargameMessage = handleChannelUpdates(copyChannels, 'some_id', 4, res.channels, chatChannel, blueForce,
        selectedRole, true, allTemplates, allForces, playerMessageLog)

      expect(res2).toBeTruthy()
      expect(Object.keys(res2.channels).length).toEqual(5)
    })

    it('adds us to new channels (blue)', () => {
      const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
      const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

      const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

      expect(res).toBeTruthy()
      expect(Object.keys(res.channels).length).toEqual(5)

      // ok. now add a channel
      const copyChannels: ChannelTypes[] = deepCopy(allChannels)
      const newChannel: ChannelCustom = {
        channelType: CHANNEL_CUSTOM,
        name: 'Blue Net 2',
        participants: [
          { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk0d3', pType: PARTICIPANT_CUSTOM, templates: [] },
          { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk2o6', pType: PARTICIPANT_CUSTOM, templates: [] }],
        uniqid: 'channel-k63pjv111'
      }
      copyChannels.push(newChannel)

      // check if blue gets added
      const res2: SetWargameMessage = handleChannelUpdates(copyChannels, 'some_id', 4, res.channels, chatChannel, blueForce,
        selectedRole, false, allTemplates, allForces, playerMessageLog)

      expect(res2).toBeTruthy()
      expect(Object.keys(res2.channels).length).toEqual(6)
    })

    // it('does not add us to new channels (red)', () => {
    //   const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
    //   const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)

    //   const res: SetWargameMessage = handleNewMessageData(payload, tmpChannels, chatChannel, playerMessageLog)

    //   expect(res).toBeTruthy()
    //   expect(Object.keys(res.channels).length).toEqual(2)

    //   // ok. now add a channel
    //   const copyChannels: ChannelTypes[] = deepCopy(allChannels)
    //   const newChannel: ChannelCustom = {
    //     name: 'Blue Net 2',
    //     channelType: CHANNEL_CUSTOM,
    //     participants: [
    //       { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk0d3', pType: PARTICIPANT_CUSTOM, templates: [] },
    //       { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk2o6', pType: PARTICIPANT_CUSTOM, templates: [] }],
    //     uniqid: 'channel-k63pjv111'
    //   }
    //   copyChannels.push(newChannel)

    //   // check red force don't get channel added
    //   const res3: SetWargameMessage = handleChannelUpdates(copyChannels, 'some_id', 4, res.channels, chatChannel, redForce,
    //     selectedRole, false, allTemplates, allForces, playerMessageLog)

    //   expect(res3).toBeTruthy()
    //   expect(Object.keys(res3.channels).length).toEqual(2)
    // })

  //   it('fire a message into chat channel', () => {
  //     const payload: MessageChannel = GameMessagesMock[0]
  //     const myChatChannel = deepCopy(chatChannel)

  //     expect(myChatChannel.messages.length).toEqual(3)

  //     const res: SetWargameMessage = handleChannelUpdates(payload, channels, myChatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     // check expected player log
  //     expect(res.playerMessageLog).toBeTruthy()
  //     expect(Object.values(res.playerMessageLog).length).toEqual(1)
  //     const timeStamp1 = '2020-10-13T08:52:04.394Z'
  //     expect(Object.values(res.playerMessageLog)[0].lastMessageTime).toEqual(timeStamp1)

  //     expect(res).toBeTruthy()
  //     expect(res.chatChannel.messages.length).toEqual(3)

  //     const messageId = 'bingo'
  //     const payload2: MessageCustom = {
  //       messageType: CUSTOM_MESSAGE,
  //       details: {
  //         channel: CHAT_CHANNEL_ID,
  //         from: {
  //           force: 'White',
  //           forceColor: '#FCFBEE',
  //           roleName: whiteGC.name,
  //           iconURL: 'default_img/umpireDefault.png',
  //           roleId: whiteGC.roleId
  //         },
  //         messageType: 'Chat',
  //         privateMessage: 'The private content goes in here',
  //         timestamp: '2020-10-13T08:52:40.930Z',
  //         turnNumber: 1
  //       },
  //       message: {
  //         content: 'Message from White, with Private content'
  //       },
  //       _id: messageId,
  //       hasBeenRead: false,
  //       isOpen: false
  //     }

  //     // regenerate channels
  //     const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res2).toBeTruthy()
  //     expect(res2.chatChannel.messages.length).toEqual(4)
  //     expect(res2.chatChannel.messages[0]._id).toBeTruthy()
  //     expect(res2.chatChannel.messages[0]._id).toEqual(messageId)

  //     // and the updated player log
  //     const log2 = res2.playerMessageLog
  //     expect(Object.values(log2).length).toEqual(1)
  //     // timestamp should be different
  //     expect(Object.values(log2)[0].lastMessageTime).not.toEqual(timeStamp1)
  //   })

  //   it('fire a message into normal channel', () => {
  //     // use info message to recreate channels
  //     const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

  //     const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res).toBeTruthy()
  //     const channelId = 'channel-k63pjit0'
  //     expect(res.channels[channelId].messages?.length).toEqual(1) // turn marker

  //     const messageId = 'bingo'
  //     const payload2: MessageCustom = {
  //       messageType: CUSTOM_MESSAGE,
  //       details: {
  //         channel: channelId,
  //         from: {
  //           force: 'White',
  //           forceColor: '#FCFBEE',
  //           roleName: whiteGC.name,
  //           iconURL: 'default_img/umpireDefault.png',
  //           roleId: whiteGC.roleId
  //         },
  //         messageType: 'Chat',
  //         privateMessage: 'The private content goes in here',
  //         timestamp: '2020-10-13T08:52:40.930Z',
  //         turnNumber: 1
  //       },
  //       message: {
  //         content: 'Message from White, with Private content'
  //       },
  //       _id: messageId,
  //       hasBeenRead: false,
  //       isOpen: false
  //     }

  //     // regenerate channels
  //     const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res2).toBeTruthy()
  //     expect(res2.channels[channelId].messages?.length).toEqual(2)
  //   })

  //   it('deletes channels', () => {
  //     expect(chatChannel.messages.length).toEqual(3)

  //     // send in a wargame message, to get channels
  //     const payload: MessageInfoTypeClipped = {
  //       gameTurn: 0,
  //       messageType: INFO_MESSAGE_CLIPPED,
  //       infoType: true,
  //       details: { channel: 'Net 16' },
  //       _id: '2021-02-24T17:50:31.603Z',
  //       hasBeenRead: false,
  //       isOpen: false
  //     }
  //     const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res).toBeTruthy()
  //     const channelId = 'channel-k63pjvpb'
  //     expect(res.channels[channelId].messages).toBeTruthy()
  //     expect(res.channels[channelId].messages?.length).toEqual(1)

  //     // send in a new normal channel message
  //     const payload2: MessageCustom = deepCopy(GameMessagesMock[0])
  //     payload2.details.channel = channelId
  //     // replace the message id
  //     const messageId = 'bongo'
  //     const payload3 = Object.assign(payload2, { _id: messageId })

  //     // regenerate channels
  //     const res2: SetWargameMessage = handleChannelUpdates(payload3, res.channels, chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res2).toBeTruthy()
  //     expect(res2.channels[channelId].messages).toBeTruthy()
  //     expect(res2.channels[channelId].messages?.length).toEqual(2)
  //     const messages = res2.channels[channelId].messages
  //     if (messages) {
  //       expect(messages[0]._id).toEqual(messageId)
  //     }
  //   })

  //   // TODO: check for generation of turn marker
  //   it('generate new turn marker', () => {
  //     // use info message to recreate channels
  //     const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

  //     const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res).toBeTruthy()
  //     const channelId = 'channel-k63pjit0'
  //     expect(res.channels[channelId].messages?.length).toEqual(1) // turn marker

  //     // generate a new turn
  //     const payload2: MessageInfoTypeClipped = deepCopy(payload)
  //     payload2.gameTurn = 1

  //     const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, blueForce,
  //       allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //     expect(res2).toBeTruthy()
  //     expect(res2.channels[channelId].messages?.length).toEqual(2) // new turn marker
  //   })
  // })

  // it('updates payload', () => {
  //   expect(chatChannel.messages.length).toEqual(3)

  //   // send in a wargame message, to get channels
  //   const payload: MessageInfoTypeClipped = {
  //     gameTurn: 0,
  //     messageType: INFO_MESSAGE_CLIPPED,
  //     infoType: true,
  //     details: { channel: 'Net 16' },
  //     _id: '2021-02-24T17:50:31.603Z',
  //     hasBeenRead: false,
  //     isOpen: false
  //   }
  //   const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce,
  //     allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

  //   const playerLog2 = res.playerMessageLog
  //   expect(Object.values(playerLog2).length).toEqual(0)

  //   // prepare normal channel message
  //   const payload2: MessageCustom = deepCopy(GameMessagesMock[0])

  //   // replace the message id
  //   const messageId = 'bongo'
  //   const payload3 = Object.assign(payload2, { _id: messageId })

  //   // check the message is what we're expecting
  //   const redCO: Role = forces[2].roles[0]
  //   expect(payload2.details.from.roleId).toEqual(redCO.roleId)

  //   // process new message
  //   const res2: SetWargameMessage = handleChannelUpdates(payload3, res.channels, chatChannel, blueForce,
  //     allChannels, selectedRole, isObserver, allTemplates, allForces, playerMessageLog)

//   // check player log gets updated
//   const playerLog3 = res2.playerMessageLog
//   expect(Object.values(playerLog3).length).toEqual(1)
//   const redEntry = playerLog3[redCO.roleId]
//   expect(redEntry).toBeTruthy()
//   expect(redEntry.roleId).toEqual(redCO.roleId)
//   const genericMessage2: any = GameMessagesMock[0] as unknown
//   expect(redEntry.lastMessageTime).toEqual(genericMessage2.details.timestamp)
// })
})
