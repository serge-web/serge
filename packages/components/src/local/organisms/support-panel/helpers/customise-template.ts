import { AssetRow } from "../../planning-assets/types/props"

export const customiseTemplate = (schema: Record<string, any>, ownAssets: AssetRow[], otherAssets: AssetRow[]): Record<string, any> => {
  console.log('schema', schema)
  if (schema) {
    const oldOwnAssets = schema.properties?.ownAssets?.items?.properties?.asset?.enum
    if (oldOwnAssets) {
      schema.properties.ownAssets.items.properties.asset.enum = ownAssets.map((asset: AssetRow) => asset.id)
      schema.properties.ownAssets.items.properties.asset.options.enum_titles = ownAssets.map((asset: AssetRow) => asset.name)
    }
    const oldOwnTargets = schema.properties?.otherAssets?.items?.enum
    if (oldOwnTargets) {
      schema.properties.otherAssets.items.enum = otherAssets.map((asset: AssetRow) => asset.id)
      schema.properties.otherAssets.items.options.enum_titles = otherAssets.map((asset: AssetRow) => asset.name)
    }
  }
  return schema
}