import { ChannelCollab, ForceData, ForceRole } from 'src/custom-types'
import { CHANNEL_COLLAB, CollaborativePermission, InitialStates, PARTICIPANT_COLLAB } from 'src/config'
import { forces } from '.'
import { cloneDeep } from 'lodash'

export const collabForces2: ForceData[] = cloneDeep(forces)
collabForces2[0].roles[1].name = 'Manager'
collabForces2[1].roles[0].name = 'Senior'
collabForces2[2].name = 'EXCON'

export const blueCollaborator2: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const blueReleaseManager2: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw445e', roleName: 'Senior' }

export const channelCollaborativeEditing2: ChannelCollab = {
  channelType: CHANNEL_COLLAB,
  requestChangesVerbs: ['Request 1', 'Endorse 1'],
  approveVerbs: ['Approve 1'],
  extraColumns: [],
  releaseVerbs: ['Finalize 2'],
  initialState: InitialStates.UNALLOCATED,
  newMessageTemplate: { title: 'COA', _id: 'k16eedkj' },
  name: 'Collab Editing 1',
  participants: [
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanSubmitForReview,
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'oqoj'
    },
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      forceUniqid: 'Blue',
      roles: [blueReleaseManager2.roleId],
      subscriptionId: 'oqoj2'
    }
  ],
  uniqid: 'ks8soryj'
}


export const blueAuthor2: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const whiteCollaborator2: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlasdd5f', roleName: 'Manager' }
export const exconCollaborator2: ForceRole = { forceId: 'red', forceName: 'EXCON', roleId: 'rkrlss55f5e', roleName: 'Logs' }
export const whiteReleaseMgr2: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlw6f5f', roleName: 'Game Control' }

export const channelCollaborativeResponding2: ChannelCollab = {
  channelType: CHANNEL_COLLAB,
  requestChangesVerbs: ['Request 2'],
  approveVerbs: ['Approve 2'],
  releaseVerbs: ['Release 2'],
  extraColumns: [],
  initialState: InitialStates.UNALLOCATED,
  name: 'Collab responding 1',
  newMessageTemplate: { title: 'RFI', _id: 'k16eedkj' },
  responseTemplate: { title: 'Chat', _id: 'k16eedkl' },
  participants: [
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: false,
      permission: CollaborativePermission.CannotCollaborate,
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'jvrn1'
    },
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanSubmitForReview,
      forceUniqid: 'Red',
      roles: [],
      subscriptionId: 'jvrn2'
    },
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanApprove,
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn3'
    },
    {
      pType: PARTICIPANT_COLLAB,
      canCreate: true,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      forceUniqid: 'umpire',
      roles: [whiteReleaseMgr2.roleId],
      subscriptionId: 'jvrn4'
    }
  ],
  uniqid: 'ks8sztkw'
}
