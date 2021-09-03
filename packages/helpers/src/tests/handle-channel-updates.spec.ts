import handleChannelUpdates from '../handle-channel-updates'
import {
  ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage,
  ChannelData, MessageChannel, MessageInfoTypeClipped, MessageCustom, Role
} from '@serge/custom-types'
import { InfoMessagesMock, GameMessagesMock, MessageTemplatesMock, forces, GameChannels, MessageTemplatesMockByKey } from '@serge/mocks'
import deepCopy from '../deep-copy'
import { INFO_MESSAGE_CLIPPED, CHAT_CHANNEL_ID, CUSTOM_MESSAGE } from '@serge/config'

const whiteGC: Role = forces[0].roles[0]

const channels: PlayerUiChannels = {}
const adminMessages: MessageChannel[] = GameMessagesMock
const chatTemplate = MessageTemplatesMock.find((template:any) => template.name === 'Chat') || { a: 'chat' }
const chatChannel: PlayerUiChatChannel = { name: CHAT_CHANNEL_ID, template: chatTemplate, messages: adminMessages }
const allForces: ForceData[] = forces
const whiteForce: ForceData = allForces[0]
const blueForce: ForceData = allForces[1]
const redForce: ForceData = allForces[2]
const allChannels: ChannelData[] = GameChannels
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates = MessageTemplatesMockByKey

describe('handle channel update for info message', () => {
  it('deletes channels that have been deleted', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // ok. now a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const shortChannels = copyChannels.filter((channel: ChannelData) => channel.uniqid !== 'channel-k53ti36p')

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, blueForce,
      shortChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(4)
  })

  it('deletes channels were no longer a member of', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    copyChannels[0].participants[2].roles = [whiteGC.roleId]

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, blueForce,
      copyChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(4)
  })

  it('updates observer status', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]
    const isObserver = true

    // change channel so we're not a member
    const limWhiteRoles: ChannelData[] = deepCopy(allChannels)
    limWhiteRoles[0].participants[0].roles = [whiteGC.roleId]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, whiteForce,
      limWhiteRoles, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // we're no longer an observer
    const notObserver = false

    // regenerate channels, now we're not an observer
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, whiteForce,
      limWhiteRoles, selectedRole, notObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(3)
  })

  it('keeps us in channels were just an observer for', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    copyChannels[0].participants[2].roles = [whiteGC.roleId]

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, blueForce,
      copyChannels, selectedRole, true, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(5)
  })

  it('adds us to new channels (blue)', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(5)

    // ok. now add a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const newChannel: ChannelData = {
      name: 'Blue Net 2',
      participants: [
        { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk0d3', templates: [] },
        { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk2o6', templates: [] }],
      uniqid: 'channel-k63pjv111'
    }
    copyChannels.push(newChannel)

    // check if blue gets added
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, blueForce,
      copyChannels, selectedRole, false, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(6)
  })

  it('does not add us to new channels (red)', () => {
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, redForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(2)

    // ok. now add a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const newChannel: ChannelData = {
      name: 'Blue Net 2',
      participants: [
        { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk0d3', templates: [] },
        { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pk2o6', templates: [] }],
      uniqid: 'channel-k63pjv111'
    }
    copyChannels.push(newChannel)

    // check red force don't get channel added
    const res3: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, res.rfiMessages, 1, redForce,
      copyChannels, selectedRole, false, allTemplates, allForces)

    expect(res3).toBeTruthy()
    expect(Object.keys(res3.channels).length).toEqual(2)
  })

  it('fire a message into chat channel', () => {
    const payload: MessageChannel = GameMessagesMock[0]
    const myChatChannel = deepCopy(chatChannel)

    expect(myChatChannel.messages.length).toEqual(3)

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, myChatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(res.chatChannel.messages.length).toEqual(3)

    const messageId = 'bingo'
    const payload2: MessageCustom = {
      messageType: CUSTOM_MESSAGE,
      details: {
        channel: CHAT_CHANNEL_ID,
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          roleName: whiteGC.name,
          iconURL: 'default_img/umpireDefault.png',
          roleId: whiteGC.roleId
        },
        messageType: 'Chat',
        privateMessage: 'The private content goes in here',
        timestamp: '2020-10-13T08:52:40.930Z',
        turnNumber: 1
      },
      message: {
        content: 'Message from White, with Private content'
      },
      _id: messageId,
      hasBeenRead: false,
      isOpen: false
    }

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, res.rfiMessages, 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(res2.chatChannel.messages.length).toEqual(4)
    expect(res2.chatChannel.messages[0]._id).toBeTruthy()
    expect(res2.chatChannel.messages[0]._id).toEqual(messageId)
  })

  it('fire a message into normal channel', () => {
    // use info message to recreate channels
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    const channelId = 'channel-k63pjit0'
    expect(res.channels[channelId].messages?.length).toEqual(1) // turn marker

    const messageId = 'bingo'
    const payload2: MessageCustom = {
      messageType: CUSTOM_MESSAGE,
      details: {
        channel: channelId,
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          roleName: whiteGC.name,
          iconURL: 'default_img/umpireDefault.png',
          roleId: whiteGC.roleId
        },
        messageType: 'Chat',
        privateMessage: 'The private content goes in here',
        timestamp: '2020-10-13T08:52:40.930Z',
        turnNumber: 1
      },
      message: {
        content: 'Message from White, with Private content'
      },
      _id: messageId,
      hasBeenRead: false,
      isOpen: false
    }

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, res.rfiMessages, 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(res2.channels[channelId].messages?.length).toEqual(2)
  })

  it('deletes channels', () => {
    expect(chatChannel.messages.length).toEqual(3)

    // send in a wargame message, to get channels
    const payload: MessageInfoTypeClipped = {
      gameTurn: 0,
      messageType: INFO_MESSAGE_CLIPPED,
      infoType: true,
      details: { channel: 'Net 16' },
      _id: '2021-02-24T17:50:31.603Z',
      hasBeenRead: false,
      isOpen: false
    }
    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    const channelId = 'channel-k63pjvpb'
    expect(res.channels[channelId].messages).toBeTruthy()
    expect(res.channels[channelId].messages?.length).toEqual(1)

    // send in a new normal channel message
    const payload2: MessageCustom = deepCopy(GameMessagesMock[0])
    payload2.details.channel = channelId
    // replace the message id
    const messageId = 'bongo'
    const payload3 = Object.assign(payload2, { _id: messageId })

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload3, res.channels, chatChannel, res.rfiMessages, 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(res2.channels[channelId].messages).toBeTruthy()
    expect(res2.channels[channelId].messages?.length).toEqual(2)
    const messages = res2.channels[channelId].messages
    if (messages) {
      expect(messages[0]._id).toEqual(messageId)
    }
  })

  // TODO: check for generation of turn marker
  it('generate new turn marker', () => {
    // use info message to recreate channels
    const payload: MessageInfoTypeClipped = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, [], 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    const channelId = 'channel-k63pjit0'
    expect(res.channels[channelId].messages?.length).toEqual(1) // turn marker

    // generate a new turn
    const payload2: MessageInfoTypeClipped = deepCopy(payload)
    payload2.gameTurn = 1

    const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, res.rfiMessages, 1, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(res2.channels[channelId].messages?.length).toEqual(2) // new turn marker
  })
})
