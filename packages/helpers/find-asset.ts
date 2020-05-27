/** find the asset with the provided id */
const findAsset = (allForces: any, assetId: string): any => {
  var res
  allForces.find((force: any) => {
    const assets = force.assets
    if (assets) {
      res = assets.find((asset: any) => asset.uniqid === assetId)
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return res
    } else {
      return false
    }
  })
  return res
}

export default findAsset
