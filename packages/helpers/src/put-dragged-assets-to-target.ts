import { Asset } from '@serge/custom-types'
import { TASK_GROUP } from '@serge/config'

const putDraggedAssetsToTarget = (targetId: string, asset: Asset, assets: Asset[], isHosting = true): Asset[] => {
  return assets.map((assetItem) => {
    if (assetItem.uniqid === targetId) {
      if (isHosting) {
        if (!assetItem.hosting) assetItem.hosting = []
        assetItem.hosting.push(asset)
      } else {
        if (assetItem.platformType === TASK_GROUP) {
          if (!assetItem.comprising) assetItem.comprising = []
          assetItem.comprising.push(asset)
        } else {
          const contactId: string = 'C' + Math.floor(Math.random() * 999)
          const assetId: string = 'a' + Math.floor(Math.random() * 1000000)
          const groupId: string = 'CTF ' + (300 + Math.floor(Math.random() * 99))
          const newGroup: Asset = {
            condition: 'Full capability',
            contactId: contactId,
            comprising: [asset, assetItem],
            name: groupId,
            perceptions: [],
            platformType: TASK_GROUP,
            position: assetItem.position,
            status: {
              speedKts: 20,
              state: 'Transiting'
            },
            uniqid: assetId
          }
          return newGroup
        }
      }
    } else {
      const { hosting, comprising } = assetItem
      if (Array.isArray(hosting) && hosting.length > 0) {
        assetItem.hosting = putDraggedAssetsToTarget(targetId, asset, hosting, isHosting)
      }
      if (Array.isArray(comprising) && comprising.length > 0) {
        assetItem.comprising = putDraggedAssetsToTarget(targetId, asset, comprising, isHosting)
      }
    }

    return assetItem
  })
}

export default putDraggedAssetsToTarget
