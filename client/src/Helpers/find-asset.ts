import { Asset, ForceData } from 'src/custom-types'

/** recursive helper function - checks inside
 * comprising and hosting lists
 */
export const isAsset = (asset: Asset, assetId: string | undefined, assetName?: string): Asset | undefined => {
  if (asset.uniqid === assetId) {
    return asset
  } else if (assetId === undefined && assetName === asset.name) {
    return asset
  } else {
    let res: Asset | undefined
    if (asset.comprising && asset.comprising.length) {
      asset.comprising.find(asset2 => {
        res = isAsset(asset2, assetId, assetName)
        return res
      })
    }
    // only bother checking hosting if we haven't found it already
    if (!res && asset.hosting && asset.hosting.length) {
      res = asset.hosting.find(asset2 => {
        res = isAsset(asset2, assetId, assetName)
        return res
      })
    }
    return res
  }
}

/** find the asset with the provided id */
export default (allForces: ForceData[], assetId: string | undefined, assetName?: string): Asset => {
  let res: Asset | undefined
  allForces.find((force) => {
    const assets: Asset[] | undefined = force.assets
    if (Array.isArray(assets)) {
      assets.find(asset => {
        res = isAsset(asset, assetId, assetName)
        return !!res
      })
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return !!res
    }
    return false
  })
  if (res !== undefined) return res
  throw new Error('Asset not found from id:' + assetId)
}
