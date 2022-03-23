import { ChannelTypes, ForceData, ParticipantChat, ParticipantTypes, Role, WargameData } from '@serge/custom-types'

const deleteRoleAndParts = (updatedData: WargameData, roles: Role[], key: number): WargameData => {
  // start off by deleting the role
  const roleToDelete = roles[key].roleId
  const parentForce = updatedData.forces.forces.find((force: ForceData) => force.roles.find((role: Role) => role.roleId === roleToDelete))
  if (!parentForce) {
    throw new Error('Failed to find parent force for role:' + roleToDelete)
  }
  const roleRemoved = parentForce && parentForce.roles.filter((role: Role) => role.roleId !== roleToDelete)
  parentForce.roles = roleRemoved

  // remove channel participations for this role
  updatedData.channels.channels.forEach((channel: ChannelTypes) => {
    const parts = channel.participants
    const trimmedParts: ParticipantTypes[] = []
    const partsToDelete: string[] = []
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
      trimmedParts.push(part)
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

  // now remove channels that no longer have any participations
  updatedData.channels.channels = updatedData.channels.channels.filter((channel: ChannelTypes) => channel.participants.length > 0)

  return updatedData
}

export default deleteRoleAndParts
