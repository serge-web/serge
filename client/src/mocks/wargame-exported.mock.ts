import { Wargame } from 'src/custom-types'
import { Phase, PARTICIPANT_CUSTOM } from 'src/config'
import { ParticipantCustom } from 'src/custom-types/participant'

const game: Wargame = {
  _id: 'some_id',
  name: 'name of wargame',
  phase: Phase.Adjudication,
  isLoading: false,
  gameTurn: 2,
  wargameList: [
    {
      name: 'http://localhost:8080/db/wargame-keeemiss',
      shortName: 'wargame-keeemiss',
      title: 'Task Group-Initialised',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-kbrx8jmy',
      shortName: 'wargame-kbrx8jmy',
      title: 'IMWARC-New Task Group',
      initiated: false
    },
    {
      name: 'http://localhost:8080/db/wargame-kaf9gvb3',
      shortName: 'wargame-kaf9gvb3',
      title: 'IMWARC-NewMap',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5xyxas9',
      shortName: 'wargame-k5xyxas9',
      title: 'IMWARC-T2 Playing',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5xxsr4b',
      shortName: 'wargame-k5xxsr4b',
      title: 'IMWARC-T1 Adjudication',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5pap52f',
      shortName: 'wargame-k5pap52f',
      title: 'IMWARC-Initialised',
      initiated: true
    },
    {
      name: 'http://localhost:8080/db/wargame-k5pafxci',
      shortName: 'wargame-k5pafxci',
      title: 'IMWARC',
      initiated: false
    },
    {
      name: 'http://localhost:8080/db/wargame-k16fadm4',
      shortName: 'wargame-k16fadm4',
      title: 'Monday',
      initiated: true
    }
  ],
  currentWargame: 'wargame-kaf9gvb3',
  wargameTitle: 'IMWARC-NewMap',
  data: {
    channels: {
      channels: [
        {
          name: 'Channel 16',
          channelType: 'ChannelCustom',
          participants: [
            {
              forceUniqid: 'umpire',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k63pjpfv',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Red',
              forceUniqid: 'Red',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k63pjsbv',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Blue',
              forceUniqid: 'Blue',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k63pju7l',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            }
          ] as ParticipantCustom[],
          uniqid: 'channel-k63pjit0'
        },
        {
          name: 'Blue Net',
          channelType: 'ChannelCustom',
          participants: [
            {
              forceUniqid: 'umpire',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k63pk0d3',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Blue',
              forceUniqid: 'Blue',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k63pk2o6',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            }
          ] as ParticipantCustom[],
          uniqid: 'channel-k63pjvpb'
        },
        {
          name: 'Mapping',
          channelType: 'ChannelCustom',
          participants: [
            {
              forceUniqid: 'umpire',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k53tifeo',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Blue',
              forceUniqid: 'Blue',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k53tij98',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Red',
              forceUniqid: 'Red',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k53tiqdf',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            },
            {
              force: 'Green',
              forceUniqid: 'Green',
              icon: 'images/default_img/umpireDefault.png',
              roles: [],
              subscriptionId: 'k53tivj5',
              templates: [],
              pType: PARTICIPANT_CUSTOM
            }
          ] as ParticipantCustom[],
          uniqid: 'channel-k53ti36p'
        }
      ],
      dirty: false,
      name: 'Channels',
      selectedChannel: ''
    },
    forces: {
      dirty: false,
      forces: [
        {
          color: '#FCFBEE',
          dirty: false,
          iconURL: 'images/default_img/umpireDefault.png',
          name: 'White',
          overview: 'Umpire force.',
          roles: [
            {
              roleId: 'rkree6f5e',
              isGameControl: true,
              isInsightViewer: true,
              isRFIManager: true,
              isObserver: true,
              name: 'Game Control'
            }
          ],
          umpire: true,
          uniqid: 'umpire'
        },
        {
          color: '#00F',
          dirty: false,
          iconURL: 'images/default_img/umpireDefault.png',
          name: 'Blue',
          overview: 'Blue force.',
          roles: [
            {
              roleId: 'rkrff6f5e',
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO'
            },
            {
              roleId: 'rkrlwgg5g',
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'Comms'
            }
          ],
          umpire: false,
          uniqid: 'Blue'
        },
        {
          color: '#F00',
          dirty: false,
          iconURL: 'images/default_img/umpireDefault.png',
          name: 'Red',
          overview: 'Red force.',
          roles: [
            {
              roleId: 'rkeew6f5e',
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO'
            }
          ],
          umpire: false,
          uniqid: 'Red'
        },
        {
          color: '#0F0',
          dirty: false,
          iconURL: 'images/default_img/umpireDefault.png',
          name: 'Green',
          overview: 'Green Shipping',
          roles: [
            {
              roleId: 'rkrlwff5e',
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO'
            }
          ],
          umpire: false,
          uniqid: 'Green'
        }
      ],
      name: 'Forces',
      selectedForce: ''
    },
    overview: {
      dirty: false,
      gameDate: '2020-01-07T13:18',
      gameDescription: 'Sample MWARC Wargame',
      gameTurnTime: { unit: 'millis', millis: 5400000 },
      name: 'Overview - settings',
      realtimeTurnTime: 600000,
      showAccessCodes: true,
      timeWarning: 60000,
      logPlayerActivity: true
    }
  },
  currentTab: 'channels',
  wargameInitiated: true,
  adminNotLoggedIn: false
}

export default game
