import { SelectedAsset, PlanTurnFormData } from '@serge/custom-types'

import { kebabCase } from 'lodash'

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePlanFormData = (platforms: any, selectedAsset: SelectedAsset
): PlanTurnFormData => {
  const currentPlatform = platforms && platforms.find((platform: any) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const availableStatus = currentPlatform && currentPlatform.states.find((s: any) => s.name === selectedAsset.status.state)
  const formData: PlanTurnFormData = {
    populate: {
      status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
      speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : []
    },
    values: {
      statusVal: availableStatus,
      speedVal: selectedAsset.status.speedKts,
      turnsVal: 1
    }
  }
  return formData
}

export default collatePlanFormData
