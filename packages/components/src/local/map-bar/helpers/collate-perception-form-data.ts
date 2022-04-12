import { SelectedAsset, ForceOption, PerceptionFormData, ForceData, Asset, PlatformTypeData, PerceivedTypes, PerceivedType } from '@serge/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset, findPlatformTypeFor } from '@serge/helpers'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {ForceData['uniqid']} playerForceId force for the current player
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: PlatformTypeData[], playerForceId: ForceData['uniqid'], selectedAsset: SelectedAsset, forces: ForceData[]): PerceptionFormData | null => {
  // get the actual asset
  const asset: Asset = findAsset(forces, selectedAsset.uniqid)
  const perceivedTypes: PerceivedTypes | null = (selectedAsset.typeId === undefined) ? null : findPerceivedAsTypes(playerForceId, asset.name, false, asset.contactId,
    selectedAsset.forceId, '', selectedAsset.typeId, asset.perceptions)
  const availableForceList: ForceOption[] = availableForces(forces, true, true, playerForceId)
  const platformTypes = platforms && platforms.map((p: PlatformTypeData): PerceivedType => { return { uniqid: p.uniqid, name: p.name } })
  const perceivedType = perceivedTypes && perceivedTypes.typeId && findPlatformTypeFor(platforms, '', perceivedTypes.typeId)

  if (perceivedTypes) {
    const formData: PerceptionFormData = {
      populate: {
        perceivedForces: availableForceList,
        perceivedTypes: platformTypes
      },
      values: {
        perceivedNameVal: perceivedTypes.name,
        perceivedForceClass: perceivedTypes.force,
        perceivedForceId: perceivedTypes.forceId || '',
        perceivedTypeId: perceivedTypes.typeId,
        assetId: selectedAsset.uniqid,
        iconURL: (perceivedType && perceivedType.icon) || 'unknown.svg'
      }
    }
    return formData
  } else {
    return null
  }
}

export default collatePerceptionFormData
