import handleChannelUpdates from '../handle-channel-updates'
import { ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, 
  ChannelData,  MessageChannel, MessageInfoType } from "@serge/custom-types"
import { InfoMessagesMock, GameMessagesMock, MessageTemplatesMock, forces, GameChannels } from '@serge/mocks'
import deepCopy from '../deep-copy'

const channels: PlayerUiChannels = {}
const adminMessages: MessageChannel[] = GameMessagesMock
const chatTemplate = MessageTemplatesMock.find((template:any) => template.name === 'Chat') || {a:'chat'}
const chatChannels: PlayerUiChatChannel = {name:'chat', template:chatTemplate, messages: adminMessages}
const allForces: ForceData[] = forces
const selectedForce: ForceData = allForces[1]
const allChannels: ChannelData[] = GameChannels
const selectedRole = allForces[1].roles[0].name
const isObserver = false
const allTemplates: any = MessageTemplatesMock

describe('handle channel update for info message', () => {
  it('deletes channels', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const shortChannels = copyChannels.filter((channel: ChannelData) => channel.uniqid != 'channel-k53ti36p')

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
      shortChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)


  })
})

// describe('handle channel update for non-info message', () => {
//   it('deletes channels', () => {

//     // const channels: PlayerUiChannels = {}
//     // const chatChannels: PlayerUiChatChannel = {}
//     // const payload: MessageInfoType = {}
//     // const allForces: ForceData[] = []
//     // const selectedForce: ForceData = allForces[1]
//     // const allChannels: ChannelData[] = []
//     // const selectedRole = allForces[1].roles[0].name
//     // const isObserver = false
//     // const allTemplates: any = []
//     // const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
//     //   allChannels, selectedRole, isObserver, allTemplates, allForces)

//     // expect(res).toBeTruthy()
//     expect('a').toBeTruthy()
//   })
// })
