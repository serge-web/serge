import { SelectedAsset, ColorOption, VisibilityFormData } from '@serge/custom-types'
import availableForces from './available-forces'

/** produce the data necessary for the visibility form
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @param {any} forces the list of loaded forces
 * @return {string} data necessary for the plan turn form
 */
const collateVisibilityFormData = (selectedAsset: SelectedAsset, forces: any): VisibilityFormData => {
  // get the actual asset
  const visibleTo: Array<String> = selectedAsset.visibleTo
  const availableForcesList: ColorOption[] = availableForces(forces, false, true)
  const formData: VisibilityFormData = {
    populate: availableForcesList,
    values: visibleTo
  }
  return formData
}

export default collateVisibilityFormData
