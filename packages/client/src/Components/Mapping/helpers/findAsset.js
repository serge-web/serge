/** find the asset with the provided id */
export default function findAsset (/* object */ allForces, /* String */ assetId) {
  var res
  allForces.find(force => {
    const assets = force.assets
    if (assets) {
      res = assets.find(asset => asset.uniqid === assetId)
      // if the above find works, we'll return true, which will
      // terminate the find process. If it returns undefined,
      // we'll return false, and carry on to the next force
      return res
    } else {
      return false
    }
  })
  return res
};
