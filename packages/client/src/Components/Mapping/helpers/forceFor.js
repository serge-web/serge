export default function forceFor (/* object */ allForces, /* String */ assetId) {
  return allForces.find(force => {
    const assets = force.assets
    if (assets) {
      return assets.find(asset => asset.uniqid === assetId)
    } else {
      return false
    }
  })
};
