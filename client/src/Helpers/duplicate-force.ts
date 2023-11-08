import { Asset, ForceData, Role } from 'src/custom-types'
import { generateAssetContactId } from './create-asset-based-on-platform-type'
import deepCopy from './deep-copy'
import uniqid from 'uniqid'

const updateAssetId = (asset: Asset): Asset => {
  const uniqId = uniqid.time()
  const uniqIdVal = `a${uniqId}`
  const newAsset = {
    ...asset,
    name: asset.name + '-' + uniqId,
    contactId: generateAssetContactId(uniqIdVal),
    uniqid: uniqIdVal
  }
  // now hosted platforms
  if (newAsset.hosting && newAsset.hosting.length) {
    newAsset.hosting = newAsset.hosting.map((a2: Asset): Asset => {
      return updateAssetId(a2)
    })
  }
  // now comprising platforms
  if (newAsset.comprising && newAsset.comprising.length) {
    const newcomprise = newAsset.comprising.map((a2: Asset): Asset => {
      return updateAssetId(a2)
    })
    newAsset.comprising = newcomprise
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
        roleId: `r${uniqId}`
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

  return duplicateForce
}
export default duplicateThisForce
