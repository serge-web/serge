import { Asset } from 'src/custom-types'

const removeAssetById = (uniqid: string, assets: Asset[]): Asset[] => {
  return assets.filter((assetItem) => {
    if (assetItem.uniqid === uniqid) {
      return false
    } else {
      const { hosting, comprising } = assetItem
      if (Array.isArray(hosting) && hosting.length > 0) {
        assetItem.hosting = removeAssetById(uniqid, hosting)
      }
      if (Array.isArray(comprising) && comprising.length > 0) {
        assetItem.comprising = removeAssetById(uniqid, comprising)
      }
    }

    return true
  })
}

export default removeAssetById
