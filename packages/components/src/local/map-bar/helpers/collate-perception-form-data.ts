import { SelectedAsset, ColorOption, PerceptionFormData, ForceData, Asset, PlatformTypeData, PerceivedTypes } from '@serge/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset } from '@serge/helpers'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {string} playerForce force for the current platform
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: PlatformTypeData[], playerForce: string, selectedAsset: SelectedAsset, forces: ForceData[],
  userIsUmpire: boolean): PerceptionFormData => {
  // get the actual asset
  const asset: Asset = findAsset(forces, selectedAsset.uniqid)
  const perceivedTypes: PerceivedTypes | null = findPerceivedAsTypes(playerForce, asset.name, asset.contactId,
    selectedAsset.force, selectedAsset.type, asset.perceptions, userIsUmpire)
  const availableForceList: ColorOption[] = availableForces(forces, true, true)
  const platformTypes = platforms && platforms.map((p: PlatformTypeData) => p.name)
  platformTypes.push('Unknown')
  if(perceivedTypes) {
    const formData: PerceptionFormData = {
      populate: {
        perceivedForce: availableForceList,
        perceivedType: platformTypes
      },
      values: {
        perceivedNameVal: perceivedTypes.name,
        perceivedForceVal: perceivedTypes.force,
        perceivedTypeVal: perceivedTypes.type,
        assetId: selectedAsset.uniqid
      }
    }
    return formData  
  }
  throw new Error('Failed to find perceived types for:' + selectedAsset.name + ' type:' + selectedAsset.type)
}

export default collatePerceptionFormData
