import { Asset, ChannelMapping, ForceData, ParticipantMapping, Role } from '@serge/custom-types'
import { CONTROL_ALL } from '@serge/config'

export const canControlAnyAsset = (channel: ChannelMapping, role: Role['roleId']): boolean => {
  const singleRoleParticipations = channel.participants.filter((part: ParticipantMapping) => part.roles && part.roles.length === 1)
  const myParticipations = singleRoleParticipations.filter((part: ParticipantMapping) => part.roles[0] === role)
  const myControls = myParticipations.filter((part: ParticipantMapping) => part.controls && part.controls.length > 0)
  return myControls && myControls.length > 0
}

/** determine if this role can control the asset in question
 * @param {ForceData[]} channel definition of this channel
 * @param {string} asset uniqid for asset
 * @param {string} role uniqid for current role
 * @returns {string[]} list of forces this player can control
 */
export const canControlAsset = (channel: ChannelMapping, assetForce: ForceData, asset: Asset['uniqid'], role: Role['roleId']): boolean => {
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
    const controlAllString = CONTROL_ALL + assetForce.uniqid
    const generalControlOfThisForce = parts.find((part: ParticipantMapping) => part.controls && part.controls.includes(controlAllString))
    if (generalControlOfThisForce && generalControlOfThisForce.roles.length === 1) {
      return generalControlOfThisForce.roles[0] === role
    } else {
      console.warn('Warning no named controller for un-claimed assets of force ', assetForce.name)
      return false
    }
  }
}

export default canControlAsset
