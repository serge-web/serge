import Role from './role'

export interface ParticipantTemplate {
  _id: string,
  title: string
}

export default interface Participant {
  force: string,
  readonly forceUniqid: string,
  // specific set of roles that participate in this channel (or empty for all roles)
  roles: Array<Role['roleId']>,
  subscriptionId: string,
  templates: ParticipantTemplate[],
  icon?: any // TODO: Check it
  /** if this set of participants can take part in collaborative working */
  canCollaborate?: boolean
  /** if this set of participants can release collaborative messages */
  canReleaseMessages?: boolean
  /** can un-claim messages */
  canUnClaimMessages?: boolean
}
