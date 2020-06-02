export default function forceFor ( allForces: any, assetId: string): any {
  return allForces.find((force: any) => {
    const assets = force.assets
    if (assets) {
      return assets.find((asset: any) => asset.uniqid === assetId)
    } else {
      return false
    }
  })
};
