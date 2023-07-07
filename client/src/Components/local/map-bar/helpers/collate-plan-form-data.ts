import { PlanTurnFormData, PlatformTypeData, State, RouteStatus, AttributeValues, AttributeTypes, Route } from 'src/custom-types'

/** either provide the status of the latest planned turn, or the current asset status
 * @param Asset the current planned route for this asset
 * @return the latest planned status, or the current status,or undefined
 */
const getLatestStatus = (asset: Route): RouteStatus | undefined => {
  if (asset.planned && asset.planned.length > 0) {
    return asset.planned[asset.planned.length - 1].status
  } else {
    return asset.asset.status
  }
}

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {Asset} asset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePlanFormData = (platforms: PlatformTypeData[], asset: Route
): PlanTurnFormData => {
  const currentPlatform = platforms.find((platform: PlatformTypeData) => platform.uniqid === asset.platformTypeId)
  // for planning a turn, we should be using the most recent status
  const latestStatus = getLatestStatus(asset)
  const currentState: State | undefined = currentPlatform && currentPlatform.states.find((s: State) => latestStatus && s.name === latestStatus.state)
  const availableStatus: State | undefined = currentState || (currentPlatform && currentPlatform.states[0])
  const attributeValues: AttributeValues = asset.attributes
  const attributeTypes: AttributeTypes = (currentPlatform && currentPlatform.attributeTypes) ? currentPlatform.attributeTypes : []
  // we're doing extra check that platform type has speeds, in case initialisation
  // data accidentally has speed in current/historic states, but that platform type
  // doesn't
  const platformTypeHasSpeeds = currentPlatform && currentPlatform.speedKts && currentPlatform.speedKts.length
  const formData: PlanTurnFormData = {
    populate: {
      status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: State) => { return { name: s.name, mobile: s.mobile } }) : [],
      speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : [],
      attributes: attributeTypes
    },
    values: {
      // we will always have the status, but compiler doesn't trust us
      statusVal: availableStatus || { name: 'unfound', mobile: false },
      speedVal: latestStatus && latestStatus.speedKts !== undefined && platformTypeHasSpeeds ? latestStatus.speedKts : 0,
      turnsVal: 1,
      condition: asset.asset.condition,
      attributes: attributeValues
    }
  }
  return formData
}

export default collatePlanFormData
