import { ChannelData, ForceRole } from '@serge/custom-types'
import { SpecialChannelTypes } from '@serge/config'

export const blueCollaborator: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const blueReleaseManager: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw445e', roleName: 'CO' }

export const channelCollaborativeEditing: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'Collab Editing',
  participants: [
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'COA', _id: 'k16eedkj' }
      ]
    },
    {
      canCollaborate: true,
      canReleaseMessages: true,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [blueReleaseManager.roleId],
      subscriptionId: 'oqoj2',
      templates: [
        { title: 'COA', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}

export const blueAuthor: ForceRole = { forceId: 'Blue', forceName: 'Blue', roleId: 'rkrlw6f5emms', roleName: 'Comms' }
export const whiteCollaborator: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlasdd5f', roleName: 'Manager' }
export const whiteReleaseMgr: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'rkrlw6f5f', roleName: 'Game Control' }
export const exconCollaborator: ForceRole = { forceId: 'Red', forceName: 'Red', roleId: 'rkrlss55f5e', roleName: 'Logs' }

export const channelCollaborativeResponding: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'response',
    returnVerbs: [],
    startWithReview: false
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
  name: 'New CR',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: false,
      force: 'Blue',
      forceUniqid: 'Blue',
      roles: [],
      subscriptionId: 'jvrn1',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    },
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'EXCON',
      forceUniqid: 'excon',
      roles: [],
      subscriptionId: 'jvrn2',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    },
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn3',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    },
    {
      canCollaborate: true,
      canReleaseMessages: true,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [whiteReleaseMgr.roleId],
      subscriptionId: 'jvrn4',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }

  ],
  uniqid: 'ks8sztkw'
}
