
import { Asset, ForceData, GroupedActivitySet, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, PlanningMessageStructure, PlatformTypeData } from '@serge/custom-types'
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
  order2Activity: string | undefined
}

const getActivity = (activities:PerForcePlanningActivitySet[], activityId: PlanningMessageStructure['activity'], forceId?: ForceData['uniqid']): string | undefined => {
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
    throw Error('failed to find group activity' + activityId)
  }

  const activity = groupAct.activities.find((act: string | PlanningActivity) => {
    if (typeof act === 'string') {
      throw Error('Activity should not be string')
    }
    const actObj = act as PlanningActivity
    return actObj.uniqid === activityId
  }) as PlanningActivity
  if (!activity) {
    throw Error('failed to find activity' + activityId)
  }
  return groupAct.category + ' - ' + activity.name
}

export const updateAssets = (asset: Record<string, any>, interaction: InteractionData): Record<string, any> => {
  if (asset !== undefined) {
    asset.enum = interaction.allAssets.map((asset) => asset.uniqid)
    asset.options.enum_titles = interaction.allAssets.map((asset) => asset.name)
  }
  return asset
}

const unknownId = 'unknown'
const unknownLabel = 'Unknown'

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
  planningMessages: MessagePlanning[], forces: ForceData[], forceStyles: ForceStyle[], forcePlanningActivities?: PerForcePlanningActivitySet[]): InteractionData | undefined => {
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
  const act2 = order2 && forcePlanningActivities && getActivity(forcePlanningActivities, order2.message.activity, order2.details.from.forceId)

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
    order1Activity: act1,
    order2Activity: act2
  }
}
