import { SelectedAsset, ColorOption, VisibilityFormData, ForceData, PlatformTypeData } from '@serge/custom-types'

import { kebabCase } from 'lodash'
import availableForces from './available-forces'

/** produce the data necessary for the visibility form
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @param {ForceData[]} forces the list of loaded forces
 * @return {string} data necessary for the plan turn form
 */
const collateVisibilityFormData = (platforms: PlatformTypeData[], selectedAsset: SelectedAsset, forces: ForceData[]): VisibilityFormData => {
  // get the actual asset
  const visibleTo: Array<string> = selectedAsset.visibleTo
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)

  const currentPlatform = platforms && platforms.find((platform: PlatformTypeData) => kebabCase(platform.name) === kebabCase(selectedAsset.type))

  // remove asset's own force, since they can always see their own assets
  const trimmedForcesList: ColorOption[] = availableForcesList.filter((c: ColorOption) => c.name !== selectedAsset.force)

  const formData: VisibilityFormData = {
    assetId: selectedAsset.uniqid,
    name: selectedAsset.name,
    contactId: selectedAsset.contactId,
    populate: trimmedForcesList,
    values: visibleTo,
    selectedCondition: selectedAsset.condition,
    condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: string) => c) : []
  }
  return formData
}

export default collateVisibilityFormData
