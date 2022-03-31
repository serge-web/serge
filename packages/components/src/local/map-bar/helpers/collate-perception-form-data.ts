import { SelectedAsset, ColorOption, PerceptionFormData, ForceData, Asset, PlatformTypeData, PerceivedTypes } from '@serge/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset } from '@serge/helpers'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {string} playerForce force for the current platform
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: PlatformTypeData[], playerForce: string, selectedAsset: SelectedAsset, forces: ForceData[]): PerceptionFormData | null => {
  // get the actual asset
  const asset: Asset = findAsset(forces, selectedAsset.uniqid)
  const perceivedTypes: PerceivedTypes | null = (selectedAsset.typeId === undefined) ? null : findPerceivedAsTypes(playerForce, asset.name, false, asset.contactId,
    selectedAsset.force, selectedAsset.type, selectedAsset.typeId, asset.perceptions)
  const availableForceList: ColorOption[] = availableForces(forces, true, true)
  const platformTypes = platforms && platforms.map((p: PlatformTypeData) => p.name)
  if (platformTypes) {
    platformTypes.push('Unknown')
  } else {
    throw new Error('Failed to find list of platforms')
  }
  if (perceivedTypes) {
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
  } else {
    return null
  }
}

export default collatePerceptionFormData
