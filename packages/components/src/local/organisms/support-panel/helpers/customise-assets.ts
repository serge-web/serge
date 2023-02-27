import { MessageStructure } from '@serge/custom-types'
import { AssetRow } from '../../planning-assets/types/props'

export const customiseAssets = (_document: MessageStructure | undefined, schema: Record<string, any>,
  ownAssets: AssetRow[], otherAssets: AssetRow[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    const oldOwnAssets = res.properties?.ownAssets?.items?.properties?.asset
    const isAlive = (asset: AssetRow) => { return (asset.health == undefined) || asset.health > 0}
    const liveOwnAssets = ownAssets.filter(isAlive)
    if (oldOwnAssets) {
      oldOwnAssets.enum = liveOwnAssets.map((asset: AssetRow) => asset.id)
      oldOwnAssets.options.enum_titles = liveOwnAssets.map((asset: AssetRow) => asset.name)
    }
    const oldTargets = res.properties?.otherAssets?.items?.properties?.asset
    if (oldTargets) {
      // note. if this is an umpire, there aren't any other assets
      const liveOtherAssets = otherAssets.filter(isAlive)
      const assetList = liveOtherAssets.length > 0 ? liveOtherAssets : liveOwnAssets
      oldTargets.enum = assetList.map((asset: AssetRow) => asset.id)
      oldTargets.options.enum_titles = assetList.map((asset: AssetRow) => asset.name)
    }
  }
  return res
}
