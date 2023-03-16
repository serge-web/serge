import { CHANNEL_CHAT, CHANNEL_CUSTOM, CHANNEL_MAPPING, CUSTOM_MESSAGE, FEEDBACK_MESSAGE, PARTICIPANT_CHAT, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING } from '@serge/config'
import { PlayerUi } from '@serge/custom-types'

const state: PlayerUi = {
  selectedForce: undefined,
  logPlayerActivity: false,
  selectedRole: 'CO',
  selectedRoleName: 'CO',
  isUmpire: true,
  playerMessageLog: {},
  attributeTypes: [],
  perForceActivities: [],
  updateMessageState: false,
  isRFIManager: false,
  markerIcons: [],
  isGameControl: true,
  infoMarkers: [],
  isObserver: false,
  currentTurn: 57,
  phase: 'adjudication',
  gameDate: '2019-10-29T02:02',
  gameTurnTime: { unit: 'millis', millis: 43200000 },
  realtimeTurnTime: 300000,
  turnEndTime: '2019-10-29T02:02',
  adjudicationStartTime: '2020-09-30T09:17:56+07:00',
  gameDescription: '',
  currentWargame: 'wargame-k16fadm4',
  wargameTitle: 'Monday',
  chatChannel: {
    name: 'game-admin',
    template: {
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
    messages: [
      {
        details: {
          channel: 'game-admin',
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:06:19.602Z',
          turnNumber: 12
        },
        message: {
          content: 'My Second Test Message'
        },
        _id: '2020-12-06T11:06:19.602Z',
        _rev: '1-e17592723c22372813d53a52782f9b50',
        messageType: CUSTOM_MESSAGE,
        hasBeenRead: false,
        isOpen: false
      },
      {
        details: {
          channel: 'game-admin',
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:06:12.434Z',
          turnNumber: 12
        },
        message: {
          content: 'My test Message'
        },
        _id: '2020-12-06T11:06:12.434Z',
        _rev: '1-f70b71621c42d3b94ad94ebc09cea9a0',
        messageType: CUSTOM_MESSAGE,
        hasBeenRead: false,
        isOpen: false
      },
      {
        details: {
          channel: 'game-admin',
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'http://localhost:8080/default_img/forceDefault.png'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:05:07.490Z',
          turnNumber: 12
        },
        message: {
          content: 'ddaw'
        },
        _id: '2020-12-06T11:05:07.491Z',
        _rev: '1-99a75cd848ce35b580fc41e50bdf51f3',
        messageType: CUSTOM_MESSAGE,
        hasBeenRead: false,
        isOpen: false
      }
    ]
  },
  channels: {
    'channel-k16fgs63': {
      uniqid: 'adsadfa',
      name: 'Blue Chat',
      cData: {
        channelType: CHANNEL_CUSTOM,
        name: 'Channel 16',
        participants: [
          { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
          { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
          { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
        ],
        uniqid: 'channel-k63pjit0'
      },
      templates: [
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
        }
      ],
      forceIcons: [
        'http://localhost:8080/default_img/forceDefault.png'
      ],
      forceColors: [
        '#3dd0ff'
      ],
      messages: [
        {
          details: {
            channel: 'channel-k16fgs63',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-07T05:18:20.053Z',
            turnNumber: 23
          },
          message: {
            content: 'Test Message 3'
          },
          _id: '2020-12-07T05:18:20.053Z',
          _rev: '1-0ab29a1ecad5f942ad5d62b01930a4f0',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: true,
          isOpen: false
        },
        {
          details: {
            channel: 'channel-k16fgs63',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-07T05:18:11.074Z',
            turnNumber: 4
          },
          message: {
            content: 'Test Message 2'
          },
          _id: '2020-12-07T05:18:11.074Z',
          _rev: '1-eb21db75ad81aa503e2ef09118c7c241',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: true,
          isOpen: true
        },
        {
          details: {
            channel: 'channel-k16fgs63',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-07T05:17:45.437Z',
            turnNumber: 4
          },
          message: {
            content: 'Test Message'
          },
          _id: '2020-12-07T05:17:45.437Z',
          _rev: '1-4996ecb4c6b83704ddfa72c5f3d6a7b0',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: true,
          isOpen: false
        }
      ],
      unreadMessageCount: 1,
      observing: false
    },
    'channel-k16fheej': {
      uniqid: 'k16fheej',
      cData: {
        channelType: CHANNEL_CUSTOM,
        name: 'Channel 16',
        participants: [
          { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
          { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
          { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
        ],
        uniqid: 'channel-k63pjit0'
      },
      name: 'Blue HQ',
      templates: [
        {
          lastUpdated: '2019-09-30T12:37:26.705Z',
          title: 'PG19 Weekly Orders',
          details: {
            type: 'object',
            properties: {
              CommandersIntent: {
                title: 'Commanders Intent',
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
                    Orders: {
                      title: 'Orders',
                      type: 'string',
                      format: 'textarea'
                    },
                    ContingencyOrders: {
                      title: 'Contingency Orders',
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
              },
              PxTasking: {
                title: 'Px Tasking',
                type: 'string',
                format: 'textarea'
              },
              AlliedUnitTasking: {
                title: 'Allied Unit Tasking',
                type: 'string',
                format: 'textarea'
              },
              ForceActionOnContact: {
                title: 'Force action on contact',
                type: 'string',
                format: 'textarea'
              },
              ForceActionOnLossOfContact: {
                title: 'Force action on loss of contact',
                type: 'string',
                format: 'textarea'
              },
              SupportingLogisticsActivity: {
                title: 'Supporting logistics activity',
                type: 'string',
                format: 'textarea'
              }
            },
            title: 'PG19 Weekly Orders',
            required: [
              'CommandersIntent',
              'Orders',
              'PxTasking',
              'AlliedUnitTasking',
              'ForceActionOnContact',
              'ForceActionOnLossOfContact',
              'SupportingLogisticsActivity'
            ]
          },
          completed: false,
          _id: 'k16eedko',
          _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
        }
      ],
      forceIcons: [
        'http://localhost:8080/default_img/forceDefault.png',
        'http://localhost:8080/default_img/umpireDefault.png'
      ],
      forceColors: [
        '#3dd0ff',
        '#FCFBEE'
      ],
      messages: [
        {
          details: {
            channel: 'channel-k16fheej',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'PG19 Weekly Orders',
            timestamp: '2020-12-07T05:18:34.179Z',
            turnNumber: 12
          },
          message: {
            CommandersIntent: 'Test M',
            Orders: [
              {
                Unit: '',
                Orders: '',
                ContingencyOrders: ''
              }
            ],
            PxTasking: '',
            AlliedUnitTasking: '',
            ForceActionOnContact: '',
            ForceActionOnLossOfContact: '',
            SupportingLogisticsActivity: ''
          },
          _id: '2020-12-07T05:18:34.179Z',
          _rev: '1-51716232d1217f6296649ffb1b393f25',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: false,
          isOpen: false
        }
      ],
      unreadMessageCount: 1,
      observing: false
    },
    'channel-k4cnw3nr': {
      uniqid: 'k4cnw3nr',
      cData: {
        channelType: CHANNEL_MAPPING,
        constraints: {
          bounds: [[2, 3], [2, 4]],
          h3res: 3,
          minZoom: 4
        },
        name: 'mapping',
        participants: [
          { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', pType: PARTICIPANT_MAPPING },
          { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', pType: PARTICIPANT_MAPPING },
          { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', pType: PARTICIPANT_MAPPING }
        ],
        uniqid: 'channel-k63pjit0'
      },
      name: 'Mapping',
      forceIcons: [
        'http://localhost:8080/default_img/umpireDefault.png',
        'http://localhost:8080/default_img/forceDefault.png'
      ],
      forceColors: [
        '#FCFBEE',
        '#3dd0ff'
      ],
      messages: [],
      unreadMessageCount: 0,
      observing: false
    }
  },
  allChannels: [
    {
      name: 'Blue Chat',
      uniqid: 'channel-k16fgs63',
      channelType: CHANNEL_CHAT,
      participants: [
        {
          pType: PARTICIPANT_CHAT,
          forceUniqid: 'force-k16fdykj',
          roles: [],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          subscriptionId: 'k16fh4xo'
        }
      ]
    },
    {
      name: 'Blue HQ',
      uniqid: 'channel-k16fheej',
      channelType: CHANNEL_CUSTOM,
      participants: [
        {
          forceUniqid: 'force-k16fdykj',
          pType: PARTICIPANT_CUSTOM,
          roles: [
          ],
          templates: [
            {
              _id: 'weekly orders',
              title: 'weekly orders'
            }
          ],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          subscriptionId: 'k16fhq4b'
        },
        {
          forceUniqid: 'umpire',
          pType: PARTICIPANT_CUSTOM,
          roles: [
          ],
          templates: [
            {
              _id: 'chat',
              title: 'Chat'
            }
          ],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          subscriptionId: 'k16fhy24'
        }
      ]
    },
    {
      name: 'Mapping',
      uniqid: 'channel-k4cnw3nr',
      constraints: {
        bounds: [[2, 3], [3, 2]],
        h3res: 3,
        minZoom: 4
      },
      channelType: CHANNEL_MAPPING,
      participants: [
        {
          pType: PARTICIPANT_MAPPING,
          forceUniqid: 'umpire',
          roles: [],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          subscriptionId: 'k4cnwg1q'
        },
        {
          pType: PARTICIPANT_MAPPING,
          forceUniqid: 'force-k16fdykj',
          roles: [],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          subscriptionId: 'k4cnwjfx'
        }
      ]
    }
  ],
  allPeriods: [
    {
      gameDate: '2022-05-25T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 1
    },
    {
      gameDate: '2022-05-28T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 1
    },
    {
      gameDate: '2022-05-04T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 2
    },
    {
      gameDate: '2022-05-04T04:00',
      gameTurnTime: {
        millis: 259200000,
        unit: 'millis'
      },
      gameTurn: 2
    }
  ],
  allForces: [
    {
      name: 'White',
      uniqid: 'umpire',
      overview: 'Umpire force.',
      roles: [
      ],
      iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
      color: '#FCFBEE',
      umpire: true,
      dirty: false
    },
    {
      name: 'Blue',
      uniqid: 'force-k16fdykj',
      overview: 'An overview written here..',
      roles: [
        {
          name: 'CO',
          roleId: 'C)',
          isGameControl: false,
          isObserver: false,
          isInsightViewer: false
        },
        {
          name: 'Comms',
          roleId: '234',
          isObserver: false,
          isInsightViewer: false,
          isGameControl: false
        }
      ],
      iconURL: 'http://localhost:8080/default_img/forceDefault.png',
      color: '#3dd0ff',
      umpire: false,
      dirty: false
    }
  ],
  allTemplatesByKey: {
    'State of World L': {
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
                              enum: [
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
                  enum: [
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
    'Daily intentions': {
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
                  enum: [
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
    'Message it': {
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
    'Weather forecast': {
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
                enum: [
                  'N',
                  'S'
                ]
              },
              Long: {
                type: 'number'
              },
              'Long Hemi': {
                type: 'string',
                enum: [
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
    }
  },
  allPlatformTypes: [],
  showObjective: false,
  wargameInitiated: true,
  feedbackMessages: [
    {
      details: {
        channel: 'Feedback',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: 'CO',
          roleName: 'CO-Role',
          iconURL: 'ss'
        },
        messageType: 'Chat',
        timestamp: '2020-12-07T06:21:42.431Z',
        turnNumber: 12
      },
      message: {
        content: 'La test'
      },
      messageType: FEEDBACK_MESSAGE,
      _id: '2020-12-07T06:21:42.431Z',
      _rev: '1-dfe835c058e9711c954ad22366a8a2e8'
    },
    {
      details: {
        channel: 'Feedback',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          roleId: 'CO',
          roleName: 'CO-Role',
          iconURL: 'ss'
        },
        messageType: 'Chat',
        timestamp: '2020-12-06T11:05:12.038Z',
        turnNumber: 12
      },
      message: {
        content: 'ds'
      },
      messageType: FEEDBACK_MESSAGE,
      _id: '2020-12-06T11:05:12.038Z',
      _rev: '1-5201037a26e24f70ae45464c20b312aa'
    },
    {
      details: {
        channel: 'Feedback',
        from: {
          force: 'White',
          forceColor: '#FCFBEE',
          roleId: 'CO',
          roleName: 'CO-Role',
          iconURL: 'ss'
        },
        messageType: 'Chat',
        timestamp: '2020-10-01T01:19:56.492Z',
        turnNumber: 12
      },
      message: {
        content: 'Lorem ipsum do lor sit amet'
      },
      messageType: FEEDBACK_MESSAGE,
      _id: '2020-10-01T01:19:56.492Z',
      _rev: '1-1e2289c6ee47e2dfd1ffb7e84f66514f'
    }
  ],
  tourIsOpen: false,
  showAccessCodes: true,
  isInsightViewer: false,
  timeWarning: 60000
}

const testState: any = {
  action: {
    type: 'SET_LATEST_WARGAME_MESSAGE',
    payload: {
      details: {
        channel: 'channel-k16fgs63',
        from: {
          force: 'Blue',
          forceColor: '#3dd0ff',
          role: 'CO',
          icon: 'http://localhost:8080/default_img/forceDefault.png'
        },
        messageType: 'Chat',
        timestamp: '2020-12-07T06:38:43.642Z'
      },
      message: {
        content: 'My test message'
      },
      _id: '2020-12-07T06:38:43.643Z',
      _rev: '1-aa5428939cd0e0dd1a5ec9106316aa08'
    }
  },
  state: state,
  newState: {
    selectedForce: undefined,
    logPlayerActivity: false,
    selectedRole: 'CO',
    selectedRoleName: 'CO',
    isUmpire: true,
    attributeTypes: [],
    perForceActivities: [],
    updateMessageState: false,
    isRFIManager: false,
    markerIcons: [],
    isGameControl: true,
    infoMarkers: [],
    isObserver: false,
    currentTurn: 57,
    phase: 'adjudication',
    gameDate: '2019-10-29T02:02',
    gameTurnTime: { unit: 'millis', millis: 43200000 },
    realtimeTurnTime: 300000,
    turnEndTime: '2019-10-29T02:02',
    adjudicationStartTime: '2020-09-30T09:17:56+07:00',
    gameDescription: '',
    currentWargame: 'wargame-k16fadm4',
    wargameTitle: 'Monday',
    chatChannel: {
      name: 'game-admin',
      template: {
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
      messages: [
        {
          details: {
            channel: 'game-admin',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-06T11:06:19.602Z',
            turnNumber: 12
          },
          message: {
            content: 'My Second Test Message'
          },
          _id: '2020-12-06T11:06:19.602Z',
          _rev: '1-e17592723c22372813d53a52782f9b50',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: false,
          isOpen: false
        },
        {
          details: {
            channel: 'game-admin',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-06T11:06:12.434Z',
            turnNumber: 12
          },
          message: {
            content: 'My test Message'
          },
          _id: '2020-12-06T11:06:12.434Z',
          _rev: '1-f70b71621c42d3b94ad94ebc09cea9a0',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: false,
          isOpen: false
        },
        {
          details: {
            channel: 'game-admin',
            from: {
              force: 'Blue',
              forceColor: '#3dd0ff',
              roleId: 'CO',
              roleName: 'CO-Role',
              iconURL: 'http://localhost:8080/default_img/forceDefault.png'
            },
            messageType: 'Chat',
            timestamp: '2020-12-06T11:05:07.490Z',
            turnNumber: 12
          },
          message: {
            content: 'ddaw'
          },
          _id: '2020-12-06T11:05:07.491Z',
          _rev: '1-99a75cd848ce35b580fc41e50bdf51f3',
          messageType: CUSTOM_MESSAGE,
          hasBeenRead: false,
          isOpen: false
        }
      ]
    },
    channels: {
      'channel-k16fgs63': {
        uniqid: 'adsadfa',
        name: 'Blue Chat',
        cData: {
          channelType: CHANNEL_CUSTOM,
          name: 'Channel 16',
          participants: [
            { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
            { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
            { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
          ],
          uniqid: 'channel-k63pjit0'
        },
        templates: [
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
          }
        ],
        forceIcons: [
          'http://localhost:8080/default_img/forceDefault.png'
        ],
        forceColors: [
          '#3dd0ff'
        ],
        messages: [
          {
            details: {
              channel: 'channel-k16fgs63',
              from: {
                force: 'Blue',
                forceColor: '#3dd0ff',
                roleId: 'rkrlw445e',
                roleName: 'CO',
                iconURL: 'http://localhost:8080/default_img/forceDefault.png'
              },
              messageType: 'Chat',
              timestamp: '2020-12-07T06:38:43.642Z',
              turnNumber: 1
            },
            message: {
              content: 'My test message'
            },
            _id: '2020-12-07T06:38:43.643Z',
            _rev: '1-aa5428939cd0e0dd1a5ec9106316aa08',
            messageType: CUSTOM_MESSAGE,
            hasBeenRead: false,
            isOpen: false
          },
          {
            details: {
              channel: 'channel-k16fgs63',
              from: {
                force: 'Blue',
                forceColor: '#3dd0ff',
                roleId: 'CO',
                roleName: 'CO-Role',
                iconURL: 'http://localhost:8080/default_img/forceDefault.png'
              },
              messageType: 'Chat',
              timestamp: '2020-12-07T05:18:20.053Z',
              turnNumber: 23
            },
            message: {
              content: 'Test Message 3'
            },
            _id: '2020-12-07T05:18:20.053Z',
            _rev: '1-0ab29a1ecad5f942ad5d62b01930a4f0',
            messageType: CUSTOM_MESSAGE,
            hasBeenRead: true,
            isOpen: false
          },
          {
            details: {
              channel: 'channel-k16fgs63',
              from: {
                force: 'Blue',
                forceColor: '#3dd0ff',
                roleId: 'CO',
                roleName: 'CO-Role',
                iconURL: 'http://localhost:8080/default_img/forceDefault.png'
              },
              messageType: 'Chat',
              timestamp: '2020-12-07T05:18:11.074Z',
              turnNumber: 4
            },
            message: {
              content: 'Test Message 2'
            },
            _id: '2020-12-07T05:18:11.074Z',
            _rev: '1-eb21db75ad81aa503e2ef09118c7c241',
            messageType: CUSTOM_MESSAGE,
            hasBeenRead: true,
            isOpen: true
          },
          {
            details: {
              channel: 'channel-k16fgs63',
              from: {
                force: 'Blue',
                forceColor: '#3dd0ff',
                roleId: 'CO',
                roleName: 'CO-Role',
                iconURL: 'http://localhost:8080/default_img/forceDefault.png'
              },
              messageType: 'Chat',
              timestamp: '2020-12-07T05:17:45.437Z',
              turnNumber: 4
            },
            message: {
              content: 'Test Message'
            },
            _id: '2020-12-07T05:17:45.437Z',
            _rev: '1-4996ecb4c6b83704ddfa72c5f3d6a7b0',
            messageType: CUSTOM_MESSAGE,
            hasBeenRead: true,
            isOpen: false
          }
        ],
        unreadMessageCount: 2,
        observing: false
      },
      'channel-k16fheej': {
        uniqid: 'k16fheej',
        cData: {
          channelType: CHANNEL_CUSTOM,
          name: 'Channel 16',
          participants: [
            { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
            { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
            { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
          ],
          uniqid: 'channel-k63pjit0'
        },
        name: 'Blue HQ',
        templates: [
          {
            lastUpdated: '2019-09-30T12:37:26.705Z',
            title: 'PG19 Weekly Orders',
            details: {
              type: 'object',
              properties: {
                CommandersIntent: {
                  title: 'Commanders Intent',
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
                      Orders: {
                        title: 'Orders',
                        type: 'string',
                        format: 'textarea'
                      },
                      ContingencyOrders: {
                        title: 'Contingency Orders',
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
                },
                PxTasking: {
                  title: 'Px Tasking',
                  type: 'string',
                  format: 'textarea'
                },
                AlliedUnitTasking: {
                  title: 'Allied Unit Tasking',
                  type: 'string',
                  format: 'textarea'
                },
                ForceActionOnContact: {
                  title: 'Force action on contact',
                  type: 'string',
                  format: 'textarea'
                },
                ForceActionOnLossOfContact: {
                  title: 'Force action on loss of contact',
                  type: 'string',
                  format: 'textarea'
                },
                SupportingLogisticsActivity: {
                  title: 'Supporting logistics activity',
                  type: 'string',
                  format: 'textarea'
                }
              },
              title: 'PG19 Weekly Orders',
              required: [
                'CommandersIntent',
                'Orders',
                'PxTasking',
                'AlliedUnitTasking',
                'ForceActionOnContact',
                'ForceActionOnLossOfContact',
                'SupportingLogisticsActivity'
              ]
            },
            completed: false,
            _id: 'k16eedko',
            _rev: '1-9682b67e15ded61bd4f8d863179d5c04'
          }
        ],
        forceIcons: [
          'http://localhost:8080/default_img/forceDefault.png',
          'http://localhost:8080/default_img/umpireDefault.png'
        ],
        forceColors: [
          '#3dd0ff',
          '#FCFBEE'
        ],
        messages: [
          {
            details: {
              channel: 'channel-k16fheej',
              from: {
                force: 'Blue',
                forceColor: '#3dd0ff',
                roleId: 'CO',
                roleName: 'CO-Role',
                iconURL: 'http://localhost:8080/default_img/forceDefault.png'
              },
              messageType: 'PG19 Weekly Orders',
              timestamp: '2020-12-07T05:18:34.179Z',
              turnNumber: 12
            },
            message: {
              CommandersIntent: 'Test M',
              Orders: [
                {
                  Unit: '',
                  Orders: '',
                  ContingencyOrders: ''
                }
              ],
              PxTasking: '',
              AlliedUnitTasking: '',
              ForceActionOnContact: '',
              ForceActionOnLossOfContact: '',
              SupportingLogisticsActivity: ''
            },
            _id: '2020-12-07T05:18:34.179Z',
            _rev: '1-51716232d1217f6296649ffb1b393f25',
            messageType: CUSTOM_MESSAGE,
            hasBeenRead: false,
            isOpen: false
          }
        ],
        unreadMessageCount: 1,
        observing: false
      },
      'channel-k4cnw3nr': {
        uniqid: 'k4cnw3nr',
        cData: {
          channelType: CHANNEL_MAPPING,
          constraints: {
            bounds: [[2, 3], [2, 4]],
            h3res: 3,
            minZoom: 4
          },
          name: 'mapping',
          participants: [
            { forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', pType: PARTICIPANT_MAPPING },
            { forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', pType: PARTICIPANT_MAPPING },
            { forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', pType: PARTICIPANT_MAPPING }
          ],
          uniqid: 'channel-k63pjit0'
        },
        name: 'Mapping',
        forceIcons: [
          'http://localhost:8080/default_img/umpireDefault.png',
          'http://localhost:8080/default_img/forceDefault.png'
        ],
        forceColors: [
          '#FCFBEE',
          '#3dd0ff'
        ],
        messages: [],
        unreadMessageCount: 0,
        observing: false
      }
    },
    allChannels: [
      {
        name: 'Blue Chat',
        uniqid: 'channel-k16fgs63',
        channelType: CHANNEL_CHAT,
        participants: [
          {
            pType: PARTICIPANT_CHAT,
            forceUniqid: 'force-k16fdykj',
            roles: [],
            icon: 'http://localhost:8080/default_img/forceDefault.png',
            subscriptionId: 'k16fh4xo'
          }
        ]
      },
      {
        name: 'Blue HQ',
        uniqid: 'channel-k16fheej',
        channelType: CHANNEL_CUSTOM,
        participants: [
          {
            forceUniqid: 'force-k16fdykj',
            pType: PARTICIPANT_CUSTOM,
            roles: [
            ],
            templates: [
              {
                _id: 'weekly orders',
                title: 'weekly orders'
              }
            ],
            icon: 'http://localhost:8080/default_img/forceDefault.png',
            subscriptionId: 'k16fhq4b'
          },
          {
            forceUniqid: 'umpire',
            pType: PARTICIPANT_CUSTOM,
            roles: [
            ],
            templates: [
              {
                _id: 'chat',
                title: 'Chat'
              }
            ],
            icon: 'http://localhost:8080/default_img/umpireDefault.png',
            subscriptionId: 'k16fhy24'
          }
        ]
      },
      {
        name: 'Mapping',
        uniqid: 'channel-k4cnw3nr',
        constraints: {
          bounds: [[2, 3], [3, 2]],
          h3res: 3,
          minZoom: 4
        },
        channelType: CHANNEL_MAPPING,
        participants: [
          {
            pType: PARTICIPANT_MAPPING,
            forceUniqid: 'umpire',
            roles: [],
            icon: 'http://localhost:8080/default_img/umpireDefault.png',
            subscriptionId: 'k4cnwg1q'
          },
          {
            pType: PARTICIPANT_MAPPING,
            forceUniqid: 'force-k16fdykj',
            roles: [],
            icon: 'http://localhost:8080/default_img/forceDefault.png',
            subscriptionId: 'k4cnwjfx'
          }
        ]
      }
    ],
    allPeriods: [
      {
        gameDate: '2022-05-25T04:00',
        gameTurnTime: {
          millis: 259200000,
          unit: 'millis'
        },
        gameTurn: 1
      },
      {
        gameDate: '2022-05-28T04:00',
        gameTurnTime: {
          millis: 259200000,
          unit: 'millis'
        },
        gameTurn: 1
      },
      {
        gameDate: '2022-05-04T04:00',
        gameTurnTime: {
          millis: 259200000,
          unit: 'millis'
        },
        gameTurn: 2
      },
      {
        gameDate: '2022-05-04T04:00',
        gameTurnTime: {
          millis: 259200000,
          unit: 'millis'
        },
        gameTurn: 2
      }
    ],
    allForces: [
      {
        name: 'White',
        uniqid: 'umpire',
        overview: 'Umpire force.',
        roles: [
        ],
        iconURL: 'http://localhost:8080/default_img/umpireDefault.png',
        color: '#FCFBEE',
        umpire: true,
        dirty: false
      },
      {
        name: 'Blue',
        uniqid: 'force-k16fdykj',
        overview: 'An overview written here..',
        roles: [
          {
            name: 'CO',
            roleId: 'C)',
            isGameControl: false,
            isObserver: false,
            isInsightViewer: false
          },
          {
            name: 'Comms',
            roleId: '234',
            isObserver: false,
            isInsightViewer: false,
            isGameControl: false
          }
        ],
        iconURL: 'http://localhost:8080/default_img/forceDefault.png',
        color: '#3dd0ff',
        umpire: false,
        dirty: false
      }
    ],
    allTemplatesByKey: {
      'State of World L': {
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
                                enum: [
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
                    enum: [
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
      'Daily intentions': {
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
                    enum: [
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
      'Message it': {
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
      'Weather forecast': {
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
                  enum: [
                    'N',
                    'S'
                  ]
                },
                Long: {
                  type: 'number'
                },
                'Long Hemi': {
                  type: 'string',
                  enum: [
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
      }
    },
    playerMessageLog: {
      rkrlw445e: {
        _id: '2020-12-07T06:38:43.643Z',
        hasBeenRead: false,
        lastMessageTime: '2020-12-07T06:38:43.642Z',
        lastMessageTitle: 'Chat',
        roleId: 'rkrlw445e'
      }
    },
    allPlatformTypes: [],
    showObjective: false,
    wargameInitiated: true,
    feedbackMessages: [
      {
        details: {
          channel: 'Feedback',
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'ss'
          },
          messageType: 'Chat',
          timestamp: '2020-12-07T06:21:42.431Z',
          turnNumber: 12
        },
        message: {
          content: 'La test'
        },
        messageType: FEEDBACK_MESSAGE,
        _id: '2020-12-07T06:21:42.431Z',
        _rev: '1-dfe835c058e9711c954ad22366a8a2e8'
      },
      {
        details: {
          channel: 'Feedback',
          from: {
            force: 'Blue',
            forceColor: '#3dd0ff',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'ss'
          },
          messageType: 'Chat',
          timestamp: '2020-12-06T11:05:12.038Z',
          turnNumber: 12
        },
        message: {
          content: 'ds'
        },
        messageType: FEEDBACK_MESSAGE,
        _id: '2020-12-06T11:05:12.038Z',
        _rev: '1-5201037a26e24f70ae45464c20b312aa'
      },
      {
        details: {
          channel: 'Feedback',
          from: {
            force: 'White',
            forceColor: '#FCFBEE',
            roleId: 'CO',
            roleName: 'CO-Role',
            iconURL: 'ss'
          },
          messageType: 'Chat',
          timestamp: '2020-10-01T01:19:56.492Z',
          turnNumber: 12
        },
        message: {
          content: 'Lorem ipsum do lor sit amet'
        },
        messageType: FEEDBACK_MESSAGE,
        _id: '2020-10-01T01:19:56.492Z',
        _rev: '1-1e2289c6ee47e2dfd1ffb7e84f66514f'
      }
    ],
    tourIsOpen: false,
    showAccessCodes: true,
    isInsightViewer: false,
    timeWarning: 60000
  }
}

export default testState
