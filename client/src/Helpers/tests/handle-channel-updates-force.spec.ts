// channelUtils.test.js
import {
  updateForceIcons,
  updateForceColors,
  updateForceNames,
  buildForceIconsColorsNames
} from '../handle-channel-updates-force'
import { ChannelTypes, ForceData, ChannelUI, PlayerUiChannels, MessageChannel } from 'src/custom-types'
import { GameChannels2, forces, MessageTemplatesMockByKey } from 'src/mocks'
import { getParticipantStates } from '../participant-states'

const allChannels: ChannelTypes[] = GameChannels2
const allForces: ForceData[] = forces
const blueForce: ForceData = allForces[1]
const isObserver: boolean = false
const selectedRole = allForces[1].roles[0].roleId

export const getUIChannels = (allChannels: ChannelTypes[], forceId: string, isObserver: boolean): PlayerUiChannels => {
  const channels: PlayerUiChannels = {}

  allChannels.forEach((channel: ChannelTypes) => {
    const {
      isParticipant,
      observing,
      templates
    } = getParticipantStates(channel, forceId, selectedRole, isObserver, MessageTemplatesMockByKey)

    if (isObserver || isParticipant) {
      // grow the existing channel definition to include the new UI-focussed entries
      const messages: MessageChannel[] = []
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates: templates,
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

describe('updateForce', () => {
  test('updates forceIcons in ChannelUI', () => {
    const channel = allChannels[0]
    const channelId = channel.uniqid
    const tmpChannels = getUIChannels(allChannels, blueForce.uniqid, isObserver)
    const thisChannel: ChannelUI = tmpChannels[channelId]
    
    updateForceIcons(thisChannel, channel.participants, allForces)
    
    updateForceColors(thisChannel, channel.participants, allForces)

    updateForceNames(thisChannel, channel.participants, allForces)
    
    expect(thisChannel.forceIcons?.length).toEqual(3)
    expect(thisChannel.forceColors?.length).toEqual(3)
    expect(thisChannel.forceNames?.length).toEqual(3)
  })
})
    
describe('buildForceIconsColorsNames', () => {
  test('builds forceIcons, forceColors, and forceNames', () => {
    const channel = allChannels[0]
    const result = buildForceIconsColorsNames(channel.participants, allForces)

    const expectedForceIcons = [
      'images/default_img/umpireDefault.png',
      'images/default_img/umpireDefault.png',
      'images/default_img/umpireDefault.png'
    ]

    const expectedForceColors = ['#FCFBEE', '#F00', '#00F']

    const expectedForceNames = ['White', 'Red Force', 'Blue Force']

    expect(result.forceIcons).toEqual(expectedForceIcons)
    expect(result.forceColors).toEqual(expectedForceColors)
    expect(result.forceNames).toEqual(expectedForceNames)
  })
})
