import { Asset, ForceData } from '@serge/custom-types'
import { findPerceivedAsTypes } from '@serge/helpers'
import { Column } from 'material-table'
import { Row } from '../types/props'

/**
 * Helper function to provide the columns for the table
 * @param opFor whether we're displaying perceived other platforms
 * @param playerForce the (optional) specific force to display
 * @returns
 */
export const getColumns = (opFor: boolean, playerForce?: ForceData['uniqid']): Column[] => {
  if (playerForce && !opFor) {
    return [
      { title: 'ID', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Condition', field: 'condition' },
      { title: 'Status', field: 'status' },
      { title: 'Platform-Tyle', field: 'platformType' }
    ]
  } else {
    return [
      { title: 'ID', field: 'id' },
      { title: 'Force', field: 'force' },
      { title: 'Name', field: 'name' },
      { title: 'Condition', field: 'condition' },
      { title: 'Status', field: 'status' },
      { title: 'Platform-Tyle', field: 'platformType' }
    ]
  }
}

/** helper function, so we can apply to assets and child assets
 *
 * @param opFor if we're providing a list of opFor assets
 * @param asset the asset to process (including children)
 * @param playerForce the force for the current player
 * @param assetForce the force for the asset
 * @param parentId the (optional) parent for this asset
 * @returns a list of rows, representing the asset and it's children
 */
export const collateItem = (opFor: boolean, asset: Asset, playerForce: ForceData['uniqid'], assetForce: ForceData, parentId?: string): Row[] => {
  const itemRows: Row[] = []

  if (opFor) {
    const visibleToThisForce = assetForce.visibleTo && assetForce.visibleTo.includes(playerForce)
    const perceptions = findPerceivedAsTypes(playerForce, asset.name, !!visibleToThisForce, asset.contactId, assetForce.uniqid, asset.platformTypeId || '', asset.perceptions)
    if (perceptions) {
      console.log('perceptions', asset.perceptions, perceptions)
    }
  }

  const res: Row = {
    id: asset.uniqid,
    force: assetForce.name,
    condition: asset.condition,
    name: asset.name,
    platformType: asset.platformType || '',
    status: asset.status?.state || ''
  }
  // if we're handling the child of an asset, we need to specify the parent
  if (parentId) {
    res.parentId = parentId
  }
  itemRows.push(res)

  // also sort out the comprising entries
  if (asset.comprising) {
    asset.comprising.forEach((asset2: Asset) => {
      itemRows.push(...collateItem(opFor, asset2, playerForce, assetForce, asset.uniqid))
    })
  }
  return itemRows
}

export const getRows = (opFor: boolean, forces: ForceData[], playerForce?: ForceData['uniqid']): Row[] => {
  const rows: Row[] = []
  // ok, work through the assets
  forces.forEach((force: ForceData) => {
    if (force.assets) {
      const handleThisOpFor = opFor && force.uniqid !== playerForce
      const handleThisOwnFor = !opFor && force.uniqid === playerForce
      const handleAllForces = !playerForce
      if (handleThisOpFor || handleThisOwnFor || handleAllForces) {
        force.assets.forEach((asset: Asset) => {
          rows.push(...collateItem(opFor, asset, playerForce || '', force, undefined))
        })
      }
    }
  })
  return rows
}
