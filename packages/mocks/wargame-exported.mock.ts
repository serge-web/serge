import { Wargame } from "@serge/custom-types"
import { LaydownTypes, Phase } from "@serge/config"
import { ParticipantCustom } from "@serge/custom-types/participant"
import { PARTICIPANT_CUSTOM } from '@serge/config'

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
          assets: [
            {
              condition: 'Full capability',
              contactId: 'C713',
              history: [
                {
                  route: ['R23'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 0
                },
                {
                  route: ['P22'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 1
                },
                {
                  route: ['P21'],
                  status: {
                    speedKts: 30,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              comprising: [
                {
                  condition: 'Full capability',
                  contactId: 'C964',
                  history: [
                  ],
                  name: 'Frigate A',
                  perceptions: [{
                    by: 'Red',
                    force: 'Blue',
                    name: 'Frigate A Perceived Name'
                  }],
                  platformTypeId: 'dummy-val',
                  hosting: [
                    {
                      condition: 'Full capability',
                      contactId: 'C721',
                      history: [
                      ],
                      name: 'Dart 45',
                      perceptions: [{
                        by: 'Red',
                        force: 'Blue',
                        name: 'Unknown UAV',
                        typeId: 'Unmanned-Airborne-Vehicle',
                      }],
                      plannedTurns: [],
                      platformTypeId: 'dummy-val',
                      status: {
                        state: 'Landed'
                      },
                      uniqid: 'a0pra43302'
                    },
                    {
                      condition: 'Full capability',
                      contactId: 'C932',
                      history: [
                      ],
                      name: 'Dart 46',
                      perceptions: [],
                      plannedTurns: [],
                      platformTypeId: 'dummy-val',
                      status: {
                        state: 'Landed'
                      },
                      uniqid: 'a0pra17943'
                    }
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  uniqid: 'a0prbr6441'
                },
                {
                  condition: 'Full capability',
                  contactId: 'C653',
                  history: [
                  ],
                  name: 'MCM Delta',
                  perceptions: [],
                  platformTypeId: 'dummy-val',
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  uniqid: 'a0traa6790'
                }
              ],
              name: 'CTF 511',
              perceptions: [{
                by: 'Red',
                force: 'Blue',
                name: 'BRIT',
                typeId: 'task-group'
              }],
              plannedTurns: [
                {
                  route: [
                    'Q19',
                    'Q18'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'Q17',
                    'P16'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 5
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'P19',
              status: {
                speedKts: 20,
                state: 'Transiting'
              },
              uniqid: 'a0pra5431'
            },
            {
              condition: 'Full capability',
              contactId: 'C043',
              history: [
                {
                  route: ['P22'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Frigate',
              hosting: [
                {
                  condition: 'Full capability',
                  contactId: 'C572',
                  history: [
                  ],
                  name: 'Merlin',
                  perceptions: [{
                    by: 'Red',
                    force: 'Blue',
                    typeId: 'helicopter'
                  }],
                  plannedTurns: [],
                  platformTypeId: 'dummy-val',
                  status: {
                    state: 'Landed'
                  },
                  uniqid: 'a0pra11002'
                },
                {
                  condition: 'Full capability',
                  contactId: 'C591',
                  history: [
                  ],
                  name: 'Dart 42',
                  perceptions: [],
                  plannedTurns: [],
                  platformTypeId: 'dummy-val',
                  status: {
                    state: 'Landed'
                  },
                  uniqid: 'a0pra18702'
                }
              ],
              perceptions: [{
                by: 'Red',
                force: 'Blue',
                name: 'Frigate Perceived Name',
                typeId: 'frigate'
              }],
              plannedTurns: [
                {
                  route: [
                    'Q21',
                    'Q20'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'Q19',
                    'P18'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 5
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'P21',
              status: {
                speedKts: 20,
                state: 'Transiting'
              },
              uniqid: 'a0pra00001'
            },
            {
              condition: 'Full capability',
              contactId: 'C072',
              history: [
              ],
              name: 'MPA',
              perceptions: [],
              plannedTurns: [],
              platformTypeId: 'dummy-val',
              position: 'C17',
              status: {
                state: 'Landed'
              },
              uniqid: 'a0pra00002'
            },
            {
              condition: 'Full capability',
              contactId: 'C012',
              history: [
                {
                  route: ['S23'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Tanker',
              perceptions: [{
                by: 'Red',
                force: 'Blue',
                typeId: ''
              }],
              plannedTurns: [
                {
                  route: [
                    'O20',
                    'O19'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'O18',
                    'O17'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'N16',
                    'M16'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 6
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'O21',
              status: {
                speedKts: 20,
                state: 'Transiting'
              },
              uniqid: 'a0pra00003'
            }
          ],
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
          assets: [
            {
              condition: 'Full capability',
              contactId: 'C065',
              history: [
                {
                  route: ['M07'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 0
                },
                {
                  status: {
                    state: 'Moored'
                  },
                  turn: 1
                },
                {
                  route: ['N05', 'N04'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              locationPending: LaydownTypes.ForceLaydown,
              name: 'Dhow-A',
              perceptions: [{
                by: 'Blue',
              }],
              plannedTurns: [
                {
                  route: [
                    'L04', 'K05'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  status: {
                    state: 'Moored'
                  },
                  turn: 4
                },
                {
                  route: [
                    'I06'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 5
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'M04',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000100'
            },
            {
              condition: 'Full capability',
              contactId: 'C105',
              history: [
                {
                  route: ['N10'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              locationPending: LaydownTypes.ForceLaydown,
              hosting: [
                {
                  condition: 'Full capability',
                  contactId: 'C158',
                  history: [
                  ],
                  name: 'Bog Draft',
                  perceptions: [],
                  plannedTurns: [],
                  platformTypeId: 'dummy-val',
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  uniqid: 'a0pra153102'
                }
              ],
              name: 'Dhow-B',
              perceptions: [{
                by: 'Blue',
                force: 'Green',
                name: 'SHU’AI',
                typeId: 'fishing-vessel'
              }],
              plannedTurns: [
                {
                  route: [
                    'L09'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 4
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 5
                },
                {
                  route: [
                    'K09'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  route: [
                    'J09'
                  ],
                  status: {
                    speedKts: 30,
                    state: 'Transiting'
                  },
                  turn: 7
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'M10',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000101'
            },
            {
              condition: 'Full capability',
              contactId: 'C008',
              history: [
                {
                  route: ['Q18'],
                  status: {
                    state: 'Moored'
                  },
                  turn: 2
                }
              ],
              locationPending: LaydownTypes.ForceLaydown,
              name: 'Dhow-C',
              perceptions: [],
              plannedTurns: [
                {
                  route: [
                    'P16'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  route: [
                    'O16'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'N15'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 5
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'P17',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000102'
            },
            {
              condition: 'Full capability',
              contactId: 'C076',
              history: [
                {
                  route: ['Q12'],
                  status: {
                    state: 'Inactive'
                  },
                  turn: 2
                }
              ],
              locationPending: LaydownTypes.ForceLaydown,
              name: 'Missile-A',
              perceptions: [],
              plannedTurns: [],
              platformTypeId: 'dummy-val',
              position: 'Q12',
              status: {
                state: 'Inactive'
              },
              uniqid: 'a0pra000103'
            }
          ],
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
          assets: [
            {
              condition: 'Full capability',
              contactId: 'C015',
              history: [
                {
                  route: ['H00'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Tanker-1',
              perceptions: [{
                by: 'Blue',
                force: 'Green',
                name: 'OSAKA',
                typeId: 'merchant-vessel'
              }],
              plannedTurns: [
                {
                  route: [
                    'I04',
                    'I05',
                    'I06',
                    'I06'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  route: [
                    'I07',
                    'I08',
                    'I09',
                    'I10'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'I11',
                    'J11',
                    'J12',
                    'J13'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'K14',
                    'L14',
                    'M15',
                    'M16'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  route: [
                    'M17',
                    'M18',
                    'N18',
                    'N19'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 7
                },
                {
                  route: [
                    'O20',
                    'O21',
                    'P21',
                    'Q22'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 8
                },
                {
                  status: {
                    state: 'Moored'
                  },
                  turn: 9
                },
                {
                  status: {
                    state: 'Moored'
                  },
                  turn: 10
                },
                {
                  status: {
                    state: 'Moored'
                  },
                  turn: 11
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'H03',
              status: {
                speedKts: 20,
                state: 'Transiting'
              },
              uniqid: 'a0pra000200'
            },
            {
              condition: 'Full capability',
              contactId: 'C081',
              history: [
                {
                  route: ['C00'],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Tanker-2',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  name: 'ARUNA 12',
                  typeId: 'merchant-vessel'
                },
                {
                  by: 'Red',
                  force: 'Green',
                  name: 'BARLAY',
                  typeId: 'merchant-vessel'
                }],
              plannedTurns: [
                {
                  route: [
                    'C00',
                    'C01',
                    'C02',
                    'C03'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  route: [
                    'C04',
                    'C05',
                    'C06',
                    'C07'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'D07',
                    'E08',
                    'F08',
                    'G08'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'H08',
                    'H09',
                    'I09',
                    'I10'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  route: [
                    'I11',
                    'J11',
                    'J12',
                    'J13'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 7
                },
                {
                  route: [
                    'K14',
                    'L14',
                    'M15',
                    'M16'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 8
                },
                {
                  route: [
                    'M17',
                    'M18',
                    'N18',
                    'N19'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 9
                },
                {
                  route: [
                    'O20',
                    'O21',
                    'P21',
                    'Q22'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 10
                },
                {
                  route: [
                    'R22',
                    'S22',
                    'T22',
                    'U23'
                  ],
                  status: {
                    speedKts: 20,
                    state: 'Transiting'
                  },
                  turn: 11
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'C00',
              status: {
                state: 'Moored'
              },
              uniqid: 'a0pra000201'
            },
            {
              condition: 'Full capability',
              contactId: 'C116',
              history: [
                {
                  route: ['M02'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Fisher-A',
              perceptions: [{
                by: 'Blue',
                force: 'Green',
                name: 'JALIBUT',
                typeId: 'merchant-vessel'
              }],
              plannedTurns: [
                {
                  route: [
                    'J03',
                    'I04'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 4
                },
                {
                  route: [
                    'I05',
                    'I06'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'I07',
                    'I08'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 7
                },
                {
                  route: [
                    'J07',
                    'K07'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 8
                },
                {
                  route: [
                    'L06',
                    'M06'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 9
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 10
                },
                {
                  route: [
                    'M05',
                    'M04'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 11
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'K03',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000202'
            },
            {
              condition: 'Full capability',
              contactId: 'C026',
              history: [
                {
                  route: ['N08'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Fisher-B',
              perceptions: [{
                by: 'Blue',
                force: 'Green',
                typeId: 'merchant-vessel'
              }],
              plannedTurns: [
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 3
                },
                {
                  route: [
                    'K10',
                    'K09'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 4
                },
                {
                  route: [
                    'K08',
                    'K07'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'K06',
                    'M06'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 7
                },
                {
                  route: [
                    'N06',
                    'N07'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 8
                },
                {
                  route: [
                    'M08',
                    'L08'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 9
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 10
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 11
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 12
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'L09',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000203'
            },
            {
              condition: 'Full capability',
              contactId: 'C115',
              history: [
                {
                  route: ['N11'],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 2
                }
              ],
              name: 'Fisher-C',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  name: 'BOUM 3',
                  typeId: 'merchant-vessel'
                },
                {
                  by: 'Red',
                  force: 'Green',
                  name: 'BOUM 3',
                  typeId: 'merchant-vessel'
                }
              ],
              plannedTurns: [
                {
                  route: [
                    'K10',
                    'J09'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 3
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 4
                },
                {
                  route: [
                    'K08',
                    'K07'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 5
                },
                {
                  route: [
                    'K06',
                    'M06'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 6
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 7
                },
                {
                  route: [
                    'N06',
                    'N07'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 8
                },
                {
                  route: [
                    'M08',
                    'L08'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 9
                },
                {
                  status: {
                    state: 'Fishing'
                  },
                  turn: 10
                },
                {
                  route: [
                    'M09',
                    'N08'
                  ],
                  status: {
                    speedKts: 10,
                    state: 'Transiting'
                  },
                  turn: 11
                }
              ],
              platformTypeId: 'dummy-val',
              position: 'N11',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000204'
            }
          ],
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
      gameTurnTime: { "unit": "millis", "millis": 5400000 },
      name: 'Overview - settings',
      realtimeTurnTime: 600000,
      showAccessCodes: true,
      timeWarning: 60000,
      logPlayerActivity: true
    },
    templates: {
      templates: [
        {
          completed: false,
          details: {
            properties: {
              Reference: {
                title: 'Reference',
                type: 'string',
                format: 'text'
              },
              Title: {
                title: 'Title',
                type: 'string',
                format: 'text'
              },
              Forces: {
                format: 'table',
                items: {
                  minItems: 1,
                  properties: {
                    assets: {
                      format: 'table',
                      items: {
                        properties: {
                          location: {
                            maxLength: 3,
                            type: 'string'
                          },
                          name: {
                            type: 'string'
                          },
                          visibleTo: {
                            format: 'table',
                            items: {
                              properties: {
                                Force: {
                                  'enum': [
                                    'Blue',
                                    'Red',
                                    'Green'
                                  ],
                                  type: 'string'
                                }
                              }
                            },
                            type: 'array'
                          }
                        }
                      },
                      minItems: 1,
                      type: 'array'
                    },
                    force: {
                      'enum': [
                        'Blue',
                        'Red',
                        'Green'
                      ],
                      propertyOrder: 100,
                      type: 'string'
                    }
                  }
                },
                minItems: 1,
                type: 'array'
              }
            },
            title: 'State of World (laydown 2)',
            type: 'object'
          },
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'State of World L',
          _id: 'k16eedkp',
          _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Daily intentions',
          details: {
            type: 'object',
            properties: {
              TurnNumber: {
                title: 'Turn',
                type: 'string',
                format: 'number'
              },
              OverallIntentions: {
                title: 'Overall intentions',
                type: 'string',
                format: 'textarea'
              },
              Orders: {
                items: {
                  properties: {
                    Unit: {
                      title: 'Unit',
                      type: 'string',
                      format: 'text'
                    },
                    Tasking: {
                      title: 'Tasking',
                      type: 'string',
                      format: 'textarea'
                    },
                    SearchPolicy: {
                      title: 'Search Policy',
                      type: 'string',
                      format: 'textarea'
                    },
                    ActionOnContact: {
                      title: 'Action on Contact',
                      type: 'string',
                      'enum': [
                        'Ignore',
                        'Evade',
                        'Covert Trail',
                        'Overt Trail',
                        'Harass'
                      ]
                    },
                    AnyOtherComments: {
                      title: 'Any other comments',
                      type: 'string',
                      format: 'textarea'
                    }
                  },
                  type: 'object'
                },
                title: 'Orders',
                type: 'array',
                format: 'table',
                minItems: 1
              }
            },
            title: 'Daily Intent',
            required: [
              'OverallIntentions',
              'Orders'
            ]
          },
          completed: false,
          _id: 'k16eedkn',
          _rev: '1-cc8e8cdb01447959c266761066448382'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Link',
          details: {
            type: 'object',
            properties: {
              Title: {
                type: 'string',
                format: 'text'
              },
              URL: {
                type: 'string',
                format: 'url'
              }
            },
            title: 'Link',
            format: 'grid'
          },
          completed: false,
          _id: 'k16eedkm',
          _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Chat',
          details: {
            type: 'object',
            properties: {
              content: {
                type: 'string',
                format: 'textarea',
                options: {
                  inputAttributes: {
                    placeholder: 'type the text'
                  }
                }
              }
            },
            title: 'Chat',
            format: 'grid'
          },
          completed: false,
          _id: 'k16eedkl',
          _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
        },
        {
          completed: false,
          details: {
            title: "COA",
            type: "object",
            format: "grid",
            required: [
              "Reference",
              "Title",
              "LOCATION",
              "PRESCRIPTED",
              "VISIBILITY",
              "COA_SUPPORTS_AS",
              "TARGET",
              "STRAT_COMMS",
              "OBJECTIVES_TURN",
              "OBJECTIVES_OVERALL",
              "TARGET_CENTRE_OF_GRAVITY",
              "DESIRED_ENDSTATE_TURN",
              "DESIRED_ENDSTATE_OVERALL",
              "EFFECTS_AND_ACTIONS",
              "SEQUENCING_AND_PHASES",
              "ADVERSARY_UNDERSTANDING",
              "ADVERSARY_REACTION_COUNTER_ACTION",
              "ORBAT",
              "TIMINGS",
              "DEPENDENCIES",
              "AdjudicationSupport",
              "PEER_REVIEW",
              "INSIGHT"
            ],
            properties: {
              Reference: {
                type: "string",
                title: "Reference (sys generated)",
                readonly: "readonly"
              },
              Title: {
                type: "string",
                title: "*COA / Op Name",
                format: "textarea"
              },
              LOCATION: {
                title: "*Location of activities in this turn",
                type: "object",
                properties: {
                  region: {
                    title: "Region",
                    type: "string",
                    enum: [
                      "Asia Pacific",
                      "Europe",
                      "Americas"
                    ],
                    default: "Europe"
                  },
                  Europe: {
                    title: "Country",
                    type: "string",
                    enum: [
                      "United Kingdom",
                      "Germany"
                    ],
                    options: {
                      dependencies: {
                        region: "Europe"
                      }
                    }
                  },
                  Americas: {
                    title: "Country",
                    type: "string",
                    enum: [
                      "United State of America",
                      "Brazil"
                    ],
                    options: {
                      dependencies: {
                        region: "Americas"
                      }
                    }
                  },
                  AsiaPacific: {
                    title: "Country",
                    type: "string",
                    enum: [
                      "India",
                      "China"
                    ],
                    options: {
                      dependencies: {
                        region: "Asia Pacific"
                      }
                    }
                  }
                }
              },
              PRESCRIPTED: {
                type: "boolean",
                format: "checkbox",
                title: "*Is this a pre-scripted activity? E.g. DXP",
                default: "Yes",
                items: {
                  type: "string",
                  enum: [
                    "Yes",
                    "No"
                  ]
                }
              },
              VISIBILITY: {
                type: "string",
                title: "*Intended visibility to adversary",
                enum: [
                  "Overt",
                  "Covert",
                  "Clandestine",
                  "Complex"
                ]
              },
              COA_SUPPORTS_AS: {
                type: "boolean",
                format: "checkbox",
                title: "*This COA supports / uses an AS plan / effect",
                default: "Yes",
                items: {
                  type: "string",
                  enum: [
                    "Yes",
                    "No"
                  ]
                }
              },
              TARGET: {
                type: "string",
                title: "*Target(s) – Adversary, Ally, specific audience within Adversary or allied polity etc",
                format: "textarea",
                notEmpty: true
              },
              STRAT_COMMS: {
                type: "string",
                title: "Outline of associated Strategic Communications",
                format: "textarea"
              },
              OBJECTIVES_TURN: {
                type: "string",
                title: "Objectives in this turn",
                format: "textarea"
              },
              OBJECTIVES_OVERALL: {
                type: "string",
                title: "Overall Objectives",
                format: "textarea"
              },
              TARGET_CENTRE_OF_GRAVITY: {
                type: "string",
                title: "Target’s Centre of Gravity",
                format: "textarea"
              },
              DESIRED_ENDSTATE_TURN: {
                type: "string",
                title: "*Desired Endstate in this turn",
                format: "textarea"
              },
              DESIRED_ENDSTATE_OVERALL: {
                type: "string",
                title: "Desired Endstate Overall, if NOT in this turn",
                format: "textarea"
              },
              EFFECTS_AND_ACTIONS: {
                type: "string",
                title: "*Effects and actions",
                format: "textarea"
              },
              SEQUENCING_AND_PHASES: {
                type: "string",
                title: "Sequencing and phases",
                format: "textarea"
              },
              ADVERSARY_UNDERSTANDING: {
                type: "string",
                title: "What would my adversary see / understand of this activity / messaging?",
                format: "textarea"
              },
              ADVERSARY_REACTION_COUNTER_ACTION: {
                properties: {
                  ADVERSARY_MLCOA: {
                    title: "Adversary MLCOA",
                    type: "string",
                    format: "textarea"
                  },
                  MLCOA_RESPONSE: {
                    title: "Own Response",
                    type: "string",
                    format: "textarea"
                  },
                  ADVERSARY_MDCOA: {
                    title: "Adversary MDCOA",
                    type: "string",
                    format: "textarea"
                  },
                  MDCOA_RESPONSE: {
                    title: "Own Response",
                    type: "string",
                    format: "textarea"
                  }
                },
                title: "Adversary reaction & counter-action",
                type: "object"
              },
              ORBAT: {
                type: "array",
                format: "table",
                minItems: 1,
                title: "*ORBAT – FEs used (Inc logistics and enablers)",
                items: {
                  type: "object",
                  title: "FE",
                  properties: {
                    FEName: {
                      type: "string",
                      title: "FE Name",
                      enum: [
                        "Tank",
                        "Infantry",
                        "Plane",
                        "Submarine",
                        "other"
                      ]
                    },
                    Readiness: {
                      type: "string",
                      enum: [
                        "Level-1",
                        "Level-2",
                        "Level-3",
                        "Level-4",
                        "Level-5"
                      ]
                    },
                    Number: {
                      type: "number"
                    },
                    StartDate: {
                      type: "string",
                      title: "Start date",
                      format: "date",
                      options: {
                        flatpickr: {
                          wrap: false,
                          time_24hr: true,
                          dateFormat: "d/m/Y"
                        }
                      }
                    },
                    EndDate: {
                      type: "string",
                      title: "End date",
                      format: "date",
                      options: {
                        flatpickr: {
                          wrap: false,
                          time_24hr: true,
                          dateFormat: "d/m/Y"
                        }
                      }
                    }
                  }
                }
              },
              TIMINGS: {
                properties: {
                  START_PLANNING: {
                    title: "Start planning",
                    type: "string",
                    format: "date",
                    options: {
                      flatpickr: {
                        wrap: false,
                        time_24hr: true,
                        dateFormat: "d/m/Y"
                      }
                    }
                  },
                  START_DEPLOYMENT: {
                    title: "Start deployment",
                    type: "string",
                    format: "date",
                    options: {
                      flatpickr: {
                        wrap: false,
                        time_24hr: true,
                        dateFormat: "d/m/Y"
                      }
                    }
                  },
                  START_OPERATION: {
                    title: "Start Operation",
                    type: "string",
                    format: "date",
                    options: {
                      flatpickr: {
                        wrap: false,
                        time_24hr: true,
                        dateFormat: "d/m/Y"
                      }
                    }
                  },
                  END_OPERATION: {
                    title: "End Operation",
                    type: "string",
                    format: "date",
                    options: {
                      flatpickr: {
                        wrap: false,
                        time_24hr: true,
                        dateFormat: "d/m/Y"
                      }
                    }
                  },
                  END_RECOVERY: {
                    title: "End recovery",
                    type: "string",
                    format: "date",
                    options: {
                      flatpickr: {
                        wrap: false,
                        time_24hr: true,
                        dateFormat: "d/m/Y"
                      }
                    }
                  }
                },
                title: "Timings",
                type: "object",
                format: "grid"
              },
              CONTINUES_INTO_NEXT_TURN: {
                type: "boolean",
                format: "checkbox",
                title: "*Will this activity continue into next turn?",
                default: "Yes",
                items: {
                  type: "string",
                  enum: [
                    "Yes",
                    "No"
                  ]
                }
              },
              DEPENDENCIES: {
                type: "string",
                title: "Dependencies on Allied capability: Please indicate which allies (if any) and which of their capabilities you are dependent on. E.g. US Space capabilities, Allied ABO",
                format: "textarea"
              },
              AdjudicationSupport: {
                type: "array",
                format: "checkbox",
                title: "Adjudication support",
                uniqueItems: true,
                items: {
                  type: "string",
                  enum: [
                    "Space",
                    "CEMA",
                    "Influence",
                    "Logistics"
                  ]
                },
                options: {
                  grid_columns: 12
                }
              },
              PEER_REVIEW: {
                type: "string",
                title: "Peer Review by",
                format: "textarea"
              },
              INSIGHT: {
                type: "string",
                title: "Insight – What would you have done differently with other policies / permissions / risk appetite?",
                format: "textarea"
              }
            }
          },
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'COA',
          _id: 'k16eedkk',
          _rev: '1-4c3969d57f8cf470858dd1819ee5c2e8'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'RFI',
          details: {
            format: "grid",
            properties: {
              Reference: {
                readonly: "readonly",
                title: "Reference (sys generated)",
                options: {
                  grid_columns: 4
                },
                type: "string"
              },
              Title: {
                format: "text",
                options: {
                  grid_columns: 8
                },
                title: "Title",
                type: "string"
              },
              RFI: {
                format: "textarea",
                options: {
                  grid_columns: 12
                },
                title: "RFI",
                type: "string"
              },
              Priority: {
                enum: [
                  "High",
                  "Medium",
                  "Low"
                ],
                title: "Priority",
                type: "string"
              },
              FAO: {
                enum: [
                  "J2",
                  "SME – CEMA",
                  "SME – Space",
                  "SME – Logs & Med",
                  "SME – IO",
                  "SME – White",
                  "Actor – White",
                  "Actor – Red",
                  "Other"
                ],
                title: "FAO",
                type: "string"
              },
              ResponseRequiredBy: {
                enum: [
                  "Within an hour",
                  "NLT 1300",
                  "NLT 1600",
                  "Not urgent"
                ],
                title: "Response required by",
                type: "string"
              }
            },
            required: [
              "Reference",
              "Title",
              "FAO",
              "RFI",
              "Priority",
              "ResponseRequiredBy"
            ],
            title: "RFI",
            type: "object"
          },
          completed: false,
          _id: 'k16eedkj',
          _rev: '1-683379b9418a2ba688eb4a8dfec4de11'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Message',
          details: {
            type: 'object',
            properties: {
              title: {
                type: 'string'
              },
              content: {
                type: 'string',
                format: 'textarea'
              }
            },
            title: 'Message',
            format: 'grid'
          },
          completed: false,
          _id: 'k16eedki',
          _rev: '1-7de33e447b392eeaf7164f4ec331bc57'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'Weather forecast',
          details: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                title: 'Title'
              },
              Location: {
                type: 'object',
                properties: {
                  Lat: {
                    type: 'number'
                  },
                  'Lat Hemi': {
                    type: 'string',
                    'enum': [
                      'N',
                      'S'
                    ]
                  },
                  Long: {
                    type: 'number'
                  },
                  'Long Hemi': {
                    type: 'string',
                    'enum': [
                      'E',
                      'W'
                    ]
                  }
                },
                format: 'grid'
              },
              'Valid from': {
                type: 'string',
                format: 'datetime-local',
                options: {
                  flatpickr: {
                    wrap: true,
                    time_24hr: true,
                    allowInput: true
                  }
                }
              },
              'Valid until': {
                type: 'string',
                format: 'datetime-local',
                options: {
                  flatpickr: {
                    wrap: true,
                    time_24hr: true,
                    allowInput: true
                  }
                }
              },
              Forecast: {
                type: 'string',
                format: 'textarea'
              }
            },
            title: 'Weather Forecast'
          },
          completed: false,
          _id: 'k16eedkh',
          _rev: '1-f332e0104a371b590346b66dc8e9fa2b'
        },
        {
          lastUpdated: '2019-09-30T12:37:26.704Z',
          title: 'Machinery failure',
          details: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                Title: 'Title'
              },
              Date: {
                type: 'string',
                format: 'datetime-local',
                options: {
                  flatpickr: {
                    wrap: true,
                    time_24hr: true,
                    allowInput: true
                  }
                }
              },
              Status: {
                type: 'string',
                'enum': [
                  'Minor',
                  'Major',
                  'Critical'
                ]
              },
              Description: {
                type: 'string',
                format: 'textarea'
              }
            },
            title: 'Machinery Failure'
          },
          completed: false,
          _id: 'k16eedkg',
          _rev: '1-80fc0c1feca8eb6d812d3fa2068ffe89'
        },
        {
          completed: false,
          details: {
            properties: {
              Forces: {
                format: 'table',
                items: {
                  minItems: 1,
                  properties: {
                    assets: {
                      format: 'table',
                      items: {
                        properties: {
                          history: {
                            format: 'table',
                            items: {
                              properties: {
                                Route: {
                                  format: 'table',
                                  items: {
                                    properties: {
                                      Location: {
                                        maxLength: 3,
                                        type: 'string'
                                      }
                                    }
                                  },
                                  minItems: 1,
                                  propertyOrder: 400,
                                  type: 'array'
                                },
                                Speed: {
                                  propertyOrder: 300,
                                  type: 'number'
                                },
                                State: {
                                  propertyOrder: 200,
                                  type: 'string'
                                },
                                Turn: {
                                  propertyOrder: 100,
                                  type: 'string'
                                }
                              }
                            },
                            minItems: 1,
                            type: 'array'
                          },
                          name: {
                            propertyOrder: 100,
                            type: 'string'
                          },
                          planned: {
                            format: 'table',
                            items: {
                              properties: {
                                Route: {
                                  format: 'table',
                                  items: {
                                    properties: {
                                      Location: {
                                        maxLength: 3,
                                        type: 'string'
                                      }
                                    }
                                  },
                                  minItems: 1,
                                  propertyOrder: 400,
                                  type: 'array'
                                },
                                Speed: {
                                  propertyOrder: 300,
                                  type: 'number'
                                },
                                State: {
                                  propertyOrder: 200,
                                  type: 'string'
                                },
                                Turn: {
                                  propertyOrder: 100,
                                  type: 'string'
                                }
                              }
                            },
                            minItems: 1,
                            propertyOrder: 2000,
                            type: 'array'
                          },
                          visibleTo: {
                            format: 'table',
                            items: {
                              properties: {
                                Force: {
                                  'enum': [
                                    'Blue',
                                    'Red',
                                    'Green'
                                  ],
                                  type: 'string'
                                }
                              }
                            },
                            propertyOrder: 300,
                            type: 'array'
                          }
                        }
                      },
                      minItems: 1,
                      type: 'array'
                    },
                    force: {
                      'enum': [
                        'Blue',
                        'Red',
                        'Green'
                      ],
                      propertyOrder: 100,
                      type: 'string'
                    }
                  }
                },
                minItems: 1,
                type: 'array'
              }
            },
            title: 'State of World (Full 2)',
            type: 'object'
          },
          lastUpdated: '2019-12-20T15:57:11.519Z',
          title: 'State of world (full 2)',
          _id: '2019-12-20T15:57:11.519Z',
          _rev: '1-4bd7b0b5488182f39f10d5203bb1fad8'
        }
      ]
    },
    platformTypes: {
      dirty: false,
      name: 'Platform Types',
      platformTypes: [
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Illegally boarded',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'fishing-vessel.svg',
          name: 'Fishing vessel',
          speedKts: [
            10,
            20
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Fishing'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a1"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'frigate.svg',
          name: 'Frigate',
          speedKts: [
            10,
            20,
            30
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Stopped'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a2"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'boghammer.svg',
          name: 'Boghammer',
          speedKts: [
            10,
            20,
            30,
            40
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Stopped'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a3"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Destroyed'
          ],
          icon: 'torpedo.svg',
          name: 'torpedo',
          speedKts: [
            10
          ],
          states: [
            {
              mobile: false,
              name: 'Onboard'
            },
            {
              deploying: true,
              mobile: true,
              name: 'Deploy'
            },
            {
              mobile: true,
              name: 'Transiting'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a4"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'fast-attack-craft.svg',
          name: 'Fast attack craft',
          speedKts: [
            10,
            20,
            30,
            40,
            50
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Stopped'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a5"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'mcmv.svg',
          name: 'MCMV',
          speedKts: [
            10
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Stopped'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a6"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Destroyed'
          ],
          icon: 'helicopter.svg',
          name: 'Helicopter',
          speedKts: [],
          states: [
            {
              mobile: true,
              name: 'Airborne'
            },
            {
              mobile: false,
              name: 'Landed'
            },
            {
              mobile: false,
              name: 'Preparing for launch'
            }
          ],
          travelMode: 'air',
          "uniqid": "a7"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Destroyed'
          ],
          icon: 'fixed-wing-aircraft.svg',
          name: 'Fixed wing aircraft',
          speedKts: [],
          states: [
            {
              mobile: true,
              name: 'Airborne'
            },
            {
              mobile: false,
              name: 'Landed'
            },
            {
              mobile: false,
              name: 'Preparing for launch'
            }
          ],
          travelMode: 'air',
          "uniqid": "a8"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Destroyed'
          ],
          icon: 'coastal-radar-site.svg',
          name: 'Coastal radar site',
          states: [
            {
              mobile: false,
              name: 'Inactive'
            },
            {
              mobile: false,
              name: 'Active'
            },
            {
              mobile: false,
              name: 'Engaging'
            }
          ],
          travelMode: 'land',
          "uniqid": "a9"
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Illegally boarded',
            'Immobile',
            'Sinking',
            'Destroyed'
          ],
          icon: 'merchant-vessel.svg',
          name: 'Merchant vessel',
          speedKts: [
            10,
            20
          ],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Stopped'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea',
          "uniqid": "a10"
        }
      ],
      selectedType: ''
    }
  },
  currentTab: 'channels',
  wargameInitiated: true,
  adminNotLoggedIn: false
}

export default game