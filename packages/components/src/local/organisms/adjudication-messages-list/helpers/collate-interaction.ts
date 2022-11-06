
import { Asset, ForceData, GroupedActivitySet, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity, PlanningMessageStructure } from '@serge/custom-types'
import { findAsset, ForceStyle } from '@serge/helpers'
import _ from 'lodash'

export type InteractionData = {
  interaction: MessageInteraction
  order1: MessagePlanning
  order2: MessagePlanning | undefined
  allAssets: Asset[]
  allAssetNames: string[]
  order1Activity: PlanningActivity | undefined
  order2Activity: PlanningActivity | undefined
}

const getActivity = (activities:PerForcePlanningActivitySet[], forceId?: ForceData['uniqid'], activityId?: PlanningMessageStructure['activity']): PlanningActivity | undefined => {
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
    throw Error('failed to find group activity')
  }

  const activity = groupAct.activities.find((act: string | PlanningActivity) => {
    if (typeof act === 'string') {
      throw Error('Activity should not be string')
    }
    const actObj = act as PlanningActivity
    return actObj.uniqid === activityId
  }) as PlanningActivity
  if (!activity) {
    throw Error('failed to find activity')
  }
  return activity
}

export const updateAssets = (asset: Record<string, any>, interaction: InteractionData): Record<string, any> => {
  if (asset !== undefined) {
    const allAssIds = interaction.allAssets.map((asset) => asset.uniqid)
    const allAssNames = interaction.allAssets.map((asset) => asset.name)
    asset.enum = allAssIds
    asset.options.enum_titles = allAssNames
  }
  return asset
}

export const updateForces = (force: Record<string, any>, forces: ForceStyle[]): Record<string, any> => {
  if (force !== undefined) {
    const allForceIds = forces.map((force) => force.forceId)
    const allForceNames = forces.map((force) => force.force)
    force.enum = allForceIds
    force.options.enum_titles = allForceNames
  }
  return force
}

export const collateInteraction = (intId: string, interactionMessages: MessageInteraction[],
  planningMessages: MessagePlanning[], forces: ForceData[], forceStyles: ForceStyle[], forcePlanningActivities?: PerForcePlanningActivitySet[]): InteractionData => {
  const intMsg = interactionMessages.find((value) => value._id === intId)
  if (!intMsg) {
    throw Error('Failed to find interaction message:' + intId)
  }
  const interaction = intMsg.details.interaction
  if (!interaction) {
    throw Error('Failed to find interaction message:' + intId)
  }
  const order1AssetsIds: string[] = []
  const order1 = planningMessages.find((plan) => plan._id === interaction.orders1)
  if (!order1) {
    throw Error('Failed to find interaction message:' + interaction.orders1)
  }
  order1.message.ownAssets && order1AssetsIds.push(...order1.message.ownAssets.map((asset) => asset.asset))
  order1.message.otherAssets && order1AssetsIds.push(...order1.message.otherAssets)

  const order2AssetsIds: string[] = []
  const order2: MessagePlanning | undefined = interaction.orders2 ? planningMessages.find((plan): boolean => plan._id === interaction.orders2) : undefined
  if (order2) {
    order2.message.ownAssets && order2AssetsIds.push(...order2.message.ownAssets.map((asset) => asset.asset))
    order2.message.otherAssets && order2AssetsIds.push(...order2.message.otherAssets)
  }

  const allIds = order1AssetsIds.concat(order2AssetsIds)
  const uniqIds = _.uniq(allIds)
  const allAssets = uniqIds.map((id: string) => findAsset(forces, id))
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

  const act1 = forcePlanningActivities && getActivity(forcePlanningActivities, order1.details.from.forceId, order1.message.activity)
  const act2 = order2 && forcePlanningActivities && getActivity(forcePlanningActivities, order1.details.from.forceId, order1.message.activity)

  return {
    interaction: intMsg,
    order1: order1,
    order2: order2,
    allAssets: sortedAllAssets,
    allAssetNames: sortedAllAssetNames,
    order1Activity: act1,
    order2Activity: act2
  }
}
