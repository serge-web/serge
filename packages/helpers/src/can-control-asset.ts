import { Asset, ChannelMapping, Role } from '@serge/custom-types'

/** determine if this role can control the asset in question
 * @param {ForceData[]} channel definition of this channel
 * @param {string} asset uniqid for asset
 * @param {string} role uniqid for current role
 * @returns {string[]} list of forces this player can control
 */
export const canControlAsset = (channel: ChannelMapping, asset: Asset['uniqid'], role: Role['roleId']): boolean => {
  console.log('can control', channel, asset, role)
  return false
}

export default canControlAsset
