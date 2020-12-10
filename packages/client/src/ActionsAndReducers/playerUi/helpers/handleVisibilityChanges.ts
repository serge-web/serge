import { ForceData, Vis, Asset } from '@serge/custom-types'

import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
// TODO: Check why the data is wrapped in an object. Tmp interface for now
interface Action {
  payload: Vis[]
}
export default (action: Action, allForces: ForceData[]): ForceData[] => {
  action.payload.forEach(visChange => {
    const asset: Asset | undefined = findAsset(allForces, visChange.assetId)
    if (asset !== undefined) {
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
    } else {
      console.warn('failed to find asset while handling vis id', visChange.assetId)
    }
  })
  return allForces
}
