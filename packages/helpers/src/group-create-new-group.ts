import { Asset, ForceData } from '@serge/custom-types'
import forceFor from './force-for'

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
    const dragAsset: Asset | undefined = assets.find((item: Asset) => item.uniqid === dragging)
    const targetAsset: Asset | undefined = assets.find((item: Asset) => item.uniqid === target)

    if (dragAsset !== undefined && targetAsset !== undefined) {
      // remove the asset being dragged
      const assetsWithoutDragging = assets.filter((item: Asset) => item.uniqid !== dragging)

      if (targetAsset.platformType === 'task-group') {
        // add this platform to the task group
        if (targetAsset.comprising) {
          targetAsset.comprising.push(dragAsset)
        } else {
          targetAsset.comprising = [dragAsset]
        }
        // overwrite the assets with the new list
        parent.assets = assetsWithoutDragging
      } else {
        // since we're creating a task group, we have to remove the target asset
        const assetsWithoutTarget = assetsWithoutDragging.filter((item: Asset) => item.uniqid !== target)

        // create a new task group
        // create the new task group
        const contactId: string = 'C' + Math.floor(Math.random() * 999)
        const assetId: string = 'a' + Math.floor(Math.random() * 1000000)
        const groupId: string = 'CTF ' + (300 + Math.floor(Math.random() * 99))
        const newGroup: Asset = {
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
        assetsWithoutTarget.push(newGroup)
        // overwrite the assets with the new list
        parent.assets = assetsWithoutTarget
      }
    } else {
      throw new Error('Failed to find drag or targetAsset:' + dragAsset + ' other:' + targetAsset)
    }
  }

  return forces
}

export default groupCreateNewGroup
