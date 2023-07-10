import { Asset, ForceData } from 'src/custom-types'
import { isAsset } from './find-asset'

export default function forceFor (allForces: ForceData[], assetId: string): ForceData {
  const match: ForceData | undefined = allForces.find((force: ForceData) => {
    const assets = force.assets
    if (assets) {
      // create struct with just this force
      const assets: Asset[] | undefined = force.assets
      if (Array.isArray(assets)) {
        return assets.find(asset => {
          return !!isAsset(asset, assetId)
        })
      }
      return false
    }
    return false
  })
  if (match !== undefined) return match
  throw new Error('Failed to find force for asset:' + assetId)
}
