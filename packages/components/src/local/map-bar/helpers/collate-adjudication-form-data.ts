import { SelectedAsset, AdjudicateTurnFormPopulate, ColorOption, ForceData, PlatformTypeData, State } from '@serge/custom-types'

import { kebabCase } from 'lodash'
import availableForces from './available-forces'

/** determine which form to show on this click
 * @param {PlatformTypeData} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collateAdjudicationFormData = (platforms: PlatformTypeData[], selectedAsset: SelectedAsset,
  forces: ForceData[]
): AdjudicateTurnFormPopulate => {
  const currentPlatform = platforms && platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === kebabCase(selectedAsset.type))
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)
  const formData: AdjudicateTurnFormPopulate = {
    contactId: selectedAsset.contactId,
    status: currentPlatform && currentPlatform.states ? currentPlatform.states.map((s: State) => { return { name: s.name, mobile: s.mobile } }) : [],
    speed: currentPlatform && currentPlatform.speedKts ? currentPlatform.speedKts : [],
    visibleTo: availableForcesList,
    condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: string) => c) : [],
    attributes: (currentPlatform && currentPlatform.attributeTypes) || []
  }
  return formData
}

export default collateAdjudicationFormData
