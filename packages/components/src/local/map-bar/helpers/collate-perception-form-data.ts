import { SelectedAsset, ColorOption, PerceptionFormData } from '@serge/custom-types'
import availableForces from './available-forces'

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: any, selectedAsset: SelectedAsset, forces: any
    ): PerceptionFormData => {
    const availableForceList: ColorOption[] = availableForces(forces, true)
    const platformTypes = platforms && platforms.map((p: any) => p.name)
    const formData: PerceptionFormData ={
      populate: {
        perceivedForce: availableForceList,
        perceivedType: platformTypes
      },
      values: {
        perceivedNameVal: selectedAsset.name,
        perceivedForceVal: selectedAsset.force,
        perceivedTypeVal: selectedAsset.type
      }
    }
    return formData
}

export default collatePerceptionFormData
