import Role from './role'
import ForceData from './force-data'
import { CollaborativePermission, PARTICIPANT_CUSTOM, PARTICIPANT_PLANNING, PARTICIPANT_CHAT, PARTICIPANT_COLLAB, PARTICIPANT_MAPPING } from 'src/config'
import Asset from './asset'

export interface ParticipantTemplate {
  _id: string,
  title: string
}

/** core properties for a participant */
export interface CoreParticipant {
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

/** participation in planning channels */
export interface ParticipantPlanning extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_PLANNING
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
  /** the assets from this force which this participant controls,
   * or "All" value with FORCE to control all not otherwise controlled
   * from that force.  For controls all, the string will be
   * the value of CONTROL_ALL plus ":" and the Force['uniqid].
   * 
   * Leaving the array empty means the player has read-only access.
   */
  controls?: Array<Asset['uniqid'] | string>
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

export type ParticipantTypes = ParticipantChat | ParticipantCollab | ParticipantCustom | ParticipantMapping | ParticipantPlanning