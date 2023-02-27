import { MessageStructure } from '@serge/custom-types'
import { AssetRow } from '../../planning-assets/types/props'

export const customiseAssets = (_document: MessageStructure | undefined, schema: Record<string, any>,
  ownAssets: AssetRow[], otherAssets: AssetRow[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    const oldOwnAssets = res.properties?.ownAssets?.items?.properties?.asset
    if (oldOwnAssets) {
      const liveAsset = ownAssets.filter((row) => row.health && row.health > 0)
      console.log('live assets', ownAssets.length, liveAsset.length)
      oldOwnAssets.enum = ownAssets.map((asset: AssetRow) => asset.id)
      oldOwnAssets.options.enum_titles = ownAssets.map((asset: AssetRow) => asset.name)
    }
    const oldTargets = res.properties?.otherAssets?.items?.properties?.asset
    if (oldTargets) {
      // note. if this is an umpire, there aren't any other assets
      const assetList = otherAssets.length > 0 ? otherAssets : ownAssets
      oldTargets.enum = assetList.map((asset: AssetRow) => asset.id)
      oldTargets.options.enum_titles = assetList.map((asset: AssetRow) => asset.name)
    }
  }
  return res
}
