import { Asset, ForceData } from "@serge/custom-types"

/** find the asset with the provided id */
export default function findAsset (allForces: ForceData[], assetId: string): Asset | undefined {
  var res: Asset | undefined
  allForces.find((force: ForceData) => {
    const assets = force.assets
    if (assets) {
      res = assets.find((asset: Asset) => asset.uniqid === assetId)
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return res
    } else {
      return undefined
    }
  })
  return res
};
