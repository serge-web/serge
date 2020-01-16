export default function forceFor (/* object */ allForces, /* String */ assetName) {
  return allForces.find(force => {
    const assets = force.assets
    if (assets) {
      return assets.find(asset => asset.name === assetName)
    } else {
      return false
    }
  }).name
};
