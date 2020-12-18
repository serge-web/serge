import { Asset, ForceData } from "@serge/custom-types"

export default function forceFor ( allForces: ForceData[], assetId: string): any {
  return allForces.find((force: ForceData) => {
    const assets = force.assets
    if (assets) {
      return assets.find((asset: Asset) => asset.uniqid === assetId)
    } else {
      return false
    }
  })
};
