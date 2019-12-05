export default {
  selectedForce: 'umpire',
  forceColor: '#FCFBEE',
  selectedRole: 'Game Control',
  isObserver: true,
  controlUi: true,
  currentTurn: 0,
  phase: 'adjudication',
  gameDate: '2019-12-02T08:54:53+00:00',
  gameTurnTime: 43200000,
  realtimeTurnTime: 300000,
  turnEndTime: '2019-12-02T09:01:20+00:00',
  adjudicationStartTime: '2019-12-02T08:56:20+00:00',
  gameDescription: '',
  currentWargame: 'wargame-k3o76xdi',
  wargameTitle: 'wargame-k3o76xdi',
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
    messages: []
  },
  channels: {
    'channel-k3o77d7p': {
      name: 'Common Channel',
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
      forceIcons: ['http://localhost:8080/default_img/forceDefault.png'],
      messages: [
        {
          details: {
            channel: 'infoTypeChannelMarkerk3o797ft'
          },
          infoType: true,
          gameTurn: 0
        }
      ],
      unreadMessageCount: 0,
      observing: false
    },
    'channel-k3o781qe': {
      name: 'White Channel',
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
      forceIcons: [],
      messages: [
        {
          details: {
            channel: 'infoTypeChannelMarkerk3o797ft'
          },
          infoType: true,
          gameTurn: 0
        }
      ],
      unreadMessageCount: 0,
      observing: false
    }
  },
  allChannels: [
    {
      name: 'Common Channel',
      uniqid: 'channel-k3o77d7p',
      participants: [
        {
          force: 'Black',
          forceUniqid: 'force-k3o7750p',
          roles: [],
          templates: [],
          icon: 'http://localhost:8080/default_img/forceDefault.png',
          subscriptionId: 'k3o77k5z'
        },
        {
          force: 'White',
          forceUniqid: 'umpire',
          roles: [],
          templates: [],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          subscriptionId: 'k3o77ofq'
        }
      ]
    },
    {
      name: 'White Channel',
      uniqid: 'channel-k3o781qe',
      participants: [
        {
          force: 'White',
          forceUniqid: 'umpire',
          roles: [],
          templates: [],
          icon: 'http://localhost:8080/default_img/umpireDefault.png',
          subscriptionId: 'k3o78a3a'
        }
      ]
    }
  ],
  allForces: [
    {
      name: 'White',
      uniqid: 'umpire',
      overview: 'Umpire force.',
      roles: [
        {
          name: 'Game Control',
          password: 'pk3o76tww',
          control: true,
          isObserver: true,
          isInsightViewer: true
        }
      ],
      icon: 'http://localhost:8080/default_img/umpireDefault.png',
      color: '#FCFBEE',
      umpire: true,
      dirty: false
    },
    {
      name: 'Black',
      uniqid: 'force-k3o7750p',
      overview: 'An overview written here..',
      roles: [
        {
          name: 'CO',
          password: 'pk3o7750q',
          control: false,
          isObserver: false,
          isInsightViewer: false
        }
      ],
      icon: 'http://localhost:8080/default_img/forceDefault.png',
      color: '#3dd0ff',
      umpire: false,
      dirty: false
    }
  ],
  allTemplates: [
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'State of World',
      details: {
        type: 'object',
        properties: {
          TurnNumber: {
            title: 'Turn',
            type: 'string',
            format: 'number'
          },
          Summary: {
            title: 'Summary',
            type: 'string',
            format: 'textarea'
          },
          ForceDisposition: {
            title: 'Force disposition',
            type: 'string',
            format: 'url'
          },
          Narrative: {
            items: {
              properties: {
                Serial: {
                  title: 'Serial',
                  type: 'string',
                  format: 'text'
                },
                Description: {
                  title: 'Description',
                  type: 'string',
                  format: 'textarea'
                }
              },
              title: 'Events',
              type: 'object'
            },
            title: 'Narrative',
            type: 'array',
            format: 'table',
            minItems: 1
          }
        },
        title: 'State of World 2',
        required: ['TurnNumber', 'Summary', 'ForceDisposition', 'Narrative']
      },
      completed: false,
      _id: 'k16eedkp',
      _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
    },
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
        required: ['OverallIntentions', 'Orders']
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
          title: {
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
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Request for Support',
      details: {
        type: 'object',
        properties: {
          Addressee: {
            type: 'string'
          },
          Request: {
            type: 'string',
            format: 'textarea'
          }
        },
        title: 'Request for Support',
        format: 'grid'
      },
      completed: false,
      _id: 'k16eedkk',
      _rev: '1-4c3969d57f8cf470858dd1819ee5c2e8'
    },
    {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Request for Information',
      details: {
        type: 'object',
        properties: {
          Addressee: {
            type: 'string'
          },
          Request: {
            type: 'string',
            format: 'textarea'
          }
        },
        title: 'Request for Information',
        format: 'grid'
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
                enum: ['N', 'S']
              },
              Long: {
                type: 'number'
              },
              'Long Hemi': {
                type: 'string',
                enum: ['E', 'W']
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
            enum: ['Minor', 'Major', 'Critical']
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
    }
  ],
  showObjective: false,
  wargameInitiated: true,
  feedbackMessages: [],
  tourIsOpen: false,
  modalOpened: null,
  showAccessCodes: true,
  timeWarning: 60000,
  isInsightViewer: true
};
