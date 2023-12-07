import { Asset } from 'src/custom-types'

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
