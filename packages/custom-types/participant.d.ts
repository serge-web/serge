import Role from './role'
import { PARTICIPANT_COLLAB, PARTICIPANT_CUSTOM } from '@serge/config'

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
  icon?: any // TODO: Check it
}

/** participation in standard channels */
export interface CustomParticipant {
  participantType: typeof PARTICIPANT_CUSTOM,
  // the templates this participant can create
  templates: ParticipantTemplate[],
}

/** increasing permissions in a collaborative editing channel
 */
 export enum CollaborativePermission {
   /** can */
   CanEdit,
   CanSubmitForReview,
   CanApprove,
   CanRelease,
   CanUnClaim
}


/** participation in collaborative editing channels */
export interface CollabParticipant {
  participantType: typeof PARTICIPANT_COLLAB,
  // partipant can create new documents in this channel
  canCreate: boolean,
  // participant views un-released documents
  viewUnreleasedVersions: boolean
  // level of access for the participant
  permission: CollaborativePermission
}