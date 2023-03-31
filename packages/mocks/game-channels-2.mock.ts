import { ChannelTypes, Role } from "@serge/custom-types"
import { CHANNEL_CUSTOM, CHANNEL_COLLAB, CHANNEL_CHAT, CollaborativePermission, InitialStates, PARTICIPANT_CUSTOM, PARTICIPANT_CHAT, PARTICIPANT_COLLAB } from '@serge/config'
import { forces } from './forces.mock'

const whiteRFI: Role = forces[0].roles[1]
const blueCO: Role = forces[1].roles[0]

const GameChannels2: Array<ChannelTypes> = [
  {
    channelType: CHANNEL_CHAT,
    name: "Channel 16",
    participants: [
      { pType: PARTICIPANT_CHAT, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjpfv" },
      { pType: PARTICIPANT_CHAT, forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjsbv" },
      { pType: PARTICIPANT_CHAT, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pju7l" }],
    uniqid: "channel-k63pjit0"
  },
  {
    channelType: CHANNEL_CUSTOM,
    name: "Blue Net",
    participants: [
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk0d3", templates: [] },
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o6", templates: [] }],
    uniqid: "channel-k63pjvpb"
  },
  {
    channelType: CHANNEL_CUSTOM,
    name: "Mapping",
    participants: [
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tifeo", templates: [] },
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tij98", templates: [] },
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tiqdf", templates: [] },
      { pType: PARTICIPANT_CUSTOM, forceUniqid: "Green", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tivj5", templates: [] }],
    uniqid: "channel-k53ti36p"
  },
  {
    channelType: CHANNEL_COLLAB,
    name: "Blue RFI",
    requestChangesVerbs: ['Request a'],
    approveVerbs: ['Approve a'],
    releaseVerbs: ['Release a'],
    initialState: InitialStates.UNALLOCATED,
    extraColumns: [],
    newMessageTemplate:
    {
      title: 'RFI',
      _id: 'k16eedkj'
    },
    responseTemplate:
    {
      title: 'Chat',
      _id: 'k16eedkl'
    },
    participants: [
      // all of white can collaborate, but not release
      { pType: PARTICIPANT_COLLAB, canCreate: false, viewUnreleasedVersions: true, permission: CollaborativePermission.CanApprove, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pds0d3" },
      // white RFI Mgr can release
      {
        pType: PARTICIPANT_COLLAB, canCreate: false, viewUnreleasedVersions: true, permission: CollaborativePermission.CanRelease, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [whiteRFI.roleId], subscriptionId: "k63pk0d3"
      },
      // blue force can just send RFO
      {
        pType: PARTICIPANT_COLLAB, canCreate: true, viewUnreleasedVersions: false, permission: CollaborativePermission.CannotCollaborate, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k62342o6"
      }],
    uniqid: "channel-BlueRFI"
  },
  {
    channelType: CHANNEL_COLLAB,
    name: "Blue COA",
    requestChangesVerbs: ['Request b', 'Endorse b'],
    approveVerbs: ['Approve b'],
    releaseVerbs: ['Release b'],
    initialState: InitialStates.PENDING_REVIEW,
    extraColumns: [],
    newMessageTemplate: {
      title: 'COA',
      _id: 'k16eedkj'
    },
    participants: [
      // all of blue can collaborate
      {
        pType: PARTICIPANT_COLLAB, canCreate: true, viewUnreleasedVersions: true, permission: CollaborativePermission.CanSubmitForReview, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o7"
      },
      // Blue CO can release 
      {
        pType: PARTICIPANT_COLLAB, canCreate: true, viewUnreleasedVersions: true, permission: CollaborativePermission.CanRelease, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [blueCO.roleId], subscriptionId: "k63pk2o7"
      }],
    uniqid: "channel-BlueCOA"
  }
]

export default GameChannels2