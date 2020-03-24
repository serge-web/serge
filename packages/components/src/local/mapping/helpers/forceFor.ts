import { Force } from '@serge/custom-types'

const forceFor = (allForces: Array<Force>, assetId: string): any => {
  return allForces.find(force => {
    const assets = force.assets
    if (assets) {
      return assets.find(asset => asset.uniqid === assetId)
    } else {
      return false
    }
  })
}

export default forceFor
