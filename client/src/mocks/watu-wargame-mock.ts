import { Wargame } from 'src/custom-types'

const wargame: Wargame = {
  adjudicationStartTime: '2021-08-10T16:12:25+01:00',
  wargameList: [],
  data: {
    channels: {
      channels: [
        {
          name: 'VHF C16',
          channelType: 'ChannelCustom',
          participants: [
            {
              forceUniqid: 'umpire',
              roles: [],
              subscriptionId: '8qsze9',
              templates: [],
              pType: 'ParticipantCustom'
            },
            {
              forceUniqid: 'Blue-1',
              roles: [],
              subscriptionId: 'hzrzp',
              templates: [],
              pType: 'ParticipantCustom'
            },
            {
              forceUniqid: 'Red-1',
              roles: [],
              subscriptionId: 'icrx',
              templates: [],
              pType: 'ParticipantCustom'
            }
          ],
          uniqid: 'channel-koirdijk'
        },
        {
          name: 'mapping',
          channelType: 'ChannelChat',
          participants: [
            {
              pType: 'ParticipantChat',
              forceUniqid: 'umpire',
              roles: [],
              subscriptionId: 'white-view'
            },
            {
              pType: 'ParticipantChat',
              forceUniqid: 'umpire',
              roles: ['umpire-GC'],
              subscriptionId: 'white-control-green-all'
            },
            {
              pType: 'ParticipantChat',
              forceUniqid: 'umpire',
              roles: ['umpire-blue-hq'],
              subscriptionId: 'white-control-green-asset'
            },
            {
              forceUniqid: 'Blue-1',
              roles: [],
              subscriptionId: 'w9lmf',
              pType: 'ParticipantChat'
            },
            {
              forceUniqid: 'Blue-1',
              roles: ['nortCO'],
              subscriptionId: 'nortCO-control',
              pType: 'ParticipantChat'
            },
            {
              forceUniqid: 'Blue-1',
              roles: ['blueCO'],
              subscriptionId: 'blue-CO-control-all',
              pType: 'ParticipantChat'
            },
            {
              forceUniqid: 'Red-1',
              roles: ['red-CO'],
              subscriptionId: 'red-co-all',
              pType: 'ParticipantChat'
            },
            {
              forceUniqid: 'Red-1',
              roles: [],
              subscriptionId: 'red-viewers',
              pType: 'ParticipantChat'
            }
          ],
          uniqid: 'channel-koirldxk'
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
          iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
          name: 'White Force',
          overview: 'Umpire force.',
          roles: [
            {
              isGameControl: true,
              isInsightViewer: true,
              isObserver: true,
              isRFIManager: false,
              name: 'Game Control',
              roleId: 'umpire-GC'
            },
            {
              isGameControl: false,
              isInsightViewer: true,
              isObserver: false,
              isRFIManager: true,
              name: 'RFI Mgr',
              roleId: 'rks5zfzd3'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'Blue HHQ',
              roleId: 'umpire-blue-hq'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'Red HHQ',
              roleId: 'rks5zfzd5'
            }
          ],
          umpire: true,
          uniqid: 'umpire'
        },
        {
          color: '#00aaff',
          dirty: false,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png',
          name: 'Blue-1 Force',
          overview: 'An overview written here..',
          roles: [
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO',
              roleId: 'blueCO'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'NORT CO',
              roleId: 'nortCO'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'Comms',
              roleId: 'blue-comms'
            }

          ],
          umpire: false,
          uniqid: 'Blue-1',
          visibleTo: []
        },
        {
          color: '#f00',
          dirty: false,
          iconURL: 'http://localhost:8080/default_img/forceDefault.png',
          name: 'Red-1 Force',
          overview: 'An overview written here..',
          roles: [
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO',
              roleId: 'red-CO'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'CTF Y1',
              roleId: 'rks5zfzdj'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'CTF Y2',
              roleId: 'rks5zfzdk'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'CTF Y3',
              roleId: 'rks5zfzdl'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'CTF Y4',
              roleId: 'rks5zfzdm'
            },
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              isRFIManager: false,
              name: 'CTF Y5',
              roleId: 'rks5zfzdn'
            }
          ],
          umpire: false,
          uniqid: 'Red-1',
          visibleTo: []
        },
        {
          color: '#0d0',
          dirty: false,
          iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
          name: 'Green Force',
          overview: 'Green force.',
          roles: [],
          umpire: false,
          uniqid: 'green-force'
        }
      ],
      name: 'Forces',
      selectedForce: ''
    },
    overview: {
      dirty: false,
      gameDate: '2021-05-13T16:12',
      gameDescription: '',
      gameTurnTime: {
        millis: 240000,
        unit: 'millis'
      },
      name: 'Overview - settings',
      realtimeTurnTime: 300000,
      showAccessCodes: true,
      timeWarning: 60000,
      logPlayerActivity: true,
      turnPresentation: 'Natural'
    }
  },
  gameTurn: 3,
  infoType: true,
  messageType: 'InfoMessage',
  name: 'wargame-kzod28lc',
  phase: 'planning',
  turnEndTime: '2022-02-15T16:55:11+00:00',
  wargameInitiated: false,
  wargameTitle: 'Small wargame'
}

export default wargame
