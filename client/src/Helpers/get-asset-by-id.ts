import { Asset } from 'src/custom-types'

const getAssetById = (uniqid: string, assets: Asset[]): Asset | undefined => {
  let asset: Asset | undefined

  for (const assetItem of assets) {
    if (assetItem.uniqid === uniqid) {
      asset = { ...assetItem }
      break
    } else {
      if (Array.isArray(assetItem.hosting) && assetItem.hosting.length > 0) {
        asset = getAssetById(uniqid, assetItem.hosting)
      }
      if (!asset && Array.isArray(assetItem.comprising) && assetItem.comprising.length > 0) {
        asset = getAssetById(uniqid, assetItem.comprising)
      }
      if (asset) break
    }
  }

  return asset
}

export default getAssetById
