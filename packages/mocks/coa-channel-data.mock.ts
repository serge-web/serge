import { ChannelData } from '@serge/custom-types'
import { SpecialChannelTypes } from '@serge/config'


export const channelDataCollaborativeEditing: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}

export const channelDataCollaborativeEditingCollaborationParticipant: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}

export const channelDataColabEditCollaborativeReleaseManager: ChannelData = {
  collabOptions: {
    extraColumns: [],
    mode: 'edit',
    returnVerbs: ['Endorse', 'Request Changes'],
    startWithReview: true
  },
  format: SpecialChannelTypes.CHANNEL_COLLAB_EDIT,
  name: 'New CE',
  participants: [
    {
      canCollaborate: false,
      canReleaseMessages: true,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'oqoj',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8soryj'
}

export const channelDataCollaborativeResponding: ChannelData = {
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
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}

export const channelDataCollaborativeRespondingCollaborationParticipant: ChannelData = {
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
      canCollaborate: true,
      canReleaseMessages: false,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}

export const channelDataCollaborativeRespondingReleaseManager: ChannelData = {
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
      canReleaseMessages: true,
      force: 'White',
      forceUniqid: 'umpire',
      roles: [],
      subscriptionId: 'jvrn',
      templates: [
        { title: 'RFI', _id: 'k16eedkj' }
      ]
    }
  ],
  uniqid: 'ks8sztkw'
}