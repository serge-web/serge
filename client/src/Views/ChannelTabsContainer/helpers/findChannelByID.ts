import { PlayerUiChannels } from 'src/custom-types'

const findChannelByID = (channels: PlayerUiChannels, id: string) => {
  return Object.entries(channels).find(entry => {
    const [, attrs] = entry
    return attrs.uniqid === id
  })
}

export default findChannelByID
