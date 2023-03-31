import { ForceData, MessageVisibilityChanges, Asset, Visibility } from '@serge/custom-types'
import findAsset from './find-asset'
import deepCopy from './deep-copy'

/** create/remove perceptions for assets */

export default (message: MessageVisibilityChanges, allForces: ForceData[]): ForceData[] => {
  const allForcesCopy = deepCopy(allForces)
  const asset: Asset = findAsset(allForcesCopy, message.assetId)
  message.visibility.forEach((visChange: Visibility) => {
    if (visChange.newVis) {
      asset.perceptions.push({ force: '', typeId: '', by: visChange.by })
    } else {
      // ok, we're removing something
      const index = asset.perceptions.findIndex(({ by }) => by === visChange.by)
      if (index === -1) {
        console.warn('possible issue: we\'re trying to remove a perception, but there aren\'t any')
      } else {
        asset.perceptions.splice(index, 1)
      }
    }
  })
  if (message.condition && message.condition !== asset.condition) {
    asset.condition = message.condition
  }
  return allForcesCopy
}
