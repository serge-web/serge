import resolveImagePath from '../resolve-image-path'
import { serverPath } from 'src/config'
import { buildForceIconsColorsNames } from '../handle-channel-updates-force'
import { ChannelTypes, ForceData } from 'src/custom-types'
import { GameChannels2, forces } from 'src/mocks'

const allChannels: ChannelTypes[] = GameChannels2
const allForces: ForceData[] = forces

describe('resolveImagePath', () => {
  describe('when input URL already includes serverPath', () => {
    test('should return the original URL', () => {
      const channel = allChannels[0]
      const Icons = buildForceIconsColorsNames(channel.participants, allForces)
      const originalUrl = `${serverPath}/${Icons.forceIcons[0]}`
      const result = resolveImagePath(originalUrl)

      expect(result).toBe(originalUrl)
    })
  })

  describe('when input URL is relative', () => {
    test('should prepend serverPath to the URL', () => {
      const channel = allChannels[2]
      const Icons = buildForceIconsColorsNames(channel.participants, allForces)
      const relativeUrl = Icons.forceIcons[3]
      const result = resolveImagePath(relativeUrl)

      expect(result).toBe(serverPath + relativeUrl)
    })

    test('should handle undefined input and return an empty string', () => {
      const channel = allChannels[4]
      const Icons = buildForceIconsColorsNames(channel.participants, allForces)
      const result = resolveImagePath(Icons[4])

      expect(result).toBe('')
    })
  })
})
