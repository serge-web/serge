import { ForceData } from '@serge/custom-types'
import { cloneDeep } from 'lodash'
/**
 * Create a new Task Group using the provided assets
 * @param (string) dragging the asset being dragged
 * @param (string) target the asset that received the dragged asset
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const groupCreateNewGroup = (dragging: string, target: string, forces: ForceData[]): ForceData[] => {
  const newForces: ForceData[] = cloneDeep(forces)

  // find the parent force
  const parent = forceFor(dragging, newForces)

  // get the assets
  const assets = parent.assets

  if (assets) {
    // capture the assets
    const dragAsset = assets.find((item: any) => item.uniqid === dragging)
    const targetAsset = assets.find((item: any) => item.uniqid === target)

    // remove the assets
    const assets2 = assets.filter((item: any) => item.uniqid !== dragging)
    const assets3 = assets2.filter((item: any) => item.uniqid !== target)

    // create the new task group
    const contactId: string = 'C' + Math.floor(Math.random() * 999)
    const assetId: string = 'a' + Math.floor(Math.random() * 1000000)
    const groupId: string = 'CTF ' + (300 + Math.floor(Math.random() * 99))
    const newGroup: any = {
      condition: 'Full capability',
      contactId: contactId,
      comprising: [dragAsset, targetAsset],
      name: groupId,
      perceptions: [],
      platformType: 'task-group',
      position: targetAsset && targetAsset.position,
      status: {
        speedKts: 20,
        state: 'Transiting'
      },
      uniqid: assetId
    }
    assets3.push(newGroup)

    // overwrite the assets with the new list
    parent.assets = assets3
  }

  return newForces
}

/** find the force counter for this asset id */
const forceFor = (item: string, forces: ForceData[]): ForceData => {
  const match: ForceData | undefined = forces.find((force: any) => {
    const assets: any = force.assets
    if (assets) {
      const asset = assets.find((asset: any) => asset.uniqid === item)
      if (asset) return force
    } else {
      return false
    }
  })
  if (match !== undefined) return match
  throw new Error('Failed to find force for asset:' + item)
}

export default groupCreateNewGroup
