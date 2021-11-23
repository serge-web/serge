import { ChannelCollab, CollaborativePermission, ForceData, ForceRole, InitialStates } from '@serge/custom-types'
import { SpecialChannelColumns } from '@serge/config'
import { CHANNEL_COLLAB } from '@serge/config'
import { forces } from '.'
import { cloneDeep } from 'lodash'
 
export const collabForces: ForceData[] = cloneDeep(forces)
collabForces[0].roles[1].name = 'Manager'
collabForces[1].roles[0].name = 'Senior'
collabForces[2].name = 'EXCON'

export const blueCollaborator: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const blueReleaseManager: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw445e', roleName: 'Senior' }

export const channelCollaborativeEditing2: ChannelCollab  = {
  channelType: CHANNEL_COLLAB,
  name: 'Collab Editing',
  extraColumns: [SpecialChannelColumns.LOCATION],
  initialState: InitialStates.PENDING_REVIEW,
  approveVerbs: [],
  releaseVerbs: [],
  requestChangesVerbs: ['Endorse', 'Request Changes'],
  newMessageTemplate:
    { title: 'COA', _id: 'k16eedkj' },
  participants: [
    {
      canCreate: true, 
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanApprove,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'oqoj',
    },
    {
      canCreate: true, 
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanRelease,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [blueReleaseManager.roleId],
      subscriptionId: 'oqoj2'
    }
  ],
  uniqid: 'ks8soryj'
}

export const blueAuthor: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const whiteCollaborator: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlasdd5f', roleName: 'Manager' }
export const whiteReleaseMgr: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlw6f5f', roleName: 'Game Control' }
export const exconCollaborator: ForceRole = { forceId: 'red', forceName: 'EXCON', roleId: 'rkrlss55f5e', roleName: 'Logs' }

export const channelCollaborativeResponding2: ChannelCollab = {
  channelType: CHANNEL_COLLAB,
  name: 'New CR',
  extraColumns: [],
  initialState: InitialStates.UNALLOCATED,
  approveVerbs: [],
  releaseVerbs: [],
  requestChangesVerbs: [],
  newMessageTemplate:
    { title: 'RFI', _id: 'k16eedkj' },
  responseTemplate:
    { title: 'Chat', _id: 'k21eedkj' },
  participants: [
    {
      canCreate: true,
      viewUnreleasedVersions: false,
      permission: CollaborativePermission.CannotCollaborate,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'jvrn1'
    },
    {
      canCreate: false,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      force: 'EXCON',
      forceUniqid: 'Excon',
      roles: [],
      subscriptionId: 'jvrn2',
    },
    {
      canCreate: false,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn3',
    },
    {
      canCreate: false,
      viewUnreleasedVersions: true,
      permission: CollaborativePermission.CanRelease,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [whiteReleaseMgr.roleId],
      subscriptionId: 'jvrn4',
    }
  ],
  uniqid: 'ks8sztkw'
}
