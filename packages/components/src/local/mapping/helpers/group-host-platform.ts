import { Asset, ForceData } from '@serge/custom-types'
import { cloneDeep } from 'lodash'
/**
 * Create a new Task Group using the provided assets
 * @param (string) dragging the asset being dragged
 * @param (string) target the asset that received the dragged asset
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const groupHostPlatform = (dragging: string, target: string, forces: ForceData[]): ForceData[] => {
  const newForces: ForceData[] = cloneDeep(forces)

  // find the force for the target platform
  const parent = forceFor(target, newForces)

  // get the assets
  const assets = parent.assets

  // capture the assets
  const dragAsset = assets.find((item: any) => item.uniqid === dragging)
  const targetAsset = assets.find((item: any) => item.uniqid === target)

  // remove the assets from the force
  const assets2 = assets.filter((item: any) => item.uniqid !== dragging)

  // put the dragged item onto the host
  if (!targetAsset.hosting) {
    targetAsset.hosting = []
  }
  targetAsset.hosting.push(dragAsset)

  // overwrite the assets with the new list
  parent.assets = assets2
  return newForces
}

/** find the force counter for this asset id */
const forceFor = (item: string, forces: ForceData[]): any => {
  const match: ForceData | undefined = forces.find((force: ForceData) => {
    const assets: Asset[] | undefined = force.assets
    if (assets) {
      const asset = assets.find((asset: Asset) => asset.uniqid === item)
      return asset ? force : undefined
    } else {
      return undefined
    }
  })
  return match
}

export default groupHostPlatform
