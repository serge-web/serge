import { ChannelFormat, CollaborativePermission, Role } from "@serge/custom-types"
import { CHANNEL_CUSTOM, CHANNEL_COLLAB } from '@serge/config'
import { forces } from './forces.mock'
import { InitialStates } from "@serge/custom-types"

const whiteRFI: Role = forces[0].roles[1]
const blueCO: Role = forces[1].roles[0]

const GameChannels: Array<ChannelFormat> = [
  {
    channelType: CHANNEL_CUSTOM,
    name: "Channel 16",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjpfv", templates: [] },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjsbv", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pju7l", templates: [] }],
    uniqid: "channel-k63pjit0"
  },
  {
    channelType: CHANNEL_CUSTOM,
    name: "Blue Net",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk0d3", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o6", templates: [] }],
    uniqid: "channel-k63pjvpb"
  },
  {
    channelType: CHANNEL_CUSTOM,
    name: "Mapping",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tifeo", templates: [] },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tij98", templates: [] },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tiqdf", templates: [] },
      { force: "Green", forceUniqid: "Green", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tivj5", templates: [] }],
    uniqid: "channel-k53ti36p"
  },
  {
    channelType: CHANNEL_COLLAB,
    name: "Blue RFI",
    requestChangesVerbs: [],
    approveVerbs: [],
    releaseVerbs: [],
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
        _id: 'idchat' 
      },
    participants: [
      // all of white can collaborate, but not release
      { canCreate: false, viewUnreleasedVersions: true, force: "White", permission: CollaborativePermission.CanApprove, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pds0d3" },
      // white RFI Mgr can release
      {
        canCreate: false, viewUnreleasedVersions: true, force: "White", permission: CollaborativePermission.CanRelease, forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [whiteRFI.roleId], subscriptionId: "k63pk0d3"
      },
      // blue force can just send RFO
      {
        canCreate: true, viewUnreleasedVersions: false, force: "Blue", permission: CollaborativePermission.CannotCollaborate, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k62342o6"
      }],
    uniqid: "channel-BlueRFI"
  },
  {
    channelType: CHANNEL_COLLAB,
    name: "Blue COA",
    requestChangesVerbs: ['Endorse', 'Request Changes'],
    approveVerbs: [],
    releaseVerbs: [],
    initialState: InitialStates.PENDING_REVIEW,
    extraColumns: [],
    newMessageTemplate:{
        title: 'COA',
        _id: 'k16eedkj'
    },
    participants: [
      // all of blue can collaborate
      {
        canCreate: true, viewUnreleasedVersions: true, force: "Blue", permission: CollaborativePermission.CanSubmitForReview, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o7"
      },
      // Blue CO can release 
      {
        canCreate: true, viewUnreleasedVersions: true, force: "Blue",  permission: CollaborativePermission.CanRelease, forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [blueCO.roleId], subscriptionId: "k63pk2o7"
      }],
    uniqid: "channel-BlueCOA"
  },
]

export default GameChannels
