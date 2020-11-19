import { SelectedAsset, AdjudicateTurnFormPopulate, ColorOption } from '@serge/custom-types'

import { kebabCase } from 'lodash'
import availableForces from './available-forces'

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collateAdjudicationFormData = (platforms: any, selectedAsset: SelectedAsset,
  forces: any
): AdjudicateTurnFormPopulate => {
  const currentPlatform = platforms && platforms.find((platform: any) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)
  const formData: AdjudicateTurnFormPopulate = {
    status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: any) => { return { name: s.name, mobile: s.mobile } }) : [],
    speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : [],
    visibleTo: availableForcesList,
    condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: any) => c) : []
  }
  return formData
}

export default collateAdjudicationFormData
