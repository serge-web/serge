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
const groupCreateNewGroup = (dragging: string, target: string, forces: ForceData[]): ForceData[] => {
  // find the parent force
  const parent = forceFor(forces, dragging)

  // get the assets
  const assets = parent.assets

  if (assets) {
    // capture the assets
    const dragAsset: Asset | undefined = getAssetById(dragging, assets)

    if (dragAsset !== undefined) {
      // remove the asset being dragged
      const assetsWithoutDragging = removeAssetById(dragging, assets)

      // overwrite the assets with the new list
      parent.assets = putDraggedAssetsToTarget(target, dragAsset, assetsWithoutDragging, false)
    } else {
      throw new Error('Failed to find drag or targetAsset:' + (dragAsset || '') + ' other:' + target)
    }
  }

  return forces
}

export default groupCreateNewGroup
