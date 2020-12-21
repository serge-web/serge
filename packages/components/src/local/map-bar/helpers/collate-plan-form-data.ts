import { SelectedAsset, PlanTurnFormData, PlatformTypeData } from '@serge/custom-types'

import { kebabCase } from 'lodash'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePlanFormData = (platforms: PlatformTypeData[], selectedAsset: SelectedAsset
): PlanTurnFormData => {
  const currentPlatform = platforms && platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const availableStatus = currentPlatform && currentPlatform.states.find((s: any) => s.name === selectedAsset.status.state)
  const formData: PlanTurnFormData = {
    populate: {
      status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
      speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : []
    },
    values: {
      // we will always have the status, but compiler doesn't trust us
      statusVal: availableStatus || {name: 'unfound', mobile: false},
      speedVal: selectedAsset.status.speedKts,
      turnsVal: 1
    }
  }
  return formData
}

export default collatePlanFormData
