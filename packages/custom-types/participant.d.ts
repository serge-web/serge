import Role from './role'
import ForceData from './force-data'
import { CollaborativePermission, PARTICIPANT_CUSTOM, PARTICIPANT_CHAT, PARTICIPANT_COLLAB, PARTICIPANT_MAPPING } from '@serge/config'

export interface ParticipantTemplate {
  _id: string,
  title: string
}

/** core properties for a participant */
export interface CoreParticipant {
  // Name of force being referred to
  readonly force: ForceData['name'],
  readonly forceUniqid: ForceData['uniqid'],
  // specific set of roles that participate in this channel (or empty for all roles)
  roles: Array<Role['roleId']>,
  readonly subscriptionId: string,
  icon?: any
  readonly pType: string
}

/** participation in standard channels */
export interface ParticipantCustom extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_CUSTOM
  // the templates this participant can create
  templates: ParticipantTemplate[],
}

/** participation in chat channels */
export interface ParticipantChat extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_CHAT
}


/** participation in mapping channels */
export interface ParticipantMapping extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_MAPPING
  // TODO: add properties such as `can submit orders` or `can adjudicate`
}

/** participation in collaborative editing channels */
export interface ParticipantCollab extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_COLLAB
  // partipant can create new documents in this channel
  canCreate: boolean,
  // participant views un-released documents
  viewUnreleasedVersions: boolean
  // level of access for the participant
  permission: CollaborativePermission
} 