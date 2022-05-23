import { CollaborativePermission, CONTROL_NONE, PARTICIPANT_CHAT, PARTICIPANT_COLLAB, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING } from '@serge/config'
import { ParticipantCollab } from '@serge/custom-types'
import { ParticipantChat, ParticipantCustom, ParticipantMapping } from '@serge/custom-types/participant'

export const defaultCoreParticipant = {
  force: '',
  forceUniqid: '',
  roles: [],
  subscriptionId: ''
}

export const defaultParticipantCustom: ParticipantCustom = {
  ...defaultCoreParticipant,
  templates: [],
  pType: PARTICIPANT_CUSTOM
}

export const defaultParticipantChat: ParticipantChat = {
  ...defaultCoreParticipant,
  pType: PARTICIPANT_CHAT
}

export const defaultParticipantMapping: ParticipantMapping = {
  ...defaultCoreParticipant,
  pType: PARTICIPANT_MAPPING,
  controls: [CONTROL_NONE]
}

export const defaultParticipantCollab: ParticipantCollab = {
  ...defaultCoreParticipant,
  canCreate: false,
  viewUnreleasedVersions: false,
  permission: CollaborativePermission.CannotCollaborate,
  pType: PARTICIPANT_COLLAB
}
