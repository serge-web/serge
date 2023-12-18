import Role from './role'
import ForceData from './force-data'
import { CollaborativePermission, PARTICIPANT_CUSTOM, PARTICIPANT_PLANNING, PARTICIPANT_CHAT, PARTICIPANT_COLLAB } from 'src/config'

export interface ParticipantTemplate {
  _id: string
  title: string
}

/** core properties for a participant */
export interface CoreParticipant {
  readonly forceUniqid: ForceData['uniqid']
  // specific set of roles that participate in this channel (or empty for all roles)
  roles: Array<Role['roleId']>
  readonly subscriptionId: string
  icon?: any
  readonly pType: string
}

/** participation in standard channels */
export interface ParticipantCustom extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_CUSTOM
  // the templates this participant can create
  templates: ParticipantTemplate[]
}

/** participation in planning channels */
export interface ParticipantPlanning extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_PLANNING
  // the templates this participant can create
  templates: ParticipantTemplate[]
}

/** participation in chat channels */
export interface ParticipantChat extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_CHAT
}

/** participation in collaborative editing channels */
export interface ParticipantCollab extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_COLLAB
  // partipant can create new documents in this channel
  canCreate: boolean
  // participant views un-released documents
  viewUnreleasedVersions: boolean
  // level of access for the participant
  permission: CollaborativePermission
} 

export type ParticipantTypes = ParticipantChat | ParticipantCollab | ParticipantCustom | ParticipantPlanning
