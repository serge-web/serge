import { PlayerUiChannels } from 'src/custom-types'

const findChannelByName = (channels: PlayerUiChannels, name: string) => {
  return Object.entries(channels).find(entry => {
    const [, attrs] = entry
    return attrs.name === name
  })
}

export default findChannelByName
