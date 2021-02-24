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

  it('deletes channels that have been deleted', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    const shortChannels = copyChannels.filter((channel: ChannelData) => channel.uniqid != 'channel-k53ti36p')

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannels, selectedForce, 
      shortChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)
  })

  it('deletes channels were no longer a member of', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
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
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannels, selectedForce, 
      copyChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(2)
  })

  it('keeps us in channels were just an observer for', () => {
    const payload: MessageInfoType = InfoMessagesMock[0]

    const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
      allChannels, selectedRole, isObserver, allTemplates, allForces)

    expect(res).toBeTruthy()
    expect(Object.keys(res.channels).length).toEqual(3)

    // ok. now remove us from a channel
    const copyChannels: ChannelData[] = deepCopy(allChannels)
    copyChannels[0].participants[2].roles = [      {
      isGameControl: false,
      isInsightViewer: true,
      isRFIManager: true,
      canSubmitPlans: true,
      isObserver: false,
      name: 'Game Control',
      password: 'p2311'
    }]

    // regenerate channels
    const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannels, selectedForce, 
      copyChannels, selectedRole, true, allTemplates, allForces)

    expect(res2).toBeTruthy()
    expect(Object.keys(res2.channels).length).toEqual(3)
  })
})

it('adds us to new channels', () => {
  const payload: MessageInfoType = InfoMessagesMock[0]

  const res: SetWargameMessage = handleChannelUpdates(payload, channels, chatChannels, selectedForce, 
    allChannels, selectedRole, isObserver, allTemplates, allForces)

  expect(res).toBeTruthy()
  expect(Object.keys(res.channels).length).toEqual(3)

   // add a new channel
  // ok. now remove us from a channel
  const copyChannels: ChannelData[] = deepCopy(allChannels)
  copyChannels[0].participants[2].roles = [      {
    isGameControl: false,
    isInsightViewer: true,
    isRFIManager: true,
    canSubmitPlans: true,
    isObserver: false,
    name: 'Game Control',
    password: 'p2311'
  }]

  // regenerate channels
  const res2: SetWargameMessage = handleChannelUpdates(payload, res.channels, chatChannels, selectedForce, 
    copyChannels, selectedRole, true, allTemplates, allForces)

  expect(res2).toBeTruthy()
  expect(Object.keys(res2.channels).length).toEqual(3)
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
