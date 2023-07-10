import { Asset, ForceData } from 'src/custom-types'
import { cloneDeep } from 'lodash'

/**
 * Move the specified child asset to the root level for that force
 * @param (string) uniqid the asset to move to root
 * @param (any) forces list of forces
 * @returns modified list of forces
 */

const groupMoveToRoot = (uniqid: string, forces: ForceData[]): ForceData[] => {
  enum listType {
    HOSTING,
    COMPRISING
  }

  // find the force
  let topLevelAsset: Asset | undefined
  let parentForce: ForceData | undefined
  let parentListType: listType | undefined
  let parentAsset: Asset | undefined
  let theAsset: Asset | undefined
  forces.forEach((force: ForceData) => {
    if (force.assets && !parentForce) {
      force.assets.forEach((asset: Asset) => {
        topLevelAsset = asset
        // only carry on hunting if we haven't found it
        if (!parentForce) {
          const hosted = findInList(uniqid, asset.hosting)
          const contains = findInList(uniqid, asset.comprising)
          if (hosted || contains) {
            parentAsset = asset
            parentListType = hosted ? listType.HOSTING : listType.COMPRISING
            parentForce = force
            theAsset = hosted || contains
          } else {
            // we have to search a layer deeper
            if (asset.hosting) {
              asset.hosting.forEach((asset2: Asset) => {
                const hosted = findInList(uniqid, asset2.hosting)
                const contains = findInList(uniqid, asset2.comprising)
                if (hosted || contains) {
                  parentAsset = asset2
                  parentListType = hosted ? listType.HOSTING : listType.COMPRISING
                  parentForce = force
                  theAsset = hosted || contains
                }
              })
            }
            if (asset.comprising) {
              asset.comprising.forEach((asset2: Asset) => {
                const hosted = findInList(uniqid, asset2.hosting)
                const contains = findInList(uniqid, asset2.comprising)
                if (hosted || contains) {
                  parentAsset = asset2
                  parentListType = hosted ? listType.HOSTING : listType.COMPRISING
                  parentForce = force
                  theAsset = hosted || contains
                }
              })
            }
          }
        }
      })
    }
  })

  // did it work?
  if (parentForce && parentForce.assets && topLevelAsset && parentAsset !== undefined) {
    // remove from the parent
    switch (parentListType) {
      case listType.HOSTING : {
        parentAsset.hosting = parentAsset.hosting && parentAsset.hosting.filter((asset: Asset) => asset.uniqid !== uniqid)
        break
      }
      case listType.COMPRISING : {
        parentAsset.comprising = parentAsset.comprising && parentAsset.comprising.filter((asset: Asset) => asset.uniqid !== uniqid)
        break
      }
    }

    // put the asset in the same cell as the parent. We may need to use
    // the top level one, if this is actually in a lower one
    const position = parentAsset.position ? parentAsset.position : topLevelAsset.position
    if (theAsset !== undefined) {
      theAsset.position = cloneDeep(position)

      // add at the top level
      parentForce.assets.push(theAsset)
    }
    return forces
  }
  throw new Error('Failed to find elements being dragged')
}

const findInList = (uniqid: string, items: Asset[] | undefined): Asset | undefined => {
  if (items && items.length) {
    return items.find((item: Asset) => item.uniqid === uniqid)
  } else {
    return undefined
  }
}

export default groupMoveToRoot
