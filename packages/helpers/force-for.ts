import { Asset, ForceData } from "@serge/custom-types"

export default function forceFor ( allForces: ForceData[], assetId: string): ForceData {
  const match: ForceData | undefined = allForces.find((force: ForceData) => {
    const assets = force.assets
    if (assets) {
      const res: Asset | undefined =  assets.find((asset: Asset) => asset.uniqid === assetId)
      if(res !== undefined) {
        return res
      } else {
        return false
      }
    } else {
      return false
    }
  })
  if(match !== undefined) return match
  throw new Error('Failed to find force for asset:' + assetId)
};
