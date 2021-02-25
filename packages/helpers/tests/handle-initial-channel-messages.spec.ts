import { handleAllInitialChannelMessages } from '../handle-channel-updates'
import { ForceData, PlayerUiChatChannel, SetWargameMessage, 
  ChannelData,  MessageChannel } from '@serge/custom-types'
import { AdminMessagesMock, GameMessagesMock, MessageTemplatesMock, forces, GameChannels, InfoMessagesMock } from '@serge/mocks'
import { CHAT_CHANNEL_ID } from '@serge/config'

const adminMessages: MessageChannel[] = GameMessagesMock
const chatTemplate = MessageTemplatesMock.find((template:any) => template.name === 'Chat') || {a:'chat'}
const chatChannel: PlayerUiChatChannel = {name:CHAT_CHANNEL_ID, template:chatTemplate, messages: adminMessages}
const allForces: ForceData[] = forces
const blueForce: ForceData = allForces[1]
const allChannels: ChannelData[] = GameChannels
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates: any[] = MessageTemplatesMock

describe('handle initial channel creation', () => {
  it('fire a message into normal channel', () => {
    // use info message to recreate channels
    const payload: Array<MessageChannel> = AdminMessagesMock.concat(GameMessagesMock).concat(InfoMessagesMock)

    const res: SetWargameMessage = handleAllInitialChannelMessages(payload, 'wargame-name', blueForce, selectedRole, allChannels,
    allForces, chatChannel, isObserver, allTemplates)

    expect(res).toBeTruthy()
    expect(res.chatChannel.messages.length).toEqual(2) // turn marker

    const channelId = "channel-k63pjit0"

    expect(Object.keys(res.channels).length).toEqual(3)
    expect(res.channels[channelId].messages?.length).toEqual(5)

    const turnMarkers = res.channels[channelId].messages?.filter((msg: MessageChannel) => msg.infoType)
    expect(turnMarkers?.length).toEqual(2)
  })

})
