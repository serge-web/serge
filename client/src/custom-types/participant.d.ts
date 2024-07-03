import Role from './role'
import ForceData from './force-data'
import { CollaborativePermission, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING, PARTICIPANT_CHAT, PARTICIPANT_COLLAB } from 'src/config'

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

/** the tasks a participant can be allowed to perform in a mapping channel */
export enum MappingPermissions {
  Exists = 'Exists',
  // spatially related
  ViewSpatial = 'ViewSpatial', // NOTE: infers `exists`
  AddRemove = 'Add/Remove',
  MoveResize = 'Move/resize',
  // props related permissions
  ViewProps = 'ViewProps', // NOTE: infers `exists`
  EditOwnProps = 'Edit own props', // edit props marked as user editable
  EditAllProps = 'Edit all props'
}

export type ForcePermissions = Record<ForceData['uniqid'], MappingPermissions[]>

/** participation in mapping channels */
export interface ParticipantMapping extends CoreParticipant {
  readonly pType: typeof PARTICIPANT_MAPPING
  /** ids of renderers that this role can create items for */
  forRenderer: BaseRenderer['id'][]
  /** has permission to do these per-force actions */
  permissionTo: ForcePermissions
  /** the phase(s) that this participation applies to */
  phases: Phase[]
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
  // phases in which this participant can participate (all if empty)
  phases?: Phase[]
} 

export type ParticipantTypes = ParticipantChat | ParticipantCollab | ParticipantCustom | ParticipantMapping
