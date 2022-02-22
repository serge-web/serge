import { SelectedAsset, PlanTurnFormData, PlatformTypeData, State, RouteStatus, AttributeValues, AttributeTypes } from '@serge/custom-types'

import { kebabCase } from 'lodash'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePlanFormData = (platforms: PlatformTypeData[], selectedAsset: SelectedAsset
): PlanTurnFormData => {
  const currentPlatform = platforms && platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const currentStatus: State | undefined = currentPlatform && currentPlatform.states.find((s: State) => selectedAsset.status && s.name === selectedAsset.status.state)
  const availableStatus: State | undefined = currentStatus || (currentPlatform && currentPlatform.states[0])
  const status: RouteStatus | undefined = selectedAsset.status
  const attributeValues: AttributeValues = selectedAsset.attributes
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
      speedVal: status && status.speedKts !== undefined && platformTypeHasSpeeds ? status.speedKts : 0,
      turnsVal: 1,
      condition: selectedAsset.condition,
      attributes: attributeValues
    }
  }
  return formData
}

export default collatePlanFormData
