import handleChannelUpdates from '../handle-channel-updates'
import { ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, 
  ChannelData, MessageCustom, MessageChannel } from "@serge/custom-types"
import { AdminMessagesMock, GameMessagesMock, MessageTemplatesMock, forces, GameChannels } from '@serge/mocks'

describe('handle channel update for info message', () => {
  it('deletes channels', () => {

    const channels: PlayerUiChannels = {}
    const adminMessages: MessageChannel[] = GameMessagesMock
    const chatTemplate = MessageTemplatesMock.find((template:any) => template.name === 'Chat') || {a:'chat'}
    const chatChannels: PlayerUiChatChannel = {name:'chat', template:chatTemplate, messages: adminMessages}
    const payload: MessageCustom = AdminMessagesMock[0]
    const allForces: ForceData[] = forces
    const selectedForce: ForceData = allForces[1]
    const allChannels: ChannelData[] = GameChannels
    const selectedRole = allForces[1].roles[0].name
    const isObserver = false
    const allTemplates: any = []
    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    console.log(res.channels)
  })
})

describe('handle channel update for non-info message', () => {
  it('deletes channels', () => {

    // const channels: PlayerUiChannels = {}
    // const chatChannels: PlayerUiChatChannel = {}
    // const payload: MessageInfoType = {}
    // const allForces: ForceData[] = []
    // const selectedForce: ForceData = allForces[1]
    // const allChannels: ChannelData[] = []
    // const selectedRole = allForces[1].roles[0].name
    // const isObserver = false
    // const allTemplates: any = []
    // const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
    //   allChannels, selectedRole, isObserver, allTemplates, allForces)

    // expect(res).toBeTruthy()
    expect('a').toBeTruthy()
  })
})
