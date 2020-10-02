import { cloneDeep } from 'lodash'
/**
 * Move the specified child asset to the root level for that force
 * @param (string) uniqid the asset to move to root
 * @param (any) forces list of forces
 * @returns modified list of forces
 */
const groupMoveToRoot = (uniqid: string, forces: any): any => {
  const newForces: any = cloneDeep(forces)
  // find the force
  var parentForce: any
  var parentListType: listType | undefined
  var parentAsset: any
  var theAsset: any
  enum listType  {
    HOSTING,
    COMPRISING
  }
  newForces.forEach((force: any) => {
    if(force.assets && !parentForce) {
      force.assets.forEach((asset:any) => {
        // only carry on hunting if we haven't found it
        if(!parentForce) {
          const hosted = findInList(uniqid, asset.hosting)    
          const contains = findInList(uniqid, asset.comprising)
          if(hosted || contains) {
            parentAsset = asset
            parentListType = hosted ? listType.HOSTING : listType.COMPRISING
            parentForce = force
            theAsset = hosted || contains
          } else {
            // we have to search a layer deeper
            if(asset.hosting) {
              asset.hosting.forEach((asset2: any) => {
                const hosted = findInList(uniqid, asset2.hosting)    
                const contains = findInList(uniqid, asset2.comprising)
                if(hosted || contains) {
                  parentAsset = asset2
                  parentListType = hosted ? listType.HOSTING : listType.COMPRISING
                  parentForce = force
                  theAsset = hosted || contains
                }      
              })
            }
            if(asset.comprising) {
              asset.comprising.forEach((asset2: any) => {
                const hosted = findInList(uniqid, asset2.hosting)    
                const contains = findInList(uniqid, asset2.comprising)
                if(hosted || contains) {
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
  if(!parentForce) {
    return undefined
  } else {
    // remove from the parent
    switch(parentListType) {
      case listType.HOSTING : {
        parentAsset.hosting = parentAsset.hosting.filter((asset: any) => asset.uniqid !== uniqid)
        break
      }
      case listType.COMPRISING : {
        parentAsset.comprising = parentAsset.comprising.filter((asset: any) => asset.uniqid !== uniqid)
        break
      }
    }

    // add at the top level
    parentForce.assets.push(theAsset)

    return newForces

  }
}

const findInList = (uniqid: string, items: any): any => {
  return items && items.length && items.find((item: any) => item.uniqid === uniqid)
}


export default groupMoveToRoot
