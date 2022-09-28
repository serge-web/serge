import { UNKNOWN_TYPE } from '@serge/config'
import { Asset, ForceData, MessagePlanning, PerceivedTypes, PlatformTypeData, Role } from '@serge/custom-types'
import { findPerceivedAsTypes, ForceStyle, PlatformStyle } from '@serge/helpers'
import { latLng } from 'leaflet'
import { Column } from 'material-table'
import React from 'react'
import AssetIcon from '../../../asset-icon'
import styles from '../styles.module.scss'
import { AssetRow } from '../types/props'

type SummaryData = {
  roles: Record<Role['roleId'], Role['name']>
  platformTypes: Record<PlatformStyle['uniqid'], PlatformStyle['name']>
  statuses: string[]
  conditions: string[]
  forces: string[]
}

const storePlatformType = (pType: PlatformTypeData['uniqid'], platformStyles: PlatformStyle[],
  platformTypesDict: Record<PlatformStyle['uniqid'], PlatformStyle['name']>): void => {
  if (!platformTypesDict[pType] && platformStyles.length) {
    const thisP = platformStyles.find((plat: PlatformStyle) => plat.uniqid === pType)
    if (thisP) {
      platformTypesDict[pType] = thisP.name
    } else {
      if (pType === UNKNOWN_TYPE) {
        platformTypesDict[UNKNOWN_TYPE] = UNKNOWN_TYPE
      } else {
        console.error('Platform type not found', pType, UNKNOWN_TYPE, platformStyles)
      }
    }
  }
}

export const getOwnAssets = (forces: ForceData[], forceColors: ForceStyle[], platformIcons: PlatformStyle[], playerForce: ForceData): AssetRow[] => {
  const rows: AssetRow[] = []
  forces.forEach((force: ForceData) => {
    force.assets && force.assets.forEach((asset: Asset) => {
      const assets = collateItem(false, asset, playerForce, force, forceColors, platformIcons, [], undefined)
      rows.push(...assets)
    }
    )
  })
  return rows
}

export const getOppAssets = (forces: ForceData[], forceColors: ForceStyle[], platformIcons: PlatformStyle[], playerForce: ForceData): AssetRow[] => {
  const rows: AssetRow[] = []
  forces.forEach((force: ForceData) => {
    force.assets && force.assets.forEach((asset: Asset) => {
      const assets = collateItem(true, asset, playerForce, force, forceColors, platformIcons, [], undefined)
      rows.push(...assets)
    }
    )
  })
  return rows
}

export const getColumnSummary = (forces: ForceData[], playerForce: ForceData['uniqid'],
  opFor: boolean, platformStyles: PlatformStyle[]): SummaryData => {
  const roleDict: Record<Role['roleId'], Role['name']> = {}
  const platformTypesDict: Record<PlatformStyle['uniqid'], PlatformStyle['name']> = {}
  const statuses: string[] = []
  const conditions: string[] = []
  const forcesNames: string[] = []
  const isUmpireForce = forces.find((force: ForceData) => force.uniqid === playerForce && force.umpire)
  forces.forEach((force: ForceData) => {
    if (opFor) {
      const visibleToThisForce = (force.visibleTo && force.visibleTo.includes(playerForce)) || force.uniqid === playerForce
      // only produce for other forces
      if (force.uniqid !== playerForce) {
        force.assets && force.assets.forEach((asset: Asset) => {
          const perception: PerceivedTypes | null = findPerceivedAsTypes(playerForce, asset.name, !!visibleToThisForce, asset.contactId, force.uniqid, asset.platformTypeId || '', asset.perceptions)
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
            if (perception.typeId) {
              const pType = perception.typeId
              storePlatformType(pType, platformStyles, platformTypesDict)
            }
          }
        })
      }
    } else {
      // we store roles for own force, or all for an umpire
      if (isUmpireForce || (force.uniqid === playerForce)) {
        force.roles.forEach((role: Role) => { roleDict[role.roleId] = role.name })
        // capture all force names for umpire
        if (isUmpireForce && !forcesNames.includes(force.name)) {
          forcesNames.push(force.name)
        }

        force.assets && force.assets.forEach((asset: Asset) => {
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
          storePlatformType(asset.platformTypeId, platformStyles, platformTypesDict)
        })
      }
    }
  })
  const res: SummaryData = {
    roles: roleDict,
    platformTypes: platformTypesDict,
    conditions: conditions,
    statuses: statuses,
    forces: forcesNames
  }
  return res
}

