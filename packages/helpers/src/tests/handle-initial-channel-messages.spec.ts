import handleChannelUpdates, { handleAllInitialChannelMessages, refNumberFor } from '../handle-channel-updates'
import {
  ForceData, PlayerUiChatChannel, SetWargameMessage,
  ChannelData, MessageChannel, MessageInfoType, MessageCustom, CollaborationDetails
} from '@serge/custom-types'
import { AdminMessagesMock, GameMessagesMockRFI, MessageTemplatesMock, forces, GameChannels, InfoMessagesMock, MessageTemplatesMockByKey } from '@serge/mocks'
import { CHAT_CHANNEL_ID, CollaborativeMessageStates } from '@serge/config'
import deepCopy from '../deep-copy'

const adminMessages: MessageChannel[] = GameMessagesMockRFI
const chatTemplate = MessageTemplatesMock.find((template: any) => template.name === 'Chat') || { a: 'chat' }
const chatChannel: PlayerUiChatChannel = { name: CHAT_CHANNEL_ID, template: chatTemplate, messages: adminMessages }
const allForces: ForceData[] = forces
const blueForce: ForceData = allForces[1]
const allChannels: ChannelData[] = GameChannels
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates = MessageTemplatesMockByKey

describe('handle initial channel creation', () => {
  it('fire a message into normal channel', () => {
    // use info message to recreate channels
    // TODO: check it handleAllInitialChannelMessages should get full (not clipped) infoType message
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>
    const revPayload = payload.reverse()
    const res: SetWargameMessage = handleAllInitialChannelMessages(revPayload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates)

    expect(res).toBeTruthy()
    expect(res.chatChannel.messages.length).toEqual(2) // turn marker

    const channelId = 'channel-k63pjit0'

    expect(Object.keys(res.channels).length).toEqual(5)

    expect(res.channels[channelId].messages?.length).toEqual(5)

    const turnMarkers = res.channels[channelId].messages?.filter((msg: MessageChannel) => msg.infoType)
    expect(turnMarkers?.length).toEqual(2)

    // get the blue RFI channel
    const rfiChan = res.channels['channel-BlueRFI']
    expect(rfiChan).toBeTruthy()
    expect(rfiChan.messages?.length).toEqual(5) // 3 blue messages, 2 info-type

    // get the pure list of RFI messages
    const rfiMessages = res.rfiMessages
    expect(rfiMessages.length).toEqual(4)

    // and the reference number
    expect(res.nextMsgReference).toEqual(4)
  })
})

describe('handling reference numbers', () => {
  it('correctly extracts reference numbers', () => {
    expect(refNumberFor(undefined, 2, undefined)).toEqual(2)
    expect(refNumberFor(undefined, 2, 'Blue')).toEqual(2)
    expect(refNumberFor('Blue-3', 2, 'Blue')).toEqual(4)
    expect(refNumberFor('BLUE-3', 2, 'Blue')).toEqual(2)
    expect(refNumberFor('Blue-3', 2, undefined)).toEqual(2)
    expect(refNumberFor('Red-3', 2, 'Blue')).toEqual(2)
    expect(refNumberFor('Blue:3', 2, 'Blue')).toEqual(2)
    expect(refNumberFor('Blue--3', 2, 'Blue')).toEqual(2)
  })

  it('correctly extracts reference numbers with minus in title', () => {
    expect(refNumberFor('Blue-1-3', 2, 'Blue-1')).toEqual(4)
    expect(refNumberFor('Blue-2-3', 2, 'Blue-1')).toEqual(2)
    expect(refNumberFor('Blue-10-3', 2, 'Blue-1')).toEqual(2)
  })
})

describe('handle new message into RFI channel', () => {
  it('fire a new version of existing message (with reference) into RFI channel', () => {
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>

    // initialise wargame
    const res: SetWargameMessage = handleAllInitialChannelMessages(payload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates)

    const newBlue1 = res.channels['channel-BlueRFI']
    expect(newBlue1).toBeTruthy()
    expect(newBlue1.messages).toBeTruthy()
    if (newBlue1.messages) {
      expect(newBlue1.messages.length).toEqual(5)
    }

    expect(res.rfiMessages.length).toEqual(4)

    const msg = GameMessagesMockRFI[4] as MessageCustom
    const RESPONSE = 'TEST_RESPONSE'
    const collab: CollaborationDetails = {
      ...msg.details.collaboration,
      response: RESPONSE,
      status: CollaborativeMessageStates.Closed
    }
    const payload2: MessageChannel = {
      ...msg,
      _id: 'id_2z',
      details: {
        ...msg.details,
        collaboration: collab
      }
    }

    const res2: SetWargameMessage = handleChannelUpdates(payload2, res.channels, res.chatChannel, res.rfiMessages, res.nextMsgReference, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    const newBlue = res2.channels['channel-BlueRFI']
    expect(newBlue).toBeTruthy()
    expect(newBlue.messages).toBeTruthy()
    if (newBlue.messages) {
      expect(newBlue.messages.length).toEqual(5)
      const first = newBlue.messages[0] as MessageCustom
      expect(first.details.collaboration).toBeTruthy()
      if (first.details.collaboration) {
        expect(first.details.collaboration.response).toEqual(RESPONSE)
      }
    }

    expect(res2.rfiMessages.length).toEqual(4)
  })

  it('fire a new message (with non-numeric) into RFI channel', () => {
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>

    // initialise wargame
    const res: SetWargameMessage = handleAllInitialChannelMessages(payload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates)

    const newBlue1 = res.channels['channel-BlueRFI']
    expect(newBlue1).toBeTruthy()
    expect(newBlue1.messages).toBeTruthy()
    if (newBlue1.messages) {
      expect(newBlue1.messages.length).toEqual(5)
    }

    expect(res.rfiMessages.length).toEqual(4)

    expect(res.nextMsgReference).toEqual(4)

    const msg = deepCopy(GameMessagesMockRFI[4]) as MessageCustom
    msg.message.Reference = 'NEW_REFERENCE'

    const res2: SetWargameMessage = handleChannelUpdates(msg, res.channels, res.chatChannel, res.rfiMessages, res.nextMsgReference, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)
    expect(res2.nextMsgReference).toEqual(4)

    // the number of rfi messages should now have increased
    expect(res2.rfiMessages.length).toEqual(5)
  })

  it('fire a new message (with numeric) into RFI channel', () => {
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>

    // initialise wargame
    const res: SetWargameMessage = handleAllInitialChannelMessages(payload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates)

    const newBlue1 = res.channels['channel-BlueRFI']
    expect(newBlue1).toBeTruthy()
    expect(newBlue1.messages).toBeTruthy()
    if (newBlue1.messages) {
      expect(newBlue1.messages.length).toEqual(5)
    }

    expect(res.rfiMessages.length).toEqual(4)

    expect(res.nextMsgReference).toEqual(4)

    const msg = deepCopy(GameMessagesMockRFI[4]) as MessageCustom
    msg.message.Reference = 'Blue-6'

    const res2: SetWargameMessage = handleChannelUpdates(msg, res.channels, res.chatChannel, res.rfiMessages, res.nextMsgReference, blueForce,
      allChannels, selectedRole, isObserver, allTemplates, allForces)
    expect(res2.nextMsgReference).toEqual(7)

    // the number of rfi messages should now have increased
    expect(res2.rfiMessages.length).toEqual(5)
  })
})
