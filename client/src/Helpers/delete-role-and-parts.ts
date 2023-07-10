import { ChannelTypes, ForceData, ParticipantChat, ParticipantTypes, Role, WargameData } from '@serge/custom-types'
import deepCopy from './deep-copy'

/** delete the specified role, but also remove any channel
 * participations for that role, if present
 * @returns either the wargame (if channels have been modified) or an array of the wargame
 * plus the list of changed roles (if channels have not been modified)
 */
const deleteRoleAndParts = (wargame: WargameData, roles: Role[], key: number): WargameData | [WargameData, Role[]] => {
  const res: WargameData = deepCopy(wargame)

  // start off by deleting the role
  const roleToDelete = roles[key].roleId
  const parentForce = res.forces.forces.find((force: ForceData) => force.roles.find((role: Role) => role.roleId === roleToDelete))
  if (!parentForce) {
    throw new Error('Failed to find parent force for role:' + roleToDelete)
  }
  const roleRemoved = parentForce.roles.filter((role: Role) => role.roleId !== roleToDelete)
  parentForce.roles = roleRemoved

  const partsToDelete: string[] = []
  // remove channel participations for this role
  res.channels.channels.forEach((channel: ChannelTypes) => {
    const parts = channel.participants
    const trimmedParts: ParticipantTypes[] = []
    // see if the role we're deleting is in a participation for this channel
    parts.forEach((part: ParticipantTypes) => {
      if (part.roles.length > 0) {
        const trimmedRoles: string[] = part.roles.filter((role: string) => role !== roleToDelete)
        part.roles = trimmedRoles
        // we only wish to delete participation if there were some roles present
        // before, but not afterwards. If there were no roles before, then it
        // deliberately means "all roles for force in channel"
        if (trimmedRoles.length === 0) {
          partsToDelete.push(part.subscriptionId)
        }
      }
      trimmedParts.push(part.roles ? part : [] as any)
    })

    // in the next time we're "tricking" the compiler into accepting the
    // provided list.  We're not worried about the list being in the correct type
    // since all the entries came from that list
    channel.participants = trimmedParts as ParticipantChat[]

    // now remove participations that no longer have any roles
    if (partsToDelete.length > 0) {
      channel.participants = channel.participants.filter((sub: ParticipantTypes) => !partsToDelete.some((id: string) => sub.subscriptionId === id))
    }
  })

  if (partsToDelete.length !== 0) {
    // now remove channels that no longer have any participations
    res.channels.channels = res.channels.channels.filter((channel: ChannelTypes) => channel.participants.length > 0)
    return res
  } else {
    return [res, roleRemoved]
  }
}

export default deleteRoleAndParts
