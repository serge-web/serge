import { ForceData, MessageVisibilityChanges, Asset, Visibility } from '@serge/custom-types'
import findAsset from './find-asset'

/** create/remove perceptions for assets */

export default (message: MessageVisibilityChanges, allForces: ForceData[]): ForceData[] => {
  message.visibility.forEach((visChange: Visibility) => {
    const asset: Asset = findAsset(allForces, visChange.assetId)
    if (visChange.newVis) {
      asset.perceptions.push({ force: '', type: '', by: visChange.by })
    } else {
      // ok, we're removing something
      const index = asset.perceptions.findIndex(({ by }) => by == visChange.by)
      if (index === -1) {
        console.warn('possible issue: we\'re trying to remove a perception, but there aren\'t any')
      } else {
        asset.perceptions.splice(index, 1)
      }
    }
    asset.condition = message.condition !== asset.condition ? message.condition : null
  })
  return allForces
}
