import { ForceData, Asset } from '@serge/custom-types'

/** find the asset with the provided id */
export default (allForces: ForceData[], assetId: string): Asset => {
  let res: Asset | undefined
  allForces.find((force) => {
    const assets: Asset[] | undefined = force.assets
    if (Array.isArray(assets)) {
      res = assets.find(asset => asset.uniqid === assetId) || undefined
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return !!res
    }
    return false
  })
  if (res !== undefined) return res
  throw new Error('Something bad happened')
}
