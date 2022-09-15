import { UNKNOWN_TYPE } from '@serge/config'
import { Asset, ForceData, Role } from '@serge/custom-types'
import { findPerceivedAsTypes, ForceStyle, PlatformStyle } from '@serge/helpers'
import { Column } from 'material-table'
import { Row } from '../types/props'
import AssetIcon from '../../../asset-icon'
import React from 'react'
import styles from '../styles.module.scss'

type SummaryData = {
  roles: {}
  statuses: string[]
  conditions: string[]
  forces: string[]
}

export const getColumnSummary = (forces: ForceData[], playerForce: ForceData['uniqid'], opFor: boolean): SummaryData => {
  const roleDict: {} = {}
  const statuses: string[] = []
  const conditions: string[] = []
  const forcesNames: string[] = []
  forces.forEach((force: ForceData) => {
    if (opFor) {
      const visibleToThisForce = (force.visibleTo && force.visibleTo.includes(playerForce)) || force.uniqid === playerForce
      force.assets && force.assets.forEach((asset: Asset) => {
        const perception = findPerceivedAsTypes(playerForce, asset.name, !!visibleToThisForce, asset.contactId, force.uniqid, asset.platformTypeId || '', asset.perceptions)
        console.log('asset 0', force.uniqid, playerForce, visibleToThisForce, asset.perceptions, perception)
        if (perception) {
          // we can perceive this force, capture the name
          if (!forcesNames.includes(force.name)) {
            forcesNames.push(force.name)
          }
          if (perception.condition) {
            const condition = perception.condition
            if (!conditions.includes(condition)) {
              conditions.push(condition)
            }
          }  
        }
      })
    } else {
      // we store roles for own force
      if ((force.uniqid === playerForce)) {
        force.roles.forEach((role: Role) => { roleDict[role.roleId] = role.name })
        force.assets && force.assets.forEach((asset: Asset) => {
          console.log('asset 2', opFor, asset.name, force.name)
          if (asset.status) {
            const state = asset.status.state
            if (!statuses.includes(state)) {
              statuses.push(state)
            }
          }
          if (asset.condition) {
            if (!conditions.includes(asset.condition)) {
              conditions.push(asset.condition)
            }
          }
        })
      }
    }
  })
  const res: SummaryData = {
    roles: roleDict,
    conditions: conditions,
    statuses: statuses,
    forces: forcesNames
  }
  return res
}

/**
 * Helper function to provide the columns for the table
 * @param opFor whether we're displaying perceived other platforms
 * @param playerForce the force of the current player
 * @returns
 */
export const getColumns = (opFor: boolean, forces: ForceData[], playerForce: ForceData['uniqid']): Column[] => {
  const summaryData = getColumnSummary(forces, playerForce, opFor)
  const renderIcon = (row: Row): React.ReactElement => {
    if (!row.icon) return <></>
    const icons = row.icon.split(',')
    if (icons.length === 3) {
      return <span><AssetIcon className={styles['cell-icon']} color={icons[1]} imageSrc={icons[0]} />{icons[2]}</span>
    }
    return <span><AssetIcon className={styles['cell-icon']} imageSrc={icons[0]} />{icons[1]}</span>
  }
  const renderOwner = (row: Row): React.ReactElement => {
    const match = row.owner && summaryData.roles[row.owner]
    if (match) {
      return <>{match}</>
    } else {
      return <></>
    }
  }

  const arrToDict = (arr: string[]):{} | undefined => {
    if (arr && arr.length > 0) {
      const res = {}
      arr.forEach((item: string) => {
        res[item] = item
      })
      return res  
    } else {
      return undefined
    }
  }
  
  const columns: Column[] = [
    { title: 'Icon', field: 'icon', render: renderIcon },
    { title: 'Force', field: 'force', lookup: arrToDict(summaryData.forces) },
    { title: 'Condition', field: 'condition', lookup: arrToDict(summaryData.conditions) },
    { title: 'Status', field: 'status', lookup: arrToDict(summaryData.statuses) },
    { title: 'Owner', field: 'owner', render: renderOwner, lookup: summaryData.roles }
  ]

  // don't need to show Force if we're just showing
  // our own force
  if (playerForce && !opFor) {
    columns.splice(1, 1)
  }

  // don't show owner or state for OpFor assets
  if (opFor) {
    columns.splice(3, 2)
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
    return (platformType === UNKNOWN_TYPE) ? 'unknown.svg' : (pType && pType.icon) || ''
  }
  const colorFor = (forceId: string): string => {
    const colorMatch = forceColors.find((value: ForceStyle) => value.forceId === forceId)
    return (forceId === UNKNOWN_TYPE) ? '#999' : (colorMatch && colorMatch.color) || ''
  }

  if (opFor) {
    // all assets of this force may be visible to player, or player
    // may be from umpire force (so no player force shown)
    const visibleToThisForce = (assetForce.visibleTo && assetForce.visibleTo.includes(playerForce)) || !playerForce
    const perception = findPerceivedAsTypes(playerForce, asset.name, !!visibleToThisForce, asset.contactId, assetForce.uniqid, asset.platformTypeId || '', asset.perceptions)
    if (perception) {
      const forceStyle = forceColors.find((value: ForceStyle) => value.forceId === perception.forceId)
      const res: Row = {
        id: asset.uniqid,
        icon: iconFor(perception.typeId) + ',' + colorFor(perception.forceId) + ',' + perception.name,
        force: forceStyle ? forceStyle.force : 'unknown',
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
      icon: iconFor(asset.platformTypeId) + ',' + assetForce.color + ',' + asset.name,
      force: assetForce.name,
      condition: asset.condition,
      name: asset.name,
      platformType: asset.platformTypeId || '',
      status: asset.status?.state || '',
      owner: asset.owner ? asset.owner : ''
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
