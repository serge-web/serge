import { CollaborativePermission, PARTICIPANT_COLLAB, PARTICIPANT_CUSTOM } from '@serge/config'
import { ParticipantCollab } from '@serge/custom-types'
import { ParticipantChat, ParticipantCustom } from '@serge/custom-types/participant'

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
  pType: PARTICIPANT_CUSTOM
}

export const defaultParticipantCollab: ParticipantCollab = {
  ...defaultCoreParticipant,
  canCreate: false,
  viewUnreleasedVersions: false,
  permission: CollaborativePermission.CannotCollaborate,
  pType: PARTICIPANT_COLLAB
}
