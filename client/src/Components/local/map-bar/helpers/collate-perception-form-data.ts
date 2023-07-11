import { SelectedAsset, ForceOption, PerceptionFormData, ForceData, Asset, PlatformTypeData, PerceivedTypes, PerceivedType } from 'src/custom-types'
import availableForces from './available-forces'
import { findPerceivedAsTypes, findAsset, findPlatformTypeFor } from 'src/Helpers'
import { UNKNOWN_TYPE } from 'src/config'

/** determine which form to show on this click
 * @param {PlatformTypeData[]} platforms list of platform types in the wargame
 * @param {ForceData['uniqid']} playerForceId force for the current player
 * @param {SelectedAsset} selectedAsset the currently selected asset
 * @return {string} data necessary for the plan turn form
 */
const collatePerceptionFormData = (platforms: PlatformTypeData[], playerForceId: ForceData['uniqid'], selectedAsset: SelectedAsset, forces: ForceData[]): PerceptionFormData | null => {
  // get the actual asset
  const asset: Asset = findAsset(forces, selectedAsset.uniqid)
  const perceivedValues: PerceivedTypes | null = (selectedAsset.typeId === undefined) ? null : findPerceivedAsTypes(playerForceId, asset.name, false, asset.contactId,
    selectedAsset.forceId, selectedAsset.typeId, asset.perceptions)
  const availableForceList: ForceOption[] = availableForces(forces, true, true, playerForceId)
  const platformTypes = platforms && platforms.map((p: PlatformTypeData): PerceivedType => { return { uniqid: p.uniqid, name: p.name } })
  const targetIsUnknown = (perceivedValues && perceivedValues.typeId === UNKNOWN_TYPE) || (selectedAsset.typeId === 'Unknown')
  const platformIcon = targetIsUnknown ? 'unknown.svg' : findPlatformTypeFor(platforms, '', selectedAsset.typeId || '').icon

  const perceivedForce = forces.find((force: ForceData) => (perceivedValues && perceivedValues.forceId) && force.uniqid === perceivedValues.forceId)

  if (perceivedValues) {
    const formData: PerceptionFormData = {
      populate: {
        perceivedForces: availableForceList,
        perceivedTypes: platformTypes
      },
      values: {
        perceivedNameVal: perceivedValues.name,
        perceivedForceColor: (perceivedForce && perceivedForce.color) || undefined,
        perceivedForceId: (perceivedForce && perceivedForce.uniqid) || undefined,
        perceivedTypeId: perceivedValues.typeId,
        assetId: selectedAsset.uniqid,
        iconURL: platformIcon
      }
    }
    return formData
  } else {
    return null
  }
}

export default collatePerceptionFormData
