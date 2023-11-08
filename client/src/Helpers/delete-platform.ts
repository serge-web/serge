import { Asset, ForceData } from 'src/custom-types'
import forceFor from './force-for'

/**
 * Delete a platform from the wargame. NOTE: it only deletes from top level of force,
 * it doesn't look inside comprising or hosting
 * @param (string) asset to delete
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const deletePlatform = (assetId: string, forces: ForceData[]): ForceData[] => {
  // find the force for the target platform
  const parent = forceFor(forces, assetId)

  const forces2 = forces.filter((force: ForceData) => {
    if (parent.uniqid !== force.uniqid) {
      return force
    } else {
      const newAssets = force.assets?.filter((asset: Asset) => asset.uniqid !== assetId)
      force.assets = newAssets
      return force
    }
  })
  return forces2
}

export default deletePlatform
