import { serverPath } from 'src/config'

/*
  * Resolves the image path by ensuring it includes the serverPath.
  * If the provided URL already includes serverPath, it returns the original URL.
  * If the URL is relative, it prepends serverPath to it.
*/

const resolveImagePath = (url: string | undefined) => {
  const isLocalUrl = url && url.includes(serverPath)
  return isLocalUrl ? url : serverPath + url
}

export default resolveImagePath
