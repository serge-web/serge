import { Asset, ForceData } from '@serge/custom-types'
import forceFor from './force-for'

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
    const dragAsset: Asset | undefined = assets.find((item: Asset) => item.uniqid === dragging)
    const targetAsset: Asset | undefined = assets.find((item: Asset) => item.uniqid === target)

    if (dragAsset && targetAsset) {
      // remove the assets from the force
      const assets2: Asset[] = assets.filter((item: Asset) => item.uniqid !== dragging)

      // put the dragged item onto the host
      if (!targetAsset.hosting) {
        targetAsset.hosting = []
      }
      targetAsset.hosting.push(dragAsset)

      // overwrite the assets with the new list
      parent.assets = assets2
    }
  }
  return forces
}

export default groupHostPlatform
