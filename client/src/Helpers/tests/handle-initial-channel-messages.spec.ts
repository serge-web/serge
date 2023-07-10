import { handleAllInitialChannelMessages, handleNewMessageData } from '../handle-channel-updates'
import {
  ForceData, PlayerUiChatChannel, SetWargameMessage,
  ChannelTypes, MessageChannel, MessageInfoType, MessageCustom, CollaborationDetails, PlayerMessageLog
} from '@serge/custom-types'
import { AdminMessagesMock, GameMessagesMockRFI, MessageTemplatesMock, forces, GameChannels2, InfoMessagesMock, MessageTemplatesMockByKey } from '@serge/mocks'
import { CHAT_CHANNEL_ID, CollaborativeMessageStates } from '@serge/config'

const adminMessages: MessageChannel[] = GameMessagesMockRFI
const chatTemplate = MessageTemplatesMock.find((template: any) => template.name === 'Chat') || { a: 'chat' }
const chatChannel: PlayerUiChatChannel = { name: CHAT_CHANNEL_ID, template: chatTemplate, messages: adminMessages }
const allForces: ForceData[] = forces
const blueForce: ForceData = allForces[1]
const allChannels: ChannelTypes[] = GameChannels2
const selectedRole = allForces[1].roles[0].roleId
const isObserver = false
const allTemplates = MessageTemplatesMockByKey
const playerMessageLog: PlayerMessageLog = {}

describe('handle initial channel creation', () => {
  it('fire a message into normal channel', () => {
    // use info message to recreate channels
    // TODO: check it handleAllInitialChannelMessages should get full (not clipped) infoType message
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>
    const revPayload = payload.reverse()
    const res: SetWargameMessage = handleAllInitialChannelMessages(revPayload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates, true)

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
    expect(rfiChan.messages?.length).toEqual(3) // 3 blue messages, 1 info-type
  })
})

describe('handle new message into RFI channel', () => {
  it('fire a new version of existing message (with reference) into RFI channel', () => {
    const payload: Array<MessageInfoType | MessageCustom> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageInfoType | MessageCustom>

    // initialise wargame
    const res: SetWargameMessage = handleAllInitialChannelMessages(payload, 'wargame-name', blueForce, selectedRole, allChannels,
      allForces, chatChannel, isObserver, allTemplates, true)

    const newBlue1 = res.channels['channel-BlueRFI']
    expect(newBlue1).toBeTruthy()
    expect(newBlue1.messages).toBeTruthy()
    if (newBlue1.messages) {
      expect(newBlue1.messages.length).toEqual(4) // 3 blue messages, 1 info-type
    }

    const msg = GameMessagesMockRFI[4] as MessageCustom
    const RESPONSE = 'TEST_RESPONSE'
    const collab: CollaborationDetails = {
      ...msg.details.collaboration,
      response: {
        content: RESPONSE
      },
      lastUpdated: '2020-03-25T15:08:47.540Z',
      status: CollaborativeMessageStates.Closed
    }
    const payload2: MessageCustom = {
      ...msg,
      _id: 'id_2z',
      details: {
        ...msg.details,
        collaboration: collab
      }
    }

    const res2: SetWargameMessage = handleNewMessageData(payload2, res.channels, res.chatChannel, playerMessageLog, selectedRole)

    const newBlue = res2.channels['channel-BlueRFI']
    expect(newBlue).toBeTruthy()
    expect(newBlue.messages).toBeTruthy()
    if (newBlue.messages) {
      expect(newBlue.messages.length).toEqual(4) // 3 messages, 1 infotype
      const first = newBlue.messages[0] as MessageCustom
      expect(first.details.collaboration).toBeTruthy()
      if (first.details.collaboration) {
        expect(first.details.collaboration.response?.content).toEqual(RESPONSE)
      }
    }
  })
})
