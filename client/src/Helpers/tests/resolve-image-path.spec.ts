import resolveImagePath from '../resolve-image-path'
import { serverPath } from 'src/config'

describe('resolveImagePath', () => {
  test('should return the original URL if it already includes serverPath', () => {
    const originalUrl = `${serverPath}/image.jpg`
    const result = resolveImagePath(originalUrl)

    expect(result).toBe(originalUrl)
  })

  test('should prepend serverPath to the URL if it does not include it', () => {
    const relativeUrl = 'image.jpg'
    const result = resolveImagePath(relativeUrl)

    expect(result).toBe(serverPath + relativeUrl)
  })
})
