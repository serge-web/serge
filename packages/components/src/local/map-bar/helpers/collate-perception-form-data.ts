import { SelectedAsset, ColorOption, PerceptionFormData, ForceData, Asset } from '@serge/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset } from '@serge/helpers'

/** determine which form to show on this click
 * @param {any} platforms list of platform types in the wargame
 * @param {string} playerForce force for the current platform
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: any, playerForce: string, selectedAsset: SelectedAsset, forces: ForceData[],
  userIsUmpire: boolean): PerceptionFormData | null => {
  // get the actual asset
  const asset: Asset | undefined = findAsset(forces, selectedAsset.uniqid)
  if (asset) {
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
  } else {
    return null
  }
}

export default collatePerceptionFormData
