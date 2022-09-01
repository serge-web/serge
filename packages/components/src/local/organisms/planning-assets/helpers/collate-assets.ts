import { Asset, ForceData } from '@serge/custom-types'
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

export const getRows = (opFor: boolean, forces: ForceData[], playerForce?: ForceData['uniqid']): Row[] => {
  const includeForce = !playerForce
  console.log('dummy', opFor)

  /** helper function, so we can apply to assets and child assets
   *
   * @param asset the asset to process (including children)
   * @param forceName the name of this force
   * @param parentId the (optional) parent for this asset
   * @returns a list of rows, representing the asset and it's children
   */
  const collateItem = (asset: Asset, forceName: string, parentId?: string): Row[] => {
    const itemRows: Row[] = []
    const res: Row = {
      id: asset.uniqid,
      condition: asset.condition,
      name: asset.name,
      platformType: asset.platformType || '',
      status: asset.status?.state || ''
    }
    // if we're not providing data for a specific force, we have to display the force
    if (includeForce) {
      res.force = forceName
    }
    // if we're handling the child of an asset, we need to specify the parent
    if (parentId) {
      res.parentId = parentId
    }
    itemRows.push(res)

    // also sort out the comprising entries
    if (asset.comprising) {
      asset.comprising.forEach((asset2: Asset) => {
        itemRows.push(...collateItem(asset2, forceName, asset.uniqid))
      })
    }
    return itemRows
  }

  const rows: Row[] = []
  // ok, collate all assets
  forces.forEach((force: ForceData) => {
    // if a player force was provided, check it, otherwise include them all
    if (!playerForce || force.uniqid === playerForce) {
      if (force.assets) {
        force.assets.forEach((asset: Asset) => {
          rows.push(...collateItem(asset, force.name, undefined))
        })
      }
    }
  })
  return rows
}
