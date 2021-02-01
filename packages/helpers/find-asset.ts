import { Asset, ForceData } from "@serge/custom-types"

const isAsset = (asset: Asset, assetId: string): Asset | undefined => {
  if(asset.uniqid === assetId) {
    return asset
  } else {
    let res: Asset | undefined = undefined
    if(asset.comprising && asset.comprising.length) {
      res = asset.comprising.find(asset => {
        return isAsset(asset, assetId)
      })
    }
    if(asset.hosting && asset.hosting.length) {
      res = asset.hosting.find(asset => {
        return isAsset(asset, assetId)
      })
    }
    return res
  }
}

/** find the asset with the provided id */
export default (allForces: ForceData[], assetId: string): Asset => {
  let res: Asset | undefined = undefined
  allForces.find((force) => {
    const assets: Asset[] | undefined = force.assets
    if (Array.isArray(assets)) {
      assets.find(asset => {
        res = isAsset(asset, assetId)
        return res
      })
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return !!res
    }
    return false
  })
  if (res !== undefined) return res
  throw new Error('Asset not found from id:' + assetId);
};
