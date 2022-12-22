import { MessageStructure } from '@serge/custom-types'
import { AssetRow } from '../../planning-assets/types/props'

export const customiseAssets = (_document: MessageStructure | undefined, schema: Record<string, any>,
  ownAssets: AssetRow[], otherAssets: AssetRow[]): Record<string, any> => {
  if (schema) {
    const oldOwnAssets = schema.properties?.ownAssets?.items?.properties?.asset
    if (oldOwnAssets) {
      oldOwnAssets.enum = ownAssets.map((asset: AssetRow) => asset.id)
      oldOwnAssets.options.enum_titles = ownAssets.map((asset: AssetRow) => asset.name)
    }
    const oldOwnTargets = schema.properties?.otherAssets?.items
    if (oldOwnTargets) {
      // this may be a plain list of assets, or it may be a table of assets (like above)
      if (oldOwnTargets.properties) {
        // list of targets
        const targetsTable = oldOwnTargets.properties.asset
        if (targetsTable) {
          targetsTable.enum = otherAssets.map((asset: AssetRow) => asset.id)
          targetsTable.options.enum_titles = otherAssets.map((asset: AssetRow) => asset.name)
        }
      } else {
        oldOwnTargets.enum = otherAssets.map((asset: AssetRow) => asset.id)
        oldOwnTargets.options.enum_titles = otherAssets.map((asset: AssetRow) => asset.name)
      }
    }
  }
  return schema
}
