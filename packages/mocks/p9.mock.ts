import { Wargame } from '@serge/custom-types';

const game: Wargame = {
  adjudicationStartTime: '2021-08-10T16:12:25+01:00',
  wargameList: [],
  data: {
    channels: {
      channels: [
        {
          name: 'Planning',
          channelType: 'ChannelPlanning',
          participants: [
            {
              force: 'CTF A',
              forceUniqid: 'Blue',
              pType: 'ParticipantPlanning',
              roles: [],
              subscriptionId: 'hukqr',
              templates: [
                {
                  _id: 'k16eedkm',
                  title: 'COA'
                }
              ]
            },
            {
              force: 'Red',
              forceUniqid: 'Red',
              pType: 'ParticipantPlanning',
              roles: [],
              subscriptionId: 'hukqr',
              templates: [
                {
                  _id: 'k16eedkm',
                  title: 'COA'
                }
              ]
            },
            {
              force: 'White',
              pType: 'ParticipantPlanning',
              forceUniqid: 'umpire',
              roles: ['rkrlw6f5f'],
              subscriptionId: 'r4yp',
              templates: []
            }
          ],
          uniqid: 'channel-planning-a'
        },
        {
          name: 'Red',
          channelType: 'ChannelChat',
          participants: [
            {
              force: 'CTF Y',
              forceUniqid: 'Red',
              roles: [],
              subscriptionId: '7bayi',
              pType: 'ParticipantChat'
            },
            {
              force: 'White',
              forceUniqid: 'umpire',
              roles: ['rkrlw6f5f'],
              subscriptionId: 'h2my2k',
              pType: 'ParticipantChat'
            }
          ],
          uniqid: 'channel-koirfxsx'
        },
        {
          name: 'Blue RFI',
          channelType: 'ChannelCustom',
          participants: [
            {
              pType: 'ParticipantCustom',
              force: 'CTF B',
              forceUniqid: 'Blue',
              roles: [],
              subscriptionId: 'etkkn',
              templates: [
                {
                  _id: '2021-08-23T07:58:43.425Z',
                  title: 'RFI'
                }
              ]
            },
            {
              force: 'White',
              pType: 'ParticipantCustom',
              forceUniqid: 'umpire',
              roles: ['rkrlw6f5f'],
              subscriptionId: 'qhnqr',
              templates: []
            }
          ],
          uniqid: 'channel-koirh7ok'
        },
        {
          name: 'Red RFI',
          channelType: 'ChannelCustom',
          participants: [
            {
              force: 'White',
              pType: 'ParticipantCustom',
              forceUniqid: 'umpire',
              roles: ['rks5zfzd5'],
              subscriptionId: 'lity',
              templates: []
            },
            {
              force: 'CTF Y',
              pType: 'ParticipantCustom',
              forceUniqid: 'Red',
              roles: [],
              subscriptionId: '3b3ww',
              templates: [
                {
                  _id: '2021-08-23T07:58:43.425Z',
                  title: 'RFI'
                }
              ]
            }
          ],
          uniqid: 'channel-koirji8u'
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
          iconURL: 'default_img/umpireDefault.png',
          name: 'White',
          overview: 'Umpire force.',
          roles: [
            {
              isGameControl: true,
              isInsightViewer: true,
              isObserver: true,
              name: 'Game Control',
              roleId: 'rkrlw6f5f'
            }
          ],
          umpire: true,
          uniqid: 'umpire'
        },
        {
          assets: [
            {
              comprising: [
                {
                  condition: 'Full capability',
                  contactId: 'C964',
                  history: [],
                  hosting: [
                    {
                      condition: 'Full capability',
                      contactId: 'C721',
                      name: 'Dart 45',
                      perceptions: [
                        {
                          by: 'Red',
                          force: 'Blue',
                          name: 'Unknown UAV',
                          typeId: 'Unmanned-Airborne-Vehicle'
                        }
                      ],
                      platformType: 'Unmanned-Airborne-Vehicle',
                      platformTypeId: 'id-uav',
                      status: {
                        state: 'Landed'
                      },
                      uniqid: 'a0pra43302'
                    },
                    {
                      condition: 'Full capability',
                      contactId: 'C932',
                      name: 'Dart 46',
                      perceptions: [],
                      platformType: 'Unmanned-Airborne-Vehicle',
                      platformTypeId: 'id-uav',
                      status: {
                        state: 'Landed'
                      },
                      uniqid: 'a0pra17943'
                    }
                  ],
                  name: 'Frigate A',
                  platformTypeId: 'id-frigate',
                  perceptions: [
                    {
                      by: 'Red',
                      force: 'Blue',
                      name: 'Frigate A Perceived Name'
                    }
                  ],
                  platformType: 'frigate',
                  uniqid: 'a0prbr6441'
                },
                {
                  condition: 'Full capability',
                  contactId: 'C653',
                  name: 'MCM Delta',
                  perceptions: [],
                  platformType: 'MCMV',
                  platformTypeId: 'id-mcm',
                  uniqid: 'a0traa6790'
                }
              ],
              condition: 'Full capability',
              contactId: 'C713',
              name: 'CTF 511',
              perceptions: [
                {
                  by: 'Red',
                  force: 'Blue',
                  name: 'BRIT',
                  typeId: 'task-group'
                }
              ],
              platformType: 'task-group',
              platformTypeId: 'id-task-group',
              position: '8318adfffffffff',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra5431'
            },
            {
              condition: 'Full capability',
              contactId: 'C043',
              hosting: [
                {
                  condition: 'Full capability',
                  contactId: 'C572',
                  history: [],
                  name: 'Merlin',
                  perceptions: [
                    {
                      by: 'Red',
                      force: 'Blue',
                      typeId: 'helicopter'
                    }
                  ],
                  plannedTurns: [],
                  platformType: 'helicopter',
                  platformTypeId: 'id-helo',
                  status: {
                    state: 'Landed'
                  },
                  uniqid: 'a0pra11002'
                },
                {
                  condition: 'Full capability',
                  contactId: 'C591',
                  history: [],
                  name: 'Dart 42',
                  perceptions: [],
                  plannedTurns: [],
                  platformType: 'Unmanned-Airborne-Vehicle',
                  platformTypeId: 'id-uav',
                  status: {
                    state: 'Landed'
                  },
                  uniqid: 'a0pra18702'
                }
              ],
              name: 'Frigate',
              perceptions: [
                {
                  by: 'Red',
                  force: 'Blue',
                  name: 'Frigate Perceived Name',
                  typeId: 'frigate'
                }
              ],
              platformType: 'frigate',
              platformTypeId: 'id-frigate',
              position: '8318a3fffffffff',
              status: {
                speedKts: 20,
                state: 'Transiting'
              },
              uniqid: 'a0pra00001'
            },
            {
              condition: 'Full capability',
              contactId: 'C072',
              name: 'MPA',
              perceptions: [],
              platformType: 'fixed-wing-aircraft',
              platformTypeId: 'id-fixed-wing',
              position: '831976fffffffff',
              status: {
                state: 'Landed'
              },
              uniqid: 'a0pra00002'
            },
            {
              condition: 'Full capability',
              contactId: 'C012',
              name: 'Tanker',
              perceptions: [
                {
                  by: 'Red',
                  force: 'Blue',
                  typeId: ''
                }
              ],
              platformType: 'merchant-vessel',
              platformTypeId: 'id-merchant',
              position: '83181cfffffffff',
              uniqid: 'a0pra00003'
            }
          ],
          color: '#00F',
          dirty: false,
          iconURL: 'default_img/umpireDefault.png',
          name: 'Blue',
          overview: 'Blue force.',
          roles: [
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO',
              roleId: 'rk116f5e'
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
              name: 'Dhow-A',
              perceptions: [
                {
                  by: 'Blue'
                }
              ],
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              position: '830932fffffffff',
              uniqid: 'a0pra000100'
            },
            {
              condition: 'Full capability',
              contactId: 'C105',
              hosting: [
                {
                  condition: 'Full capability',
                  contactId: 'C158',
                  name: 'Bog Draft',
                  perceptions: [],
                  platformType: 'boghammer',
                  platformTypeId: 'id-boghammer',
                  status: {
                    state: 'Landed'
                  },
                  uniqid: 'a0pra153102'
                }
              ],
              name: 'Dhow-B',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  name: 'SHU’AI',
                  typeId: 'fishing-vessel'
                }
              ],
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              position: '830910fffffffff',
              uniqid: 'a0pra000101'
            },
            {
              condition: 'Full capability',
              contactId: 'C008',
              name: 'Dhow-C',
              perceptions: [],
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              position: '830765fffffffff',
              uniqid: 'a0pra000102'
            },
            {
              condition: 'Full capability',
              contactId: 'C076',
              name: 'Missile-A',
              perceptions: [],
              platformType: 'coastal-radar-site',
              platformTypeId: 'id-missile',
              position: '830744fffffffff',
              uniqid: 'a0pra000103'
            }
          ],
          color: '#F00',
          dirty: false,
          iconURL: 'default_img/umpireDefault.png',
          name: 'Red',
          overview: 'Red force.',
          roles: [
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO',
              roleId: 'rkr226f5e'
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
              name: 'Tanker-1',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  name: 'OSAKA',
                  typeId: 'merchant-vessel'
                }
              ],
              platformType: 'merchant-vessel',
              platformTypeId: 'id-merchant',
              position: '831b21fffffffff',
              uniqid: 'a0pra000200'
            },
            {
              condition: 'Full capability',
              contactId: 'C081',
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
                }
              ],
              platformType: 'merchant-vessel',
              platformTypeId: 'id-merchant',
              position: '831b31fffffffff',
              status: {
                state: 'Moored'
              },
              uniqid: 'a0pra000201'
            },
            {
              condition: 'Full capability',
              contactId: 'C116',
              name: 'Fisher-A',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  name: 'JALIBUT',
                  typeId: 'merchant-vessel'
                }
              ],
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              uniqid: 'a0pra000202'
            },
            {
              condition: 'Full capability',
              contactId: 'C026',
              name: 'Fisher-B',
              perceptions: [
                {
                  by: 'Blue',
                  force: 'Green',
                  typeId: 'merchant-vessel'
                }
              ],
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              position: '83064bfffffffff',
              status: {
                speedKts: 10,
                state: 'Transiting'
              },
              uniqid: 'a0pra000203'
            },
            {
              condition: 'Full capability',
              contactId: 'C115',
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
              platformType: 'fishing-vessel',
              platformTypeId: 'id-fisher',
              uniqid: 'a0pra000204'
            }
          ],
          color: '#0F0',
          dirty: false,
          iconURL: 'default_img/umpireDefault.png',
          name: 'Green',
          overview: 'Green Shipping',
          roles: [
            {
              isGameControl: false,
              isInsightViewer: false,
              isObserver: false,
              name: 'CO',
              roleId: 'rkrlw6f33'
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
      gameDate: '2021-05-13T16:12',
      gameDescription: '',
      gameTurnTime: { unit: 'millis', millis: 43200000 },
      name: 'Overview - settings',
      realtimeTurnTime: 300000,
      showAccessCodes: true,
      timeWarning: 60000,
      turnPresentation: 'Turn-Pair-Letters'
    },
    platformTypes: {
      dirty: false,
      name: 'Platform Types',
      platformTypes: [
        {
          attributeTypes: [
            {
              attrId: 'comm-fish',
              attrType: 'AttributeTypeNumber',
              defaultValue: 100,
              description: 'fishing allowance',
              editableByPlayer: false,
              name: 'quota',
              units: 'tonnes'
            },
            {
              attrId: 'comm-fuel',
              attrType: 'AttributeTypeNumber',
              defaultValue: 5,
              description: 'fuel remaining',
              editableByPlayer: false,
              format: '0.00',
              name: 'fuel',
              units: 'tonnes'
            }
          ],
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
          uniqid: 'id-fisher',
          speedKts: [10, 20],
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
          travelMode: 'sea'
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
          uniqid: 'id-mcm',
          speedKts: [10],
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
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'frigate.svg',
          name: 'frigate',
          uniqid: 'id-frigate',
          speedKts: [6, 12, 18, 24],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Mixed'
            },
            {
              mobile: true,
              name: 'Active'
            },
            {
              mobile: true,
              name: 'Passive'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: [
            'Full capability',
            'Limited capability',
            'Immobile',
            'Destroyed'
          ],
          icon: 'uas.svg',
          name: 'Unmanned Airborne Vehicle',
          uniqid: 'id-uav',
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
          travelMode: 'air'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'frigate-ta.svg',
          name: 'frigate-ta',
          uniqid: 'id-frigate-ta',
          speedKts: [6, 12, 18, 24],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Mixed'
            },
            {
              mobile: true,
              name: 'Active'
            },
            {
              mobile: true,
              name: 'Passive'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'missile.svg',
          name: 'Missile',
          uniqid: 'id-missile',
          states: [
            {
              mobile: false,
              name: 'Inactive'
            },
            {
              mobile: true,
              name: 'Deployed'
            }
          ],
          travelMode: 'air'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'carrier.svg',
          name: 'Carrier',
          uniqid: 'id-carrier',
          speedKts: [6, 12, 18, 24, 30],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Air Ops'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'auxiliary.svg',
          name: 'Auxiliary',
          uniqid: 'id-auxiliary',
          speedKts: [6, 12],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Supporting'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'destroyer.svg',
          name: 'Destroyer',
          uniqid: 'id-destroyer',
          speedKts: [6, 12, 18, 24, 30],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Loitering'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'ssk.svg',
          name: 'SSK',
          uniqid: 'id-ssk',
          speedKts: [6, 12, 18],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Aggressove'
            },
            {
              mobile: true,
              name: 'Evasive'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'ssn.svg',
          name: 'SSN',
          uniqid: 'id-ssn',
          speedKts: [6, 12, 18, 24],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: true,
              name: 'Aggressove'
            },
            {
              mobile: true,
              name: 'Evasive'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'helicopter.svg',
          name: 'Helicopter',
          uniqid: 'id-helo',
          states: [
            {
              mobile: true,
              name: 'Active'
            },
            {
              mobile: false,
              name: 'Landed'
            }
          ],
          travelMode: 'air'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'mpa.svg',
          name: 'mpa',
          uniqid: 'id-mpa',
          states: [
            {
              mobile: true,
              name: 'Active'
            },
            {
              mobile: false,
              name: 'Landed'
            }
          ],
          travelMode: 'air'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'fixed-wing-aircraft.svg',
          name: 'Fixed Wing Aircraft',
          uniqid: 'id-fixed-wing',
          states: [
            {
              mobile: true,
              name: 'Active'
            },
            {
              mobile: false,
              name: 'Landed'
            }
          ],
          travelMode: 'air'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'merchant-vessel.svg',
          name: 'Merchant vessel',
          uniqid: 'id-merchant',
          speedKts: [6, 12],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'boghammer.svg',
          name: 'Boghammer',
          uniqid: 'id-boghammer',
          speedKts: [6, 12, 18, 24, 30],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'agi.svg',
          name: 'AGI',
          uniqid: 'id-agi',
          speedKts: [6, 12, 18],
          states: [
            {
              mobile: true,
              name: 'Transiting'
            },
            {
              mobile: false,
              name: 'Moored'
            }
          ],
          travelMode: 'sea'
        },
        {
          conditions: ['Working', 'Disabled', 'Mission Kill'],
          icon: 'task-group.svg',
          name: 'Task Group',
          uniqid: 'id-task-group',
          speedKts: [6, 12, 18, 24, 30],
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
          travelMode: 'sea'
        }
      ],
      selectedType: ''
    }
  },
  gameTurn: 6,
  infoType: true,
  messageType: 'InfoMessage',
  name: 'wargame-l6nngxlk',
  phase: 'planning',
  turnEndTime: '2021-08-10T16:17:26+01:00',
  wargameInitiated: true,
  wargameTitle: 'P9 Test'
};

export default game;
