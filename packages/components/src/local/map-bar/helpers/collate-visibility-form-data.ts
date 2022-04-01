import { SelectedAsset, ColorOption, VisibilityFormData, ForceData, PlatformTypeData } from '@serge/custom-types'
import { findPlatformTypeFor } from '@serge/helpers'
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

  if(!selectedAsset.typeId) {
    console.error('Warning - Collate Visibility form does not have type id for selected asset', selectedAsset.name)
  }

  const currentPlatform = findPlatformTypeFor(platforms, '', selectedAsset.typeId || 'dummy-id')

  // remove asset's own force, since they can always see their own assets
  const trimmedForcesList: ColorOption[] = availableForcesList.filter((c: ColorOption) => c.name !== selectedAsset.forceId)

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
