import Role from './role'

export interface ParticipantTemplate {
  _id: string,
  title: string
}

export default interface Participant {
  force: string,
  readonly forceUniqid: string,
  // TODO: switch roles to ne a list of uniqid values, not structures. Retrieve strucutre using uniqid
  roles: Array<Role>,
  subscriptionId: string,
  templates: ParticipantTemplate[],
  icon?: any // TODO: Check it
  /** if this set of participants can take part in collaborative working */
  canCollaborate?: boolean
  /** if this set of participants can release collaborative messages */
  canReleaseMessages?: boolean
}
