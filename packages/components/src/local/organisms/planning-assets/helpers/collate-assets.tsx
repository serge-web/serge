import { UNKNOWN_TYPE } from '@serge/config'
import { Asset, ForceData } from '@serge/custom-types'
import { findPerceivedAsTypes, ForceStyle, PlatformStyle } from '@serge/helpers'
import { Column } from 'material-table'
import { Row } from '../types/props'
import AssetIcon from '../../../asset-icon'
import React from 'react'
import styles from '../styles.module.scss'

/**
 * Helper function to provide the columns for the table
 * @param opFor whether we're displaying perceived other platforms
 * @param playerForce the (optional) specific force to display
 * @returns
 */
export const getColumns = (opFor: boolean, playerForce?: ForceData['uniqid']): Column[] => {
  const render = (row: Row): React.ReactElement => {
    if (!row.icon) return <></>

    const icons = row.icon.split(',')
    if (icons.length === 2) {
      return <AssetIcon className={styles['cell-icon']} color={icons[1]} imageSrc={icons[0]} />
    }
    return <AssetIcon className={styles['cell-icon']} imageSrc={icons[0]} />
  }

  const columns: Column[] = [
    { title: 'ID', field: 'id' },
    { title: 'Icon', field: 'icon', render },
    { title: 'Force', field: 'force' },
    { title: 'Name', field: 'name' },
    { title: 'Condition', field: 'condition' },
    { title: 'Status', field: 'status' },
    { title: 'Platform-Tyle', field: 'platformType' }
  ]

  if (playerForce && !opFor) {
    columns.splice(2, 1)
  }

  return columns
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
export const collateItem = (opFor: boolean, asset: Asset, playerForce: ForceData['uniqid'], assetForce: ForceData,
  forceColors: ForceStyle[], platformIcons: PlatformStyle[], parentId?: string): Row[] => {
  const itemRows: Row[] = []

  const iconFor = (platformType: string): string => {
    const pType = platformIcons.find((value: PlatformStyle) => value.uniqid === platformType)
    return (platformType === UNKNOWN_TYPE) ? 'unknown.svg' : (pType && pType!.icon) || ''
  }
  const colorFor = (forceId: string): string => {
    const colorMatch = forceColors.find((value: ForceStyle) => value.forceId === forceId)
    return (forceId === UNKNOWN_TYPE) ? '#999' : (colorMatch && colorMatch!.color) || ''
  }

  if (opFor) {
    // all assets of this force may be visible to player, or player
    // may be from umpire force (so no player force shown)
    const visibleToThisForce = (assetForce.visibleTo && assetForce.visibleTo.includes(playerForce)) || !playerForce
    const perception = findPerceivedAsTypes(playerForce, asset.name, !!visibleToThisForce, asset.contactId, assetForce.uniqid, asset.platformTypeId || '', asset.perceptions)
    if (perception) {
      const res: Row = {
        id: asset.uniqid,
        icon: iconFor(perception.typeId) + ',' + colorFor(perception.forceId),
        force: perception.forceId,
        condition: 'unknown',
        name: perception.name,
        platformType: perception.typeId,
        status: asset.status?.state || ''
      }
      itemRows.push(res)
    }
  } else {
    const res: Row = {
      id: asset.uniqid,
      icon: iconFor(asset.platformTypeId) + ',' + assetForce.color,
      force: assetForce.name,
      condition: asset.condition,
      name: asset.name,
      platformType: asset.platformTypeId || '',
      status: asset.status?.state || ''
    }
    // if we're handling the child of an asset, we need to specify the parent
    if (parentId) {
      res.parentId = parentId
    }
    itemRows.push(res)
  }

  // also sort out the comprising entries
  if (asset.comprising) {
    asset.comprising.forEach((asset2: Asset) => {
      itemRows.push(...collateItem(opFor, asset2, playerForce, assetForce, forceColors, platformIcons, asset.uniqid))
    })
  }
  return itemRows
}

export const getRows = (opFor: boolean, forces: ForceData[], forceColors: ForceStyle[], platformIcons: PlatformStyle[], playerForce?: ForceData['uniqid']): Row[] => {
  const rows: Row[] = []

  // ok, work through the assets
  forces.forEach((force: ForceData) => {
    if (force.assets) {
      const handleThisOpFor = opFor && force.uniqid !== playerForce
      const handleThisOwnFor = !opFor && force.uniqid === playerForce
      const handleAllForces = !playerForce
      if (handleThisOpFor || handleThisOwnFor || handleAllForces) {
        force.assets.forEach((asset: Asset) => {
          rows.push(...collateItem(opFor, asset, playerForce || '', force, forceColors, platformIcons, undefined))
        })
      }
    }
  })
  return rows
}
