import { SelectedAsset, ColorOption, PerceptionFormData } from '@serge/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset } from '@serge/helpers'

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {string} playerForce force for the current platform
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: any, playerForce: string, selectedAsset: SelectedAsset, forces: any,
  userIsUmpire: boolean): PerceptionFormData => {
  // get the actual asset
  const asset = findAsset(forces, selectedAsset.uniqid)
  const [nameT, forceT, typeT] = findPerceivedAsTypes(playerForce, asset.name, asset.contactId,
    selectedAsset.force, selectedAsset.type, asset.perceptions, userIsUmpire)
  const availableForceList: ColorOption[] = availableForces(forces, true, true)
  const platformTypes = platforms && platforms.map((p: any) => p.name)
  platformTypes.push('Unknown')
  const formData: PerceptionFormData = {
    populate: {
      perceivedForce: availableForceList,
      perceivedType: platformTypes
    },
    values: {
      perceivedNameVal: nameT,
      perceivedForceVal: forceT,
      perceivedTypeVal: typeT,
      assetId: selectedAsset.uniqid
    }
  }
  return formData
}

export default collatePerceptionFormData
