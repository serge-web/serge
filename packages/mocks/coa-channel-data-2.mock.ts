import { ChannelCollab, ForceData, ForceRole } from '@serge/custom-types'
import { CHANNEL_COLLAB, CollaborativePermission, InitialStates } from '@serge/config'
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
  requestChangesVerbs: ['Alpha', 'Papa'],
  approveVerbs: ['Approve'],
  extraColumns: [],
  releaseVerbs: ['Finalise'],
  initialState: InitialStates.UNALLOCATED,
  newMessageTemplate:{ title: 'COA', _id: 'k16eedkj' },
  name: 'Collab Editing',
  participants: [
    {
      canCreate: true,
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanSubmitForReview, 
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'oqoj'
    },
    {
      canCreate: true,
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanRelease, 
      force: 'Blue',
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
  requestChangesVerbs: [],
  approveVerbs: [],
  extraColumns: [],
  releaseVerbs: [],
  initialState: InitialStates.UNALLOCATED,
  name: 'New CR',
  newMessageTemplate: { title: 'RFI', _id: 'k16eedkj' },
  responseTemplate: { title: 'Chat', _id: 'idchat' },
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
      canCreate: true,
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanSubmitForReview,
      force: 'EXCON',
      forceUniqid: 'Red',
      roles: [],
      subscriptionId: 'jvrn2'
    },
    {
      canCreate: true,
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanApprove,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn3'
    },
    {
      canCreate: true,
      viewUnreleasedVersions: true, 
      permission: CollaborativePermission.CanRelease,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [whiteReleaseMgr2.roleId],
      subscriptionId: 'jvrn4'
    }



  ],
  uniqid: 'ks8sztkw'
}
