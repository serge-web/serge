import { ChannelData, ForceRole } from '@serge/custom-types'

export interface COAPermissions {
  canCollaborate: boolean,
  canReleaseMessages: boolean,
  canUnClaimMessages: boolean,
}

export const getCoaPermissions = (channel: ChannelData, role: ForceRole) => {
  const myParticipations = channel.participants.filter((p) => p.force === role.forceName && ((p.roles.includes(role.roleId)) || p.roles.length === 0))
  const canCollaborate = !!myParticipations.find(p => p.canCollaborate)
  const canReleaseMessages = !!myParticipations.find(p => p.canReleaseMessages)
  const canUnClaimMessages = !!myParticipations.find(p => p.canUnClaimMessages)

  return { canCollaborate, canReleaseMessages, canUnClaimMessages }
}

export default getCoaPermissions