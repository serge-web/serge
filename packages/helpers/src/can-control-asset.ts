import { Asset, ChannelMapping, ForceData, ParticipantMapping, Role } from '@serge/custom-types'
import { CONTROL_ALL, CONTROL_NONE } from '@serge/config'

const controlThis = (parts: ParticipantMapping[], roleForce: string, role: string): boolean => {
  const ownsAll = parts.find((part: ParticipantMapping) => {
    if (part.forceUniqid === roleForce) {
      // ok, this participation relates to this force
      if (part.roles && part.roles.includes(role)) {
        // ok, this membership relates to us
        if (part.controls && part.controls.includes(CONTROL_ALL)) {
          // double-check data quality
          if (part.roles.length !== 1) {
            console.error('For controlling assets, only one role should be present')
          }
          return true
        }
      }
    }
    return false
  })
  return !!ownsAll
}

export const canControlAnyAsset = (channel: ChannelMapping, roleForce: ForceData['uniqid'], role: Role['roleId']): boolean => {
  const myForceParticitions = channel.participants.filter((part: ParticipantMapping) => part.forceUniqid === roleForce)
  const singleRoleParticipations = myForceParticitions.filter((part: ParticipantMapping) => part.roles && part.roles.length === 1)
  const myParticipations = singleRoleParticipations.filter((part: ParticipantMapping) => part.roles[0] === role)
  const myControls = myParticipations.filter((part: ParticipantMapping) => part.controls && part.controls.length > 0)
  const myValidControls = myControls.filter((part: ParticipantMapping) => part.controls && part.controls[0] !== CONTROL_NONE)
  return myValidControls && myValidControls.length > 0
}

/** determine if this role can control the asset in question
 * @param {ForceData[]} channel definition of this channel
 * @param {string} asset uniqid for asset
 * @param {string} role uniqid for current role
 * @returns {string[]} list of forces this player can control
 */
export const canControlAsset = (channel: ChannelMapping, assetForce: ForceData, asset: Asset['uniqid'],
  roleForce: ForceData['uniqid'], role: Role['roleId']): boolean => {
  // check if assets of this force can be controlled by me
  const controlThisForce = assetForce.controlledBy && assetForce.controlledBy.includes(roleForce)

  // check if this asset is from my force
  const isMyForce = assetForce.uniqid === roleForce

  const parts = channel.participants
  if (controlThisForce || isMyForce) {
    // ok, our force is responsible for assets of this force

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
      // we're not the named controller. Do we have "general" control of the relevant asset?
      return controlThis(parts, roleForce, role)
    }
  } else {
    return false
  }
}

export default canControlAsset