const renderIcon = (row: AssetRow): React.ReactElement => {
  if (!row.icon) return <></>
  const icons = row.icon.split(',')
  if (icons.length === 3) {
    return <span><AssetIcon className={styles['cell-icon']} color={icons[1]} imageSrc={icons[0]} />{icons[2]}</span>
  }
  return <span><AssetIcon className={styles['cell-icon']} imageSrc={icons[0]} />{icons[1]}</span>
}

export const arrToDict = (arr: string[]): {} | undefined => {
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

const renderPlatformType = (row: AssetRow, platformTypes: {}): React.ReactElement => {
  const match = row.platformType && platformTypes[row.platformType]
  if (match) {
    return <>{match}</>
  } else {
    return <></>
  }
}

export const renderOwner = (row: AssetRow, roles: {}): React.ReactElement => {
  const match = row.owner && roles[row.owner]
  if (match) {
    return <>{match}</>
  } else {
    return <></>
  }
}

export const collateActivities = (rows: MessagePlanning[]): string[] => {
  const activities: string[] = []
  rows.forEach((row: MessagePlanning) => {
    const activity = row.message.ActivityType
    if (!activities.includes(activity)) {
      activities.push(activity)
    }
  })
  return activities
}

/**
 * Helper function to provide the columns for the table
 * @param opFor whether we're displaying perceived other platforms
 * @param playerForce the force of the current player
 * @returns
 */
export const getColumns = (opFor: boolean, forces: ForceData[], playerForce: ForceData['uniqid'], platformStyles: PlatformStyle[]): Column[] => {
  const summaryData = getColumnSummary(forces, playerForce, opFor, platformStyles)

  const columns: Column[] = [
    { title: 'Icon', field: 'icon', render: renderIcon },
    { title: 'Force', field: 'force', lookup: arrToDict(summaryData.forces) },
    { title: 'Type', field: 'platformType', render: (row): React.ReactElement => renderPlatformType(row, summaryData.platformTypes), lookup: summaryData.platformTypes },
    { title: 'Condition', field: 'condition', lookup: arrToDict(summaryData.conditions) },
    { title: 'Status', field: 'status', lookup: arrToDict(summaryData.statuses) },
    { title: 'Owner', field: 'owner', render: (row): React.ReactElement => renderOwner(row, summaryData.roles), lookup: summaryData.roles }
  ]

  // don't need to show Force if we're just showing
  // our own force
  if (playerForce && !opFor) {
    columns.splice(1, 1)
  }

  // don't show owner or state for OpFor assets
  if (opFor) {
    columns.splice(4, 2)
  }

  return columns
}

/** helper function, so we can apply to assets and child assets
 *
 * @param opFor if we're providing a list of opFor assets
 * @param asset the asset to process (including children)
 * @param playerForce the force for the current player (or undefined to see all assets)
 * @param assetForce the force for the asset
 * @param parentId the (optional) parent for this asset
 * @returns a list of rows, representing the asset and it's children
 */
export const collateItem = (opFor: boolean, asset: Asset, playerForce: ForceData, assetForce: ForceData,
  forceColors: ForceStyle[], platformIcons: PlatformStyle[], selectedAssets: string[], parentId?: string): AssetRow[] => {
  const itemRows: AssetRow[] = []

  const iconFor = (platformType: string): string => {
    const pType = platformIcons.find((value: PlatformStyle) => value.uniqid === platformType)
    return (platformType === UNKNOWN_TYPE) ? 'unknown.svg' : (pType && pType.icon) || ''
  }
  const colorFor = (forceId: string): string => {
    const colorMatch = forceColors.find((value: ForceStyle) => value.forceId === forceId)
    return (forceId === UNKNOWN_TYPE) ? '#999' : (colorMatch && colorMatch.color) || ''
  }

  const isUmpire = playerForce.umpire

  if (opFor && !isUmpire) {
    // all assets of this force may be visible to player, or player
    // may be from umpire force (so no player force shown)
    if (assetForce.uniqid !== playerForce.uniqid) {
      const visibleToThisForce = !!(assetForce.visibleTo && assetForce.visibleTo.includes(playerForce.uniqid))
      const perception = findPerceivedAsTypes(playerForce.uniqid, asset.name, visibleToThisForce, asset.contactId, assetForce.uniqid, asset.platformTypeId || '', asset.perceptions)
      if (perception) {
        const forceStyle = forceColors.find((value: ForceStyle) => value.forceId === perception.forceId)
        const res: AssetRow = {
          id: asset.uniqid,
          icon: iconFor(perception.typeId) + ',' + colorFor(perception.forceId) + ',' + perception.name,
          force: forceStyle ? forceStyle.force : UNKNOWN_TYPE,
          condition: UNKNOWN_TYPE,
          name: perception.name,
          platformType: perception.typeId,
          status: asset.status?.state || '',
          position: asset.location && latLng(asset.location[0], asset.location[1]),
          tableData: { checked: selectedAssets.includes(asset.uniqid) }
        }
        itemRows.push(res)
      }
    }
  } else {
    const visibleToThisForce = !!(assetForce.visibleTo && assetForce.visibleTo.includes(playerForce.uniqid))
    const myForce = assetForce.uniqid === playerForce.uniqid
    const umpireInOwnFor = (isUmpire && !opFor)
    if (umpireInOwnFor || myForce || visibleToThisForce) {
      const res: AssetRow = {
        id: asset.uniqid,
        icon: iconFor(asset.platformTypeId) + ',' + assetForce.color + ',' + asset.name,
        force: assetForce.name,
        condition: asset.condition,
        name: asset.name,
        platformType: asset.platformTypeId || '',
        status: asset.status?.state || '',
        owner: asset.owner ? asset.owner : '',
        position: asset.location && latLng(asset.location[0], asset.location[1]),
        tableData: { checked: selectedAssets.includes(asset.uniqid) }
      }
      // if we're handling the child of an asset, we need to specify the parent
      if (parentId) {
        res.parentId = parentId
      }
      itemRows.push(res)
    }
  }

  // also sort out the comprising entries
  if (asset.comprising) {
    asset.comprising.forEach((asset2: Asset) => {
      itemRows.push(...collateItem(opFor, asset2, playerForce, assetForce, forceColors, platformIcons, selectedAssets, asset.uniqid))
    })
  }
  return itemRows
}

export const getRows = (opFor: boolean, forces: ForceData[], forceColors: ForceStyle[], platformIcons: PlatformStyle[], playerForce: ForceData, selectedAssets: string[]): AssetRow[] => {
  const rows: AssetRow[] = []

  // ok, work through the assets
  forces.forEach((force: ForceData) => {
    if (force.assets) {
      const handleThisOpFor = opFor && force.uniqid !== playerForce.uniqid
      const handleThisOwnFor = !opFor && force.uniqid === playerForce.uniqid
      const handleAllForces = (!opFor && playerForce.umpire)
      if (handleThisOpFor || handleThisOwnFor || handleAllForces) {
        force.assets.forEach((asset: Asset) => {
          rows.push(...collateItem(opFor, asset, playerForce || '', force, forceColors, platformIcons, selectedAssets, undefined))
        })
      }
    }
  })
  return rows
}
