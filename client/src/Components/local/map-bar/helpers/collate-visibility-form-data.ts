import { SelectedAsset, ForceOption, VisibilityFormData, ForceData, PlatformTypeData } from '@serge/custom-types'
import { findPlatformTypeFor } from '@serge/helpers'
import availableForces from './available-forces'

/** produce the data necessary for the visibility form
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @param {ForceData[]} forces the list of loaded forces
 * @return {string} data necessary for the plan turn form
 */
const collateVisibilityFormData = (platforms: PlatformTypeData[], selectedAsset: SelectedAsset, forces: ForceData[]): VisibilityFormData => {
  // get the actual asset
  const visibleToForces: Array<ForceData['uniqid']> = selectedAsset.visibleTo

  const availableForcesList: ForceOption[] = availableForces(forces, false, true, selectedAsset.forceId)

  if (!selectedAsset.typeId) {
    console.error('Warning - Collate Visibility form does not have type id for selected asset', selectedAsset.name)
  }

  const currentPlatform = findPlatformTypeFor(platforms, '', selectedAsset.typeId || 'dummy-id')

  const formData: VisibilityFormData = {
    assetId: selectedAsset.uniqid,
    name: selectedAsset.name,
    contactId: selectedAsset.contactId,
    visibleToForces: visibleToForces,
    availableForces: availableForcesList,
    selectedCondition: selectedAsset.condition,
    condition: currentPlatform && currentPlatform.conditions ? currentPlatform.conditions.map((c: string) => c) : []
  }
  return formData
}

export default collateVisibilityFormData
