import handleChannelUpdates from '../handle-channel-updates'
import { ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, 
  ChannelData,  MessageChannel, MessageInfoType, MessageCustom } from '@serge/custom-types'
import { InfoMessagesMock, GameMessagesMock, MessageTemplatesMock, forces, GameChannels } from '@serge/mocks'
import deepCopy from '../deep-copy'
import { CHAT_CHANNEL_ID, CUSTOM_MESSAGE } from '@serge/config'

const channels: PlayerUiChannels = {}
const adminMessages: MessageChannel[] = GameMessagesMock
const chatTemplate = MessageTemplatesMock.find((template:any) => template.name === 'Chat') || {a:'chat'}
const chatChannel: PlayerUiChatChannel = {name:'chat', template:chatTemplate, messages: adminMessages}
const allForces: ForceData[] = forces
const whiteForce: ForceData = allForces[0]
const blueForce: ForceData = allForces[1]
const redForce: ForceData = allForces[2]
const allChannels: ChannelData[] = GameChannels
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates: any = MessageTemplatesMock

describe('handle channel update for info message', () => {

  it('deletes channels that have been deleted', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const shortChannels = copyChannels.filter((channel: ChannelData) => channel.uniqid != 'channel-k53ti36p')

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, blueForce, 
      shortChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)
  })

  it('deletes channels were no longer a member of', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    copyChannels[0].participants[2].roles = [{
      isGameControl: false,
      isInsightViewer: true,
      isRFIManager: true,
      canSubmitPlans: true,
      isObserver: false,
      name: 'Game Control',
      password: 'p2311'
    }]

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, blueForce, 
      copyChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)
  })

  it('updates observer status', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]
    const isObserver = true

    // change channel so we're not a member
    const limWhiteRoles: ChannelData[] = deepCopy(allChannels)
    limWhiteRoles[0].participants[0].roles = [{
      isGameControl: false,
      isInsightViewer: true,
      isRFIManager: true,
      canSubmitPlans: true,
      isObserver: false,
      name: 'Game Control',
      password: 'p2311'
    }]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, whiteForce, 
      limWhiteRoles, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // we're no longer an observer
    const notObserver = false

    // regenerate channels, now we're not an observer
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, whiteForce, 
      limWhiteRoles, selectedRole, notObserver , allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)
  })

  it('keeps us in channels were just an observer for', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    copyChannels[0].participants[2].roles = [{
      isGameControl: false,
      isInsightViewer: true,
      isRFIManager: true,
      canSubmitPlans: true,
      isObserver: false,
      name: 'Game Control',
      password: 'p2311'
    }]

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, blueForce, 
      copyChannels, selectedRole, true, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(3)
  })

  it('adds us to new channels (blue)', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

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
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, blueForce, 
      copyChannels, selectedRole, false, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(4)
  })

  it('does not add us to new channels (red)', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, redForce, 
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
    const res3: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannel, redForce, 
      copyChannels, selectedRole, false, allTemplates, allForces)

    expect(res3).toBeTruthy()
    expect(Object.keys(res3.channels).length).toEqual(2)
  })

  it('deletes channels', () => {
    const payload: MessageChannel = GameMessagesMock[0]

    expect(chatChannel.messages.length).toEqual(3)

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(res.chatChannel.messages.length).toEqual(3)

    const messageId = 'bingo'
    const payload2: MessageCustom = {
      'messageType': CUSTOM_MESSAGE,
      'details': {
        'channel': CHAT_CHANNEL_ID,
        'from': {
          'force': 'White',
          'forceColor': '#FCFBEE',
          'icon': 'default_img/umpireDefault.png',
          'role': 'Game Control'
        },
        'messageType': 'Chat',
        'privateMessage': 'The private content goes in here',
        'timestamp': '2020-10-13T08:52:40.930Z'
      },
      'message': {
        'content': 'Message from White, with Private content'
      },
      '_id': messageId,
      'hasBeenRead': false,
      'isOpen': false
    }

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, chatChannel, blueForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(res2.chatChannel.messages.length).toEqual(4)
    expect(res2.chatChannel.messages[0]._id).toBeTruthy()
    expect(res2.chatChannel.messages[0]._id).toEqual(messageId)
  })

  describe('send in new normal channel message', () => {
    it('deletes channels', () => {
      expect(chatChannel.messages.length).toEqual(4)
  
      // send in a wargame message, to get channels
      const payload: MessageInfoType = InfoMessagesMock[0]

      const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannel, blueForce, 
        allChannels, selectedRole, isObserver, allTemplates, allForces)
  
      expect(res).toBeTruthy()
      const channelId = 'channel-k63pjvpb'
      expect(res.channels[channelId].messages).toBeTruthy()
      expect(res.channels[channelId].messages?.length).toEqual(1)

      // send in a new normal channel message
      const payload2: MessageCustom =   deepCopy(GameMessagesMock[0])
      payload2.details.channel = channelId
      // replace the message id
      const messageId = 'bongo'
      const payload3 = Object.assign(payload2, {_id: messageId})
    
      // regenerate channels
      const res2: SetWargameMessage = handleChannelUpdates(payload3, res.channels, chatChannel, blueForce, 
        allChannels, selectedRole, isObserver, allTemplates, allForces)
  
      expect(res2).toBeTruthy()
      expect(res2.channels[channelId].messages).toBeTruthy()
      expect(res2.channels[channelId].messages?.length).toEqual(2)
      const messages = res2.channels[channelId].messages
      if(messages) {
        expect(messages[0]._id).toEqual(messageId)
      }

    })
  })

})
