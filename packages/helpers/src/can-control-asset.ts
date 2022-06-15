import { Asset, ChannelMapping, ForceData, ParticipantMapping, Role } from '@serge/custom-types'
import { CONTROL_ALL, LaydownTypes, Phase } from '@serge/config'

export const canControlAnyAsset = (channel: ChannelMapping, role: Role['roleId']): boolean => {
  const singleRoleParticipations = channel.participants.filter((part: ParticipantMapping) => part.roles && part.roles.length === 1)
  const myParticipations = singleRoleParticipations.filter((part: ParticipantMapping) => part.roles[0] === role)
  const myControls = myParticipations.filter((part: ParticipantMapping) => part.controls && part.controls.length > 0)
  return myControls && myControls.length > 0
}

export const underControlByThisForce = (channel: ChannelMapping, asset: Asset['uniqid'], assetForce: ForceData['uniqid'], roleForce: ForceData['uniqid']): boolean => {
  const controlAllString = CONTROL_ALL + assetForce
  const controlAllTheseAssets = channel.participants.find((part:ParticipantMapping) => part.controls && part.controls.includes(controlAllString))
  if (controlAllTheseAssets) {
    // check it's an asset from this force
    return controlAllTheseAssets.forceUniqid === roleForce
  } else {
    // see if we an asset from our force controls this asset
    const controlsThisAsset = channel.participants.find((part:ParticipantMapping) => part.controls && part.controls.includes(asset))
    return !!controlsThisAsset && (controlsThisAsset.forceUniqid === roleForce)
  }
}

export const canControlAssetExtended = (channel: ChannelMapping | undefined, assetForce: string,
  assetId: string, roleId: string, wargameInitiated: boolean, isGameControl: boolean, laydown: LaydownTypes | string | undefined, phase: Phase): boolean => {
  const canControlAccordingToChannelDef = !!(channel && canControlAsset(channel, assetForce, assetId, roleId))
  if (laydown && laydown !== LaydownTypes.Fixed) {
    switch (laydown) {
      case LaydownTypes.UmpireLaydown:
        return isGameControl && !wargameInitiated
      case LaydownTypes.ForceLaydown:
        return canControlAccordingToChannelDef && wargameInitiated
      default:
        // this shouldn't happen, since the string should match
        // one of the above
        return false
    }
  } else {
    switch (phase) {
      case Phase.Adjudication :
        return isGameControl
      case Phase.Planning :
        return canControlAccordingToChannelDef
    }
  }
}

/** determine if this role can control the asset in question
 * @param {ChannelMapping} channel definition of this channel
 * @param {ForceData['uniqid']} assetForce force for this asset
 * @param {Asset['uniqid']} asset uniqid for asset
 * @param {Role['roleId']} role uniqid for current role
 * @returns {string[]} list of forces this player can control
 */
export const canControlAsset = (channel: ChannelMapping, assetForce: ForceData['uniqid'], asset: Asset['uniqid'], role: Role['roleId']): boolean => {
  const parts = channel.participants

  // see if anyone is named as controlling this asset
  const namedController = parts.find((part: ParticipantMapping) => part.controls && part.controls.includes(asset))
  if (namedController && namedController.roles) {
    // check data
    if (namedController.roles.length !== 1) {
      console.error('If an asset is being controlled, only one role should be specified')
    }
    // ok, are we the named controller?
    return namedController.roles.includes(role)
  } else {
    // the asset doesn't have a named controller. Do we have "general" control of the relevant force?
    const controlAllString = CONTROL_ALL + assetForce
    const generalControlOfThisForce = parts.find((part: ParticipantMapping) => part.controls && part.controls.includes(controlAllString))
    if (generalControlOfThisForce && generalControlOfThisForce.roles.length === 1) {
      return generalControlOfThisForce.roles[0] === role
    } else {
      console.warn('Warning no named controller for un-claimed assets of force ', assetForce, controlAllString)
      console.table(parts.map((value: ParticipantMapping) => {
        return { name: value.subscriptionId, control: value.controls }
      }))
      return false
    }
  }
}

export default canControlAsset
