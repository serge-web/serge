import { Asset, ForceData } from '@serge/custom-types'
import forceFor from './force-for'
import getAssetById from './get-asset-by-id'
import removeAssetById from './remove-asset-by-id'
import putDraggedAssetsToTarget from './put-dragged-assets-to-target'

/**
 * Create a new Task Group using the provided assets
 * @param (string) dragging the asset being dragged
 * @param (string) target the asset that received the dragged asset
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const groupHostPlatform = (dragging: string, target: string, forces: ForceData[]): ForceData[] => {
  // find the force for the target platform
  const parent = forceFor(forces, target)

  // get the assets
  const assets = parent.assets

  if (assets) {
    // capture the assets
    const dragAsset: Asset | undefined = getAssetById(dragging, assets)
    if (dragAsset) {
      // remove the assets from the force
      const assets2: Asset[] = removeAssetById(dragging, assets)

      // overwrite the assets with the new list
      parent.assets = putDraggedAssetsToTarget(target, dragAsset, assets2)
    }
  }
  return forces
}

export default groupHostPlatform
