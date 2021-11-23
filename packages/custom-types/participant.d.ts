import Role from './role'

export interface ParticipantTemplate {
  _id: string,
  title: string
}

export default interface Participant {
  force: string
  readonly forceUniqid: string
  // specific set of roles that participate in this channel (or empty for all roles)
  roles: Array<Role['roleId']>
  subscriptionId: string
  templates: ParticipantTemplate[]
  icon?: any 
  /** if this set of participants can take part in collaborative working */
  canCollaborate?: boolean
  /** if this set of participants can release collaborative messages */
  canReleaseMessages?: boolean
  /** can un-claim messages */
  canUnClaimMessages?: boolean
}


/** core properties for a participant */
interface CoreParticipant {
  force: string,
  readonly forceUniqid: string,
  // specific set of roles that participate in this channel (or empty for all roles)
  roles: Array<Role['roleId']>,
  subscriptionId: string,
  icon?: any
}

/** participation in standard channels */
export interface ParticipantCustom extends CoreParticipant {
  // the templates this participant can create
  templates: ParticipantTemplate[],
}

/** participation in chat channels */
export interface ParticipantChat extends CoreParticipant {
}

/** increasing permissions in a collaborative editing channel
 */
 export enum CollaborativePermission {
   /** can */
   CannotCollaborate,
   CanEdit,
   CanSubmitForReview,
   CanApprove,
   CanRelease,
   CanUnClaim
}


/** participation in collaborative editing channels */
export interface ParticipantCollab extends CoreParticipant {
  // partipant can create new documents in this channel
  canCreate: boolean,
  // participant views un-released documents
  viewUnreleasedVersions: boolean
  // level of access for the participant
  permission: CollaborativePermission
} 