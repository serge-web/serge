import { Asset, ForceData } from "@serge/custom-types";
import { Column } from 'material-table'
import { Row } from "../types/props";


export const getColumns = (playerForce?: ForceData['uniqid']): Column[] => {
  if (playerForce) {
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

export const getRows = (forces: ForceData[], playerForce?: ForceData['uniqid']): Row[] => {
  const includeForce = !playerForce

  /** helper function, so we can apply to assets and child assets
   * 
   * @param asset the asset to process (including children)
   * @param forceName the name of this force
   * @returns a list of rows, representing the asset and it's children
   */
  const collateItem = (asset: Asset, forceName: string): Row[] => {
    const itemRows: Row[] = []
    const res: Row = {
      id: asset.uniqid,
      condition: asset.condition,
      name: asset.name,
      platformType: asset.platformType || '',
      status: asset.status?.state || ''
    }
    if (includeForce) {
      res.force = forceName
    }
    itemRows.push(res)

    // also sort out the comprising entries
    if (asset.comprising) {
      asset.comprising.forEach((asset2: Asset) => {
        itemRows.push(...collateItem(asset2, forceName))
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
          rows.push(...collateItem(asset, force.name))
        })
      }
    }
  })
  return rows
}