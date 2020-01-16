export default function forceFor (/* object */ allForces, /* String */ assetName) {
  var result = null
  allForces.forEach(force => {
    const assets = force.assets
    if (assets) {
      assets.forEach(asset => {
        if (asset.name === assetName) {
          result = force.name
        }
      })
    }
  })
  return result
};
