import { SelectedAsset, ColorOption, VisibilityFormData } from '@serge/custom-types'
import availableForces from './available-forces'

/** produce the data necessary for the visibility form
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @param {any} forces the list of loaded forces
 * @return {string} data necessary for the plan turn form
 */
const collateVisibilityFormData = (selectedAsset: SelectedAsset, forces: any): VisibilityFormData => {
  // get the actual asset
  const visibleTo: Array<string> = selectedAsset.visibleTo
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)

  // remove asset's own force, since they can always see their own assets
  const trimmedForcesList: ColorOption[] = availableForcesList.filter((c: ColorOption) => c.name !== selectedAsset.force)

  const formData: VisibilityFormData = {
    assetId: selectedAsset.uniqid,
    name: selectedAsset.name,
    populate: trimmedForcesList,
    values: visibleTo
  }
  return formData
}

export default collateVisibilityFormData
