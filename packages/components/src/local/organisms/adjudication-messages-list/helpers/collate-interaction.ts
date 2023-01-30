
import { Asset, ForceData, GroupedActivitySet, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, PlanningActivityGeometry, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
import { findAsset, ForceStyle } from '@serge/helpers'
import _ from 'lodash'

export type InteractionData = {
  interaction: MessageInteraction
  order1: MessagePlanning
  order2: MessagePlanning | undefined
  allAssets: Asset[]
  allAssetNames: string[]
  otherAssets: Asset[]
  order1Activity: string | undefined
  order1Geometry: string | undefined
  order1GeometryID: string | undefined
  order2Activity: string | undefined
  order2Geometry: string | undefined
  order2GeometryID: string | undefined
}

const getActivity = (activities:PerForcePlanningActivitySet[], activityId: PlanningMessageStructure['activity'], forceId?: ForceData['uniqid']): PlanningActivity | undefined => {
  const force = activities.find((act) => act.force === forceId)
  if (!force) {
    throw Error('Failed to find group for:' + force)
  }
  const groupAct = force.groupedActivities.find((group: GroupedActivitySet) =>
    group.activities.find((act: string | PlanningActivity) => {
      if (typeof act === 'string') {
        throw Error('Activity should not be string')
      }
      const actObj = act as PlanningActivity
      return actObj.uniqid === activityId
    })
  )
  if (!groupAct) {
    console.warn('failed to find group activity', activityId)
    return undefined
  }

  const activity = groupAct.activities.find((act: string | PlanningActivity) => {
    if (typeof act === 'string') {
      throw Error('Activity should not be string')
    }
    const actObj = act as PlanningActivity
    return actObj.uniqid === activityId
  }) as PlanningActivity
  if (!activity) {
    console.warn('failed to find activity', activityId)
    return undefined
  }
  return activity
}

export const updateAssets = (asset: Record<string, any>, interaction: InteractionData): Record<string, any> => {
  if (asset !== undefined) {
    asset.enum = interaction.allAssets.map((asset) => asset.uniqid)
    asset.options.enum_titles = interaction.allAssets.map((asset) => asset.name)
  }
  return asset
}

export const updateWithAllAssets = (asset: Record<string, any>, interaction: InteractionData, forces: ForceData[]): Record<string, any> => {
  if (asset !== undefined) {
    // start off with the assets in this interaction
    asset.enum = interaction.allAssets.map((asset) => asset.uniqid)
    asset.options.enum_titles = interaction.allAssets.map((asset) => asset.name)

    // now the remaining assets
    const assets: Asset[] = []
    forces.forEach((force) => {
      if (force.assets) {
        assets.push(...force.assets)
      }
    })
    asset.enum.push(...assets.map((asset) => asset.uniqid))
    asset.options.enum_titles.push(...assets.map((asset) => asset.name))
  }
  return asset
}

const unknownId = 'unknown'
const unknownLabel = 'Unk'

export const updateForces = (force: Record<string, any>, forces: ForceStyle[], includeUnknown?: boolean): Record<string, any> => {
  if (force !== undefined) {
    force.enum = forces.map((force) => force.forceId)
    force.options.enum_titles = forces.map((force) => force.force)
    if (includeUnknown) {
      force.enum.unshift(unknownId)
      force.options.enum_titles.unshift(unknownLabel)
    }
  }
  return force
}

export const updatePlatformTypes = (platformType: Record<string, any>, pTypes: PlatformTypeData[], includeUnknown?: boolean): Record<string, any> => {
  if (platformType !== undefined) {
    // sort the list
    const sorted = _.sortBy(pTypes, (pType) => pType.name)
    platformType.enum = sorted.map((pType) => pType.uniqid)
    platformType.options.enum_titles = sorted.map((pType) => pType.name)
    if (includeUnknown) {
      platformType.enum.unshift(unknownId)
      platformType.options.enum_titles.unshift(unknownLabel)
    }
  }
  return platformType
}

export const collateInteraction = (intId: string, interactionMessages: MessageInteraction[],
  planningMessages: MessagePlanning[], forces: ForceData[], forceStyles: ForceStyle[],
  forcePlanningActivities?: PerForcePlanningActivitySet[]): InteractionData | undefined => {
  const intMsg = interactionMessages.find((value) => value._id === intId)
  if (!intMsg) {
    console.warn('Failed to find interaction message:', intId)
    return undefined
  }
  const interaction = intMsg.details.interaction
  if (!interaction) {
    console.warn('Failed to find interaction details:', intId)
    return undefined
  }
  const order1AssetsIds: string[] = []
  const order1 = planningMessages.find((plan) => plan._id === interaction.orders1)
  if (!order1) {
    console.warn('Failed to find interaction message:' + interaction.orders1)
    return undefined
  }
  order1.message.ownAssets && order1AssetsIds.push(...order1.message.ownAssets.map((asset) => asset.asset))
  order1.message.otherAssets && order1AssetsIds.push(...order1.message.otherAssets.map((asset) => asset.asset))

  const order2AssetsIds: string[] = []
  const order2: MessagePlanning | undefined = interaction.orders2 ? planningMessages.find((plan): boolean => plan._id === interaction.orders2) : undefined
  if (order2) {
    order2.message.ownAssets && order2AssetsIds.push(...order2.message.ownAssets.map((asset) => asset.asset))
    order2.message.otherAssets && order2AssetsIds.push(...order2.message.otherAssets.map((asset) => asset.asset))
  }

  const allIds = order1AssetsIds.concat(order2AssetsIds)
  const uniqIds = _.uniq(allIds)
  let allAssets: Asset[] = []
  try {
    allAssets = uniqIds.map((id: string) => findAsset(forces, id))
  } catch (e) {
    console.warn('Failed to find asset with id', uniqIds)
    allAssets = []
  }
  const sortedAllAssets = _.sortBy(allAssets, (a: Asset) => a.name)
  const sortedAllAssetNames = sortedAllAssets.map((asset: Asset) => {
    const force = order1AssetsIds.includes(asset.uniqid)
      ? forceStyles.find((force) => force.forceId === order1.details.from.forceId)
      : forceStyles.find((force) => force.forceId === (order2 && order2.details.from.forceId))
    if (!force) {
      throw Error('Failed to find force for:' + asset.uniqid)
    }
    return force.force + '-' + asset.name
  })

  const act1 = forcePlanningActivities && getActivity(forcePlanningActivities, order1.message.activity, order1.details.from.forceId)
  const geom1 = act1 && act1.geometries && interaction.orders1Geometry && act1.geometries.find((val: PlanningActivityGeometry) => val.uniqid === interaction.orders1Geometry)

  const act2 = order2 && forcePlanningActivities && getActivity(forcePlanningActivities, order2.message.activity, order2.details.from.forceId)
  const geom2 = act2 && act2.geometries && interaction.orders1Geometry && act2.geometries.find((val: PlanningActivityGeometry) => val.uniqid === interaction.orders2Geometry)

  let otherAssets: Array<Asset> | undefined
  if (interaction.otherAssets && interaction.otherAssets.length) {
    otherAssets = interaction.otherAssets.map((id: string) => {
      return findAsset(forces, id)
    })
  }

  return {
    interaction: intMsg,
    order1: order1,
    order2: order2,
    allAssets: sortedAllAssets,
    allAssetNames: sortedAllAssetNames,
    otherAssets: otherAssets || [],
    order1Activity: act1?.name,
    order1Geometry: geom1 ? geom1.name : '',
    order1GeometryID: geom1 ? geom1.uniqid : '',
    order2Activity: act2?.name,
    order2Geometry: geom2 ? geom2.name : '',
    order2GeometryID: geom2 ? geom2.uniqid : ''
  }
}
