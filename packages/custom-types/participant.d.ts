import Role from './role'
import { CollaborativePermission } from '@serge/config'

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
  permissions?: number[],
  icon?: any

  // TODO: This next block of permissions are v2, and are to be deleted
  /** if this set of participants can take part in collaborative working */
  canCollaborate?: boolean
  /** if this set of participants can release collaborative messages */
  canReleaseMessages?: boolean
  /** can un-claim messages */
  canUnClaimMessages?: boolean
  /** can create new message */
  canCreateNewMessage?: boolean
  /** can see live updates */
  canSeeLiveUpdates?: boolean

  // COLLAB-3 permissions
  /** can create new messages */
  canCreate?: boolean
  /** can view live updates */
  viewUnreleasedVersions?: boolean
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


/** participation in mapping channels */
export interface ParticipantMapping extends CoreParticipant {
  // TODO: add properties such as `can submit orders` or `can adjudicate`
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