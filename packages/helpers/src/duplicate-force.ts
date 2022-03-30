import { Asset, ForceData, Role } from '@serge/custom-types'
import { generateAssetContactId } from './create-asset-based-on-platform-type'
import deepCopy from './deep-copy'
import uniqid from 'uniqid'

const updateAssetId = (asset: Asset): Asset => {
  const uniqId = uniqid.time()
  const uniqIdVal = `a${uniqid}`
  const newAsset = {
    ...asset,
    name: asset.name + '-' + uniqId,
    contactId: generateAssetContactId(uniqIdVal),
    uniqid: uniqIdVal
  }
  return newAsset
}

const duplicateThisForce = (force: ForceData): ForceData => {
  const cloneForce: ForceData = deepCopy(force)

  const uniq = uniqid.time()

  // create new force, with new name and id
  const duplicateForce: ForceData = {
    ...cloneForce,
    name: cloneForce.name + `-${uniq}`,
    uniqid: `f${uniq}`
  }

  // give the roles a new id
  if (duplicateForce.roles.length > 0) {
    duplicateForce.roles = duplicateForce.roles.map((role: Role): Role => {
      const uniqId = uniqid.time()
      return {
        ...role,
        name: role.name + '-' + uniqId,
        roleId: `r${uniqid}`
      }
    })
  }

  // give the assets a new id
  if (duplicateForce.assets && duplicateForce.assets.length) {
    duplicateForce.assets = duplicateForce.assets.map((asset: Asset): Asset => {
      const newAsset = updateAssetId(asset)
      // handle hosted assets
      return newAsset
    })
  }

  return cloneForce
}
export default duplicateThisForce
