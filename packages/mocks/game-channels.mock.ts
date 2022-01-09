import { ChannelData, Role } from "@serge/custom-types"
import { ParticipantCustom } from "@serge/custom-types/participant"
import { SpecialChannelTypes } from "../config/build"
import { PARTICIPANT_CUSTOM } from '@serge/config'

import { forces } from './forces.mock'

const whiteRFI: Role = forces[0].roles[1]
const blueCO: Role = forces[1].roles[0]

const GameChannels: ChannelData[] = [
  {
    name: "Channel 16",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjpfv", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pjsbv", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pju7l", templates: [], pType: PARTICIPANT_CUSTOM }
    ] as ParticipantCustom[],
    uniqid: "channel-k63pjit0"
  },
  {
    name: "Blue Net",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk0d3", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o6", templates: [], pType: PARTICIPANT_CUSTOM }
    ] as ParticipantCustom[],
    uniqid: "channel-k63pjvpb"
  },
  {
    name: "Mapping",
    participants: [
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tifeo", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tij98", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Red", forceUniqid: "Red", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tiqdf", templates: [], pType: PARTICIPANT_CUSTOM },
      { force: "Green", forceUniqid: "Green", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k53tivj5", templates: [], pType: PARTICIPANT_CUSTOM }
    ] as ParticipantCustom[],
    uniqid: "channel-k53ti36p"
  },
  {
    name: "Blue RFI",
    format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
    collabOptions: {
      mode: 'response',
      returnVerbs: [],
      startWithReview: false,
      extraColumns: []
    },
    participants: [
      // all of white can collaborate, but not release
      { force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pds0d3", templates: [], pType: PARTICIPANT_CUSTOM } as ParticipantCustom,
      // white RFI Mgr can release
      {
        force: "White", forceUniqid: "umpire", icon: "default_img/umpireDefault.png", roles: [whiteRFI.roleId], subscriptionId: "k63pk0d3", templates: [], pType: PARTICIPANT_CUSTOM
      } as ParticipantCustom,
      // blue force can just send RFO
      {
        force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k62342o6", templates: [
          {
            title: 'RFI',
            _id: 'k16eedkj'
          }
        ],
        pType: PARTICIPANT_CUSTOM
      } as ParticipantCustom,
      // Blue CO an also send Weather
      {
        force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [blueCO.roleId], subscriptionId: "kwepk2o6", templates: [
          {
            title: 'RFI',
            _id: 'k16eedkj'
          },
          {
            title: 'Weather',
            _id: 'k16eedkh'
          }
        ],
        pType: PARTICIPANT_CUSTOM
      } as ParticipantCustom
    ],
    uniqid: "channel-BlueRFI"
  },
  {
    name: "Blue COA",
    format: SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE,
    collabOptions: {
      mode: 'edit',
      returnVerbs: ['Endorse', 'Request Changes'],
      startWithReview: true,
      extraColumns: []
    },
    participants: [
      // all of blue can collaborate
      {
        force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [], subscriptionId: "k63pk2o7", templates: [
          {
            title: 'COA',
            _id: 'k16eedkj'
          }
        ],
        pType: PARTICIPANT_CUSTOM
      } as ParticipantCustom,
      // Blue CO can release 
      {
        force: "Blue", forceUniqid: "Blue", icon: "default_img/umpireDefault.png", roles: [blueCO.roleId], subscriptionId: "k63pk2o7", templates: [
          {
            title: 'COA',
            _id: 'k16eedkj'
          }
        ],
        pType: PARTICIPANT_CUSTOM
      } as ParticipantCustom
    ],
    uniqid: "channel-BlueCOA"
  }]

export default GameChannels
